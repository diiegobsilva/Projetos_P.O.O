import { Component } from "react";
import CSS from 'csstype'
import editar from '../Icons/editar.png'
import excluir from '../Icons/excluir.png'

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
const ImagemStyle: CSS.Properties = {
    padding: '5px',
    maxHeight: '30px',
    maxWidth: '30px'

}

export default class Clientes extends Component<any, props> {
    
    render() {
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
            <h5 className="center-align">Cliente</h5>
            <table className='highlight centered'>
                <thead>
                    <tr>
                        <th>Id_Cliente</th>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Telofone</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                    </tr>
                </tbody>
            </table>
            <br></br>
            <h5 className="center-align">Produto</h5>
            <table className='highlight centered'>
                <thead>
                    <tr>
                        <th>Id_Pedido</th>
                        <th>Id_Produto</th>
                        <th>Nome do Produto</th>
                        <th>Valor do Produto</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                    </tr>
                </tbody>
            </table>
            <br></br>
            <h5 className="center-align">Serviços</h5>
            <table className='highlight centered'>
                <thead>
                    <tr>
                        <th>Id_Servico</th>
                        <th>Id_Pedido</th>
                        <th>Nome do Serviço</th>
                        <th>Valor do Serviço</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                    </tr>
                </tbody>
            </table>

            

            </div>
        </div>
        )
    }
}