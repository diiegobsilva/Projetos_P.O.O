import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "../Listagens/listaCliente";
import ListaProduto from "../Listagens/listaProduto";
import ListaServico from "../Listagens/listaServico";
import Listagem from "../Listagens/listagem";
import Home from "../home";

type state = {
    tela: string
}

export default class Roteador extends Component<{}, state> {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Home'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render() {
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="background" botoes={['Home','Clientes', 'Produtos', 'Serviços', 'Listagem']} />
        if (this.state.tela === "Home") {
            return (
                <>
                    {barraNavegacao}
                    <Home tema="Home" />
                </>
            )
        } else if (this.state.tela === 'Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <ListaCliente tema="background" />
                </>
            )
        } else if (this.state.tela === "Produtos") {
            return (
                <>
                    {barraNavegacao}
                    <ListaProduto tema="background" />
                </>
            )
        } else if (this.state.tela === "Serviços") {
            return (
                <>
                    {barraNavegacao}
                    <ListaServico tema="background" />
                </>
            )
        } else if (this.state.tela === "Listagem") {
            return (
                <>
                    {barraNavegacao}
                    <Listagem tema="background" />
                </>
            )
        }
    }
}