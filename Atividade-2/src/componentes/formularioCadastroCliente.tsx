import { Component } from "react";
import CSS from 'csstype'

type props = {
    tema: string
}
const backgroundColor: CSS.Properties = {
    backgroundColor: '#008080',
}
const botaoStyle: CSS.Properties = {
    padding: '10px'
}
const fontStyle: CSS.Properties = {
    fontSize:'xx-large',
    fontFamily: 'fantasy',
}
export default class FormularioCadastroCliente extends Component<any,props> {
    
    render() {
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`
        let estilo = `${this.props.tema}`
        return (
            <div>
            <>
                <nav className={estilo}>
                <div  style={backgroundColor}  className="nav-wrapper">
                    <a className="brand-logo center" style={fontStyle}>WB</a>
                    <a style={botaoStyle} href="/Home">Home</a>
                    <a style={botaoStyle} href="/listaCliente">Cliente</a>
                    <a style={botaoStyle} href="/listaProduto">Produto</a>
                    <a style={botaoStyle} href="/listaPedidos">Pedidos</a>
                    <a style={botaoStyle} href="/listaServicos">Serviços</a>
                    <a style={botaoStyle} href="/Listagens">Listagens</a>
                </div>
                </nav>
            </>
            <br/>
            <div className='container'>
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="nome_cliente" type="text" className="validate" />
                            <label htmlFor="nome_cliente">Nome</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="nome_social" type="text" className="validate" />
                            <label htmlFor="nome_social">Nome social</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="data_nascimento" type="text" className="validate" />
                            <label htmlFor="data_nascimento">Data de nascimento</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="cpf" type="email" className="validate" />
                            <label htmlFor="cpf">CPF</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <button className="btn waves-effect waves-light"  type="submit" name="action">Cadastrar Cliente
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
        )
    }
}