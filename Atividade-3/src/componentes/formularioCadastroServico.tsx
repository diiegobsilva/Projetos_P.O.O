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
const FormularioCadastroServico = () => {
        return (
            <div>
            <>
                <nav className="">
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
                            <input id="nome_servico" type="text" className="validate" />
                            <label htmlFor="nome_servico">Nome do Serviços</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="valor_servico" type="text" className="validate" />
                            <label htmlFor="valor_servico">Valor do Serviço</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="Descricao_servico" type="text" className="validate" />
                            <label htmlFor="Descricao_servico">Descrição do serviço</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <button className="btn waves-effect waves-light"  type="submit" name="action">Cadastrar Serviço
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
export default FormularioCadastroServico