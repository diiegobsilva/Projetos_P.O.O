import React from "react";
import { Component } from "react";
import Swal from "sweetalert2";
import Cliente from "../../Models/cliente";
import "../Style/myStyle.css"

type state = {
    produtos: any[]
    clientes: Cliente[]
}


export default class VendaProdutoAll extends Component<{}, state> {

    private selectCliente
    private selectItem
    private quantidade
    private item!: number
    private cliente!: Cliente | undefined

    constructor(props) {
        super(props)
        this.state = {
            produtos: [],
            clientes: []
        }

        this.selectCliente = React.createRef()
        this.selectItem = React.createRef()
        this.changeQuantidade = this.changeQuantidade.bind(this)
        this.changeItem = this.changeItem.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.changeClienteSelected = this.changeClienteSelected.bind(this)
    }

    changeQuantidade(event) {
        this.quantidade = event.target.value
    }

    changeItem(event) {
        let id = event.target.value
        this.item = Number(id)
    }

    changeClienteSelected(event) {
        let id = Number(event.target.value)
        this.cliente = this.state.clientes.find(it => it.id === id)
    }

    async onSubmit() {
        if (!this.quantidade || !this.item || this.item === -1 || !this.cliente) {
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
        let preco = this.state.produtos.find(it => it.id === this.item).preco
        let mapeado = {
            clienteId: this.cliente?.id,
            quantidadeVendida: this.quantidade,
            generoCliente: this.cliente?.genero,
            produtoId: this.item,
            valorCompra: this.quantidade * preco
        }

        await fetch("http://localhost:3001/clienteProduto/cadastrar", {
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

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<state>, snapshot?: any): void {
        var elems = document.querySelectorAll('select');
        M.FormSelect.init(elems);

        if (this.state != prevState) {
            this.selectItem.current.value = "-1"
            this.item = -1
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

        fetch("http://localhost:3001/cliente", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(r => r.json()).then(r => {
            this.setState({
                clientes: r
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
                                    <select ref={this.selectCliente} id="option" onChange={this.changeClienteSelected}>
                                        <option value="-1" selected disabled>Selecione</option>
                                        {this.state.clientes.map(item => {
                                            return (
                                                <option key={item.id} value={item.id}>{item.nome}</option>
                                            )
                                        })}
                                    </select>
                                    <label htmlFor="option">Cliente</label>
                                </div>

                                <div className={"input-field col s6"}>
                                    <select ref={this.selectItem} id="option" onChange={this.changeItem}>
                                        <option value="-1" selected disabled>Selecione</option>
                                        {this.state.produtos.map(item => {
                                            return (
                                                <option key={item.id} value={item.id}>{item.nome}</option>
                                            )
                                        })}
                                    </select>
                                    <label htmlFor="option">Produto</label>
                                </div>
                            </div>
                            <div id="vendaModalLine" className="row">
                                <div className={"input-field col s12"}>
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