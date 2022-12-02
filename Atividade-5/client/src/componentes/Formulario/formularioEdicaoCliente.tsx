import { Component } from "react";
import Swal from "sweetalert2";
import Cliente from "../../Models/cliente";

type props = {
    cliente: Cliente
}

type state = {
    nome: string
}

export default class FormularioEdicaoCliente extends Component<props, state> {

    private nome
    private nomeSocial
    private cpf
    private email
    private telefone

    constructor(props: props | Readonly<props>) {
        super(props);
        this.state = {
            nome: this.props.cliente.nome
        }
        


        this.onClickNome = this.onClickNome.bind(this)
        this.onClickNomeSocial = this.onClickNomeSocial.bind(this)
        this.onClickCpf = this.onClickCpf.bind(this)
        this.onClickTelefone = this.onClickTelefone.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onClickEmail = this.onClickEmail.bind(this)
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
        this.setState({
            nome: this.props.cliente.nome
        })
        this.nome = this.props.cliente.nome
        this.cpf = this.props.cliente.cpf
        this.nomeSocial = this.props.cliente.nomeSocial
        this.telefone = this.props.cliente.telefone
        this.email = this.props.cliente.email
    }

    async cadastro(): Promise<boolean> {
        let retorno = false
        let mapeado = {
            nome: this.nome,
            nomeSocial: this.nomeSocial,
            cpf: this.cpf,
            telefone: this.telefone,
            email: this.email
        }
        console.log(mapeado)
        await fetch("http://localhost:3001/cliente/modificar/" + this.props.cliente.id, {
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
        if (!this.nome || !this.nomeSocial || !this.cpf || !this.telefone) {
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
                'Cliente atualizado com sucesso.',
                'success'
            ).then(result => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                window.location.reload()
            })
        } else {
            Swal.fire(
                'Erro!',
                'Não foi possível atualizar.',
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

    onClickCpf(event){
        this.cpf = event.target.value
    }

    onClickNomeSocial(event){
        this.nomeSocial = event.target.value
    }

    onClickTelefone(event){
        this.telefone = event.target.value
    }

    onClickEmail(event){
        this.email = event.target.value
        console.log('mudou o email')
    }

    render() {
        
        return (
            <>
                <div className="modal-content">
                    <h4 className="d-flex justify-content-center brand-logo">Editar Cliente</h4>
                    <br></br><br></br><br></br>
                    <div className="row">
                        <form className="col s12">
                            <div id="modalLine" className="row">
                                <div className="input-field col s6">
                                    <input defaultValue={this.nome} onChange={this.onClickNome} id="nome" type="text" />
                                    <label htmlFor="nome" className="active">Nome</label>
                                </div>
                                <div className="input-field col s6">
                                    <input defaultValue={this.nomeSocial} id="nomeSocial" onChange={this.onClickNomeSocial} type="text" />
                                    <label htmlFor="nomeSocial" className="active">Nome Social</label>
                                </div>
                            </div>
                            <div id="modalLine" className="row">
                            <div className="input-field col s6">
                                    <input defaultValue={this.email} id="email" onChange={this.onClickEmail} type="email"/>
                                    <label htmlFor="email" className="active">Email</label>
                                </div>
                                <div className="input-field col s6">
                                    <input defaultValue={this.cpf} id="cpf" onChange={this.onClickCpf} type="text" />
                                    <label htmlFor="cpf" className="active">CPF</label>
                                </div>
                                <div className="input-field col s6">
                                    <input defaultValue={this.telefone} id="telefone" onChange={this.onClickTelefone} type="text" />
                                    <label htmlFor="telefone" className="active">Telefone</label>
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