import { Component } from "react";
import Swal from "sweetalert2";
import Produto from "../../Models/produto";

type props = {
    produto: Produto
}

type state = {
    nome: string
}

export default class FormularioEdicaoProduto extends Component<props, state> {

    private nome
    private preco
    private estoque

    constructor(props: props | Readonly<props>) {
        super(props);
        this.state = {
            nome: ''
        }

        this.onClickNome = this.onClickNome.bind(this)
        this.onClickPreco = this.onClickPreco.bind(this)
        this.onClickEstoque = this.onClickEstoque.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount(): void {
        var elems = document.querySelectorAll('select');
        M.FormSelect.init(elems);
        this.load()
    }

    componentDidUpdate(prevProps: Readonly<props>, prevState: Readonly<state>, snapshot?: any): void {
        if(this.props != prevProps){
            this.load()
        }
    }

    load(): void {
        console.log(this.props)
        this.setState({
            nome: this.props.produto.nome
        })
        this.nome = this.props.produto.nome
        this.preco = this.props.produto.preco
        this.estoque = this.props.produto.estoque
    }

    async cadastro(): Promise<boolean> {
        let retorno = false
        let mapeado = {
            nome: this.nome,
            preco: this.preco,
            estoque: this.estoque
        }
        console.log(mapeado)
        await fetch("http://localhost:3001/produto/modificar/" + this.props.produto.id, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(mapeado)
        }).then(r => {
            retorno = r.status === 200
        })
        return retorno
    }

    async onSubmit() {
        if (!this.nome || !this.preco || !this.estoque) {
            Swal.fire(
                'Erro!',
                'Preencha todos os campos.',
                'error'
            )
            return
        }

        let resposta = await this.cadastro()
        if (resposta) {
            Swal.fire(
                'Sucesso!',
                'Produto atualizado com sucesso.',
                'success'
            ).then(result => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                window.location.reload()
            })
        } else {
            Swal.fire(
                'Erro!',
                'N??o foi poss??vel atualizar.',
                'error'
            ).then(result => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                window.location.reload()
            })
        }
    }

    onClickNome(event) {
        this.nome = event.target.value
    }

    onClickPreco(event) {
        this.preco = event.target.value
    }

    onClickEstoque(event) {
        this.estoque = event.target.value
    }

    render() {
        return (
            <>
                <div className="modal-content">
                    <h4 className="d-flex justify-content-center brand-logo">Editar Produto</h4>
                    <br></br><br></br><br></br>
                    <div className="row">
                        <form className="col s12">
                            <div id="modalLine" className="row">
                                <div className="input-field col s12">
                                    <input defaultValue={this.nome} onChange={this.onClickNome} id="first_name" type="text" className="validate" />
                                    <label htmlFor="first_name" className="active">Nome</label>
                                </div>
                                <div className="input-field col s6">
                                    <input defaultValue={this.preco} id="preco" onChange={this.onClickPreco} type="number" className="validate" />
                                    <label htmlFor="preco" className="active">Pre??o</label>
                                </div>
                                <div className="input-field col s6">
                                    <input defaultValue={this.estoque} id="estoque" onChange={this.onClickEstoque} type="number" className="validate" />
                                    <label htmlFor="estoque" className="active">Estoque</label>
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
                        <a href="#!"></a>Editar
                    </button>
                </div>

            </>
        )
    }
}