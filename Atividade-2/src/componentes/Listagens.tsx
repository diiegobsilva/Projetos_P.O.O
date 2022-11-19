import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
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
export default class Listagens extends Component<any> {
    componentDidMount() {
        console.log(M);
        M.AutoInit();
    }
render() {
    return (
        <div>
        <>
            <nav>
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
            <div className='container center'>
                <h4> <strong> Listagens de Consumo </strong> </h4>
                <br></br>
                <div className="row">
                    <div className="">
                        <ul className="tabs-swipe-demo tabs tabsConsumo ">
                            <li className="tab col s3"><a href="#1" style={{color: 'black', fontSize: '10px'}}>Cliente Consumo Valor</a></li>
                            <li className="tab col s2"><a href="#2" style={{color: 'black', fontSize: '10px'}}>Cliente Maior Qtd</a></li>
                            <li className="tab col s3"><a href="#3" style={{color: 'black', fontSize: '10px'}}>Cliente Menor Consumo</a></li>
                            <li className="tab col s2"><a href="#4" style={{color: 'black', fontSize: '10px'}}>Prod/Serv Consumo</a></li>
                            <li className="tab col s2"><a href="#5" style={{color: 'black', fontSize: '10px'}}>Consumo Genero</a></li>
                        </ul>
                    </div>
                    <div id="1" className="col s12">
                        <form>
                            <div>
                                <table className='responsive-table centered'>
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Nome</th>
                                            <th>CPF</th>
                                            <th>Telefone</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Cliente 1</td>
                                            <td>000.000.000.00</td>
                                            <td>(00)00000-0000</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </form>
                    </div>


                    <div id="2" className="col s12">
                        <form>
                            <div>
                                <table className='responsive-table centered'>
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Nome</th>
                                            <th>CPF</th>
                                            <th>Total Consumido</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Cliente 1</td>
                                            <td>000.000.000.00</td>
                                            <td>...</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </form>

                    </div>

                    <div id="3" className="col s12">
                        <form>
                            <div>
                                <table className='responsive-table centered'>
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Nome</th>
                                            <th>CPF</th>
                                            <th>Total consumido</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Cliente 1</td>
                                            <td>000.000.000.00</td>
                                            <td>...</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </form>

                    </div>

                    <div id="4" className="col s12">
                        <form>
                            <div>
                                <table className='responsive-table centered'>
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Nome do Produto/Serviço</th>
                                            <th>Valor do Produto/Serviço</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>...</td>
                                            <td>...</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </form>

                    </div>

                    <div id="5" className="col s12">
                        <form>
                            <h5 className='generoConsumoFont'>Feminino</h5>
                            <div>
                                <table className='responsive-table centered'>
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Nome do Produto/Serviço</th>
                                            <th>Valor do Produto/Serviço</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>...</td>
                                            <td>...</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <br></br>
                            <h5 className='generoConsumoFont'>Masculino</h5>
                            <div>
                                <table className='responsive-table centered'>
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Nome do Produto/Serviço</th>
                                            <th>Valor do Produto/Serviço</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>...</td>
                                            <td>...</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
        )
    }
}