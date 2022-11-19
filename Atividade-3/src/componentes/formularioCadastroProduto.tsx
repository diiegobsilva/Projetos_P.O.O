import { Component } from "react";
import CSS from 'csstype'

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
const FormularioCadastroProduto = () => {
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
                            <input id="nome_produto" type="text" className="validate" />
                            <label htmlFor="nome_produto">Nome</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="preco" type="text" className="validate" />
                            <label htmlFor="preco">Preço</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="descricao" type="text" className="validate" />
                            <label htmlFor="descricao">Descrição</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <button className="btn waves-effect waves-light"  type="submit" name="action">Cadastrar Produto
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
export default FormularioCadastroProduto;
