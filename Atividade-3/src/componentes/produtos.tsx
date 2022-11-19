import { Component } from "react";
import CSS from 'csstype'
import editar from '../Icons/editar.png'
import excluir from '../Icons/excluir.png'
import { Link } from "react-router-dom";

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
const ImagemStyle: CSS.Properties = {
    padding: '5px',
    maxHeight: '30px',
    maxWidth: '30px'

}

const Produtos = () => {
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
            <table className='highlight centered'>
                <thead>
                    <tr>
                        <th>Nome Produto</th>
                        <th>Preço</th>
                        <th>Descrição</th>
                        <th>Editar</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>..</td>
                        <td>25,00</td>
                        <td>...</td>
                        <td>
                            <Link to="/formularioCadastroProduto">
                                <img src={editar}  style={ImagemStyle}  />
                            </Link>
                            <img src={excluir} style={ImagemStyle}/>
                        </td>
                    </tr>
                    <tr>
                        <td>..</td>
                        <td>30,00</td>
                        <td>...</td>
                        <td>
                            <Link to="/formularioCadastroProduto">
                                <img src={editar}  style={ImagemStyle}/>
                           </Link>
                           <img src={excluir} style={ImagemStyle}/>
                        </td>
                    </tr>
                </tbody>
      </table>

            </div>
        </div>
        )
    }
export default Produtos
