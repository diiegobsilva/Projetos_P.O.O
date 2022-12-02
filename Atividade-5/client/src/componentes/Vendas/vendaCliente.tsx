import React from "react";
import { Component } from "react";
import Swal from "sweetalert2";
import Cliente from "../../Models/cliente";
import "../Style/myStyle.css"

type props = {
    cliente: Cliente
}

type state = {
    servicos: any[]
    produtos: any[]
    tipoVenda: string
    exibir: any[]
}

export default class VendaCliente extends Component<props, state> {

    private selectItem
    private selectTipo
    private quantidade
    private item!: number

    constructor(props: props | Readonly<props>) {
        super(props)
        this.state = {
            tipoVenda: '',
            servicos: [],
            produtos: [],
            exibir: [],
        }

        this.selectItem = React.createRef()
        this.selectTipo = React.createRef()
        this.changeQuantidade = this.changeQuantidade.bind(this)
        this.changeTipoVenda = this.changeTipoVenda.bind(this)
        this.changeItem = this.changeItem.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    changeQuantidade(event){
        this.quantidade = event.target.value
    }

    changeItem(event) {
        let id = event.target.value
        this.item = Number(id)
        console.log(this.item)
    }

    changeTipoVenda(event) {
        this.setState({
            tipoVenda: event.target.value === "-1" ? '' : event.target.value,
            exibir: event.target.value === "-1" ? [] : event.target.value === "Serviço" ? this.state.servicos : this.state.produtos
        })
    }

    async onSubmit(){
        if(!this.quantidade || !this.item || this.item === -1 || !this.state.tipoVenda){
            Swal.fire(
                'Erro!',
                'Preencha todos os campos.',
                'error'
            )
            return;
        }

        let resposta = await this.cadastro()
        if (resposta) {
            Swal.fire(
                'Sucesso!',
                'Venda realizada com sucesso.',
                'success'
            ).then(result => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                window.location.reload()
            })
        } else {
            Swal.fire(
                'Erro!',
                'Não foi possível realizar a venda.',
                'error'
            ).then(result => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                window.location.reload()
            })
        }
    }

    async cadastro(): Promise<boolean> {
        let retorno = false
        let mapeado

        if(this.state.tipoVenda === "Serviço"){
            let preco = this.state.servicos.find(it => it.id === this.item).preco
            mapeado = {
                clienteId: this.props.cliente.id,
                quantidadeVendida: this.quantidade,
                generoCliente: this.props.cliente.genero,
                servicoId: this.item,
                valorCompra: this.quantidade * preco
            }
        }else if(this.state.tipoVenda === "Produto"){
            let preco = this.state.produtos.find(it => it.id === this.item).preco
            mapeado = {
                clienteId: this.props.cliente.id,
                quantidadeVendida: this.quantidade,
                generoCliente: this.props.cliente.genero,
                produtoId: this.item,
                valorCompra: this.quantidade * preco
            }
        }

        console.log(mapeado)
        var url = this.state.tipoVenda === "Serviço" ? "http://localhost:3001/clienteServico/cadastrar" : "http://localhost:3001/clienteProduto/cadastrar"
        await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(mapeado)
        }).then(r => {
            retorno = r.status === 200
        })
        return retorno
    }

    componentDidMount(): void {
        var elems = document.querySelectorAll('select');
        M.FormSelect.init(elems);
        this.load()
    }

    componentDidUpdate(prevProps: Readonly<props>, prevState: Readonly<state>, snapshot?: any): void {
        var elems = document.querySelectorAll('select');
        M.FormSelect.init(elems);

        if(this.state.tipoVenda != prevState.tipoVenda){
            this.selectItem.current.value = "-1"
            this.item = -1
        }

        if (this.props != prevProps) {
            this.selectTipo.current.value = "-1"
            this.selectItem.current.value = "-1"
            this.item = -1
            this.setState({
                tipoVenda: '',
                servicos: [],
                produtos: [],
                exibir: [],
            }, () => {
                this.load()
            })
        }
    }

    load(): void {
        fetch("http://localhost:3001/produto", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(r => r.json()).then(r => {
            this.setState({
                produtos: r
            })
        });

        fetch("http://localhost:3001/servico", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(r => r.json()).then(r => {
            this.setState({
                servicos: r
            })
        });
    }

    render() {
        return (
            <>
                <div className="modal-content">
                    <h4 className="d-flex justify-content-center brand-logo">Vender</h4>
                    <br></br><br></br><br></br>
                    <div className="row">
                        <form className="col s12">
                        <div id="vendaModalLine" className="row">

                            <div className="input-field col s6">
                                <select ref={this.selectTipo}  id="option" onChange={this.changeTipoVenda}>
                                    <option value="" selected disabled>Opção de venda</option>
                                    <option value="Serviço">Serviço</option>
                                    <option value="Produto">Produto</option>
                                </select>
                                <label htmlFor="option">Venda</label>
                            </div>

                            <div className={"input-field col s6 " + (!this.state.tipoVenda ? "hidden" : "")}>
                                <select ref={this.selectItem}  id="option" onChange={this.changeItem}>
                                    <option value="-1" selected disabled>Selecione</option>
                                    {this.state.exibir.map(item => {
                                        return (
                                            <option key={item.id} value={item.id}>{item.nome}</option>
                                        )
                                    })}
                                </select>
                                <label htmlFor="option">{this.state.tipoVenda}</label>
                            </div>
                            <div className={"input-field col s12 " + (!this.state.tipoVenda ? "hidden" : "")}>
                                <input onChange={this.changeQuantidade} id="quantidade" type="text" className="validate" />
                                <label htmlFor="quantidade">Quantidade</label>
                            </div>
                        </div>
                        </form>
                    </div >
                </div>
                <div className="modal-footer" id="cagarButao">
                    <button id="cancelButtonContainer" className="modal-close btn-flat" style={{margin:'0 20px 30px 0'}}>
                        <a href="#!"></a>Cancelar
                    </button>
                    <button id="cadastrarButtonContainer" onClick={this.onSubmit} type="submit" name="action" className="btn-flat" style={{marginBottom:'30px'}}>
                        <a href="#!"></a>Vender
                    </button>
                </div>
            </>
        )
    }
}
