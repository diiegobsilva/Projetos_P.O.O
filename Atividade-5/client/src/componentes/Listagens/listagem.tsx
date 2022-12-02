import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import '../Style/myStyle.css'
import Urls from "../../controller/urls";

const URL = new Urls()

type props = {
    tema: string
}

type state = {
    nome: string
    masculinos: any[]
    femininos: any[]
    outros: any[]
}

export default class Listagem extends Component<props, state> {

    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            masculinos: [],
            femininos: [],
            outros: []
        }
    }

    componentDidMount() {
        console.log(M);
        M.AutoInit();
        var elems = document.querySelectorAll('.collapsible');
        M.Collapsible.init(elems);

        var elemsModal = document.querySelectorAll('.modal');
        M.Modal.init(elemsModal);

        fetch(URL.CLIENTES_MASCULINO, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(r => r.json()).then(r => {
            this.setState({
                masculinos: r
            })
        });

        fetch(URL.CLIENTES_FEMININO, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(r => r.json()).then(r => {
            this.setState({
                femininos: r
            })
        });

        fetch(URL.CLIENTES_OUTROS, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(r => r.json()).then(r => {
            this.setState({
                outros: r
            })
        });
    }

    render() {
        return (
            <div>
                <div id="titleContainer" >
                    <h4 id="Title" className="d-flex justify-content-center brand-logo" >Produtos cadastrados</h4>
                </div>
                
            <br></br>
                <div className='container center'>
                <div className="row">
                    <div className="">
                        <ul className="tabs tabsConsumo d-flex justify-content-cente" >
                            <li className="tab col s3"><a style={{color: 'black', fontSize: '13px'}}>Consumo Genero</a></li>
                        </ul>
                    </div>
                <div>
                   <form>
                        <hr></hr>
                        <h5 className='generoConsumoFont'>Feminino</h5>
                        <hr></hr>
                                <table className='responsive-table centered'>
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Nome</th>
                                            <th>Email</th>
                                        </tr>
                                    </thead>
                                    <tbody className='responsive-table centered'>
                                        <tr>
                                            <td className="word-wrap:break-word">{this.state.femininos.map(item => {return (<span>{item.id}</span>)})}</td>
                                            <td className="word-wrap:break-word">{this.state.femininos.map(item => {let indice = this.state.femininos.indexOf(item) + 1 
                                            return (<span>{indice}º - {item.nome}</span>)})}</td>
                                            <td className="word-wrap:break-word">{this.state.femininos.map(item => {return (<span>{item.email}</span>)})}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            
                            <hr></hr>
                            <h5 className='generoConsumoFont'>Masculino</h5>
                            <hr></hr>
                                <table className='responsive-table centered'>
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Nome</th>
                                            <th>Email</th>
                                        </tr>
                                    </thead>
                                    <tbody className='responsive-table centered'>
                                        <tr>
                                            <td>{this.state.masculinos.map(item => {return (<span>{item.id}</span>)})}</td>
                                            <td>{this.state.masculinos.map(item => {let indice = this.state.masculinos.indexOf(item) + 1 
                                            return (<span>{indice}º - {item.nome}</span>)})}</td>
                                            <td>{this.state.masculinos.map(item => {return (<span>{item.email}</span>)})}</td>
                                        </tr>
                                    </tbody>
                                </table>
                        </form>
                </div>  
                </div>
                </div>
            </div>

            
        )
    }
}