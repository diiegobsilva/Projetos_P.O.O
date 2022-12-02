/* eslint-disable @typescript-eslint/no-useless-constructor */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import '../Style/myStyle.css'
import Cliente from "../../Models/cliente";


type props = {
    cliente: Cliente
}

type state = {
    consumoProduto: any[]
    consumoServico: any[]
    servicos: any[]
    produtos: any[]
    totalProdutos: number
    totalServicos: number
    temHistorico: boolean
}

export default class HistoricoCliente extends Component<props, state> {

    constructor(props: props | Readonly<props>) {
        super(props);
        this.state = {
            consumoProduto: [],
            consumoServico: [],
            produtos: [],
            servicos: [],
            totalProdutos: 0,
            totalServicos: 0,
            temHistorico: false
        }
    }

    async componentDidMount() {
        var elemsModal = document.querySelectorAll('.modal');
        M.Modal.init(elemsModal);
        this.load()
    }

    componentDidUpdate(prevProps: Readonly<props>, prevState: Readonly<state>, snapshot?: any): void {
        if(prevProps != this.props){
            this.setState({
                consumoProduto: [],
                consumoServico: [],
                produtos: [],
                servicos: [],
                totalProdutos: 0,
                totalServicos: 0,
                temHistorico: false
            })
            this.load()
        }
    }

    async load(){
        await fetch("http://localhost:3001/servico", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(r => r.json()).then(r => {
            this.setState({
                servicos: r
            })
        });

        await fetch("http://localhost:3001/produto", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(r => r.json()).then(r => {
            this.setState({
                produtos: r
            })
        });

        await fetch("http://localhost:3001/clienteProduto/" + this.props.cliente.id, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(r => r.json()).then(r => {
            if (r == null) return
            let valor = 0
            r.forEach(element => {
                let produto = this.state.produtos.find(pro => pro.id === element.produtoId)
                valor += produto.preco * element.quantidadeVendida
            });

            this.setState({
                consumoProduto: r,
                totalProdutos: valor
            })
        });

        await fetch("http://localhost:3001/clienteServico/" + this.props.cliente.id, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(r => r.json()).then(r => {
            if (r == null) return
            let valor = 0
            r.forEach(element => {
                let servico = this.state.servicos.find(pro => pro.id === element.servicoId)
                valor += servico.preco * element.quantidadeVendida
            });

            this.setState({
                consumoServico: r,
                totalServicos: valor
            })
        });

        if (this.state.consumoProduto.length > 0 || this.state.consumoServico.length > 0) {
            this.setState({
                temHistorico: true
            })
        }
    }

    render() {
        return (
            <>
                <div className="modal-content">
                    <h4 className="d-flex justify-content-center brand-logo">{this.state.temHistorico ? "Histórico de compras" : "" }</h4>
                    
                    <div className="row">
                        <ul>
                            <li>
                                {this.state.temHistorico ?
                                    <div>
                                <table className='responsive-table centered'>  
                                    <thead>
                                          <tr>
                                              <th>Produtos</th>
                                              <th>Total Produto R$</th>
                                              <th>Serviços</th>
                                              <th>Total Serviços R$</th>
                                              <th>Total R$</th>
       
                                          </tr>
                                      </thead>
                                      <tbody>
                                          <tr>
                                              <td>{this.state.consumoProduto.map(item => {
                                            let produto = this.state.produtos.find(pro => pro.id === item.produtoId)
                                            let data = new Date(item.createdAt)
                                            return (
                                                <>
                                                    <span>{data.toLocaleString()} - {item.quantidadeVendida}x {produto.nome}</span><br />
                                                </>
                                            )
                                        })}</td>

                                            <td>
                                                {this.state.totalProdutos != 0 ?
                                                <>{this.state.totalProdutos}</>
                                                    :
                                                <></>}
                                            </td>

                                            <td>
                                                    {this.state.consumoServico.map(item => {
                                                    let servico = this.state.servicos.find(pro => pro.id === item.servicoId)
                                                    let data = new Date(item.createdAt)
                                                    return (
                                                        <>
                                                            <span>{data.toLocaleString()} - {item.quantidadeVendida}x {servico.nome}</span><br />
                                                        </>
                                                    )
                                                })}
                                            </td>

                                            <td>
                                                {this.state.totalServicos != 0 ?
                                                <>
                                                    {this.state.totalServicos}
                                                </>
                                                :
                                                <></>}
                                            </td>

                                            <td>{this.state.totalProdutos + this.state.totalServicos}</td>
                                            
                                        </tr>
                                      </tbody>
                                    </table>
 
                                    </div>
                                    :
                                    <>
                                        <p className="spanphistorico">Nenhuma compra até o momento.</p>
                                    </>
                                }
                            </li>
                            <div id="cagarButao">
                        <button id="cancelButtonContainer" className="modal-close btn-flat blue" style={{margin:'0 20px 30px 0'}}>
                            <a href="#!"></a>Voltar
                        </button>
                    </div>
                        </ul>
                    </div>
                </div>
            </>
        );
    }
}
