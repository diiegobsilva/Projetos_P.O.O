/* eslint-disable @typescript-eslint/no-useless-constructor */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import "../Style/myStyle.css";
import FormularioCadastroServico from "../Formulario/formularioCadastroServico";
import VendaServico from "../Vendas/vendaServico";
import VendaServicoAll from "../Vendas/vendaServicoAll";
import Swal from "sweetalert2";
import FormularioEdicaoServico from "../Formulario/formularioEdicaoServico";
import Servico from "../../Models/servico";

type props = {
  tema: string;
};

type state = {
  servicos: Array<any>
  servicoSelected: Servico | undefined
};

export default class ListaServico extends Component<props, state> {

  constructor(props) {
    super(props);
    this.state = {
      servicos: [],
      servicoSelected: undefined
    }
    this.onClickDelete = this.onClickDelete.bind(this)
    this.onClickEdit = this.onClickEdit.bind(this)
  }

  componentDidMount() {
    var elems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elems);

    var elemsModal = document.querySelectorAll('.modal');
    M.Modal.init(elemsModal);

    fetch("http://localhost:3001/servico", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(r => r.json()).then(r => {
      this.setState({
        servicos: r
      })
    });
  }


  onClickEdit(event) {
    let id = event.target.id
    let idNumber = new Number(id).valueOf()
    let servico = this.state.servicos.find(item => item.id == idNumber);
    this.setState({
      servicoSelected: servico
    })
  }

  async deleteServico(id): Promise<boolean> {
    let retorno = false
    await fetch("http://localhost:3001/servico/deletar/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => {
      retorno = response.status === 200
    })
    return retorno
  }

  onClickDelete(event) {
    let id = event.target.id
    Swal.fire({
      title: 'Deletar serviço',
      text: "Essa ação não pode ser revertida!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, deletar!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        let deleted = await this.deleteServico(id)
        if (deleted) {
          Swal.fire(
            'Deletado!',
            'Serviço deletado com sucesso.',
            'success'
          ).then(result => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            window.location.reload()
          })
        } else {
          Swal.fire(
            'Erro!',
            'Um erro ocorreu.',
            'error'
          ).then(result => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            window.location.reload()
          })
        }
      }
    })
  }


  render() {
    return (
      <div id="background">
        <div id="titleContainer">
          <h4 id="Title" className="d-flex justify-content-center brand-logo">Serviços cadastrados</h4>
        </div>

        <div id="collapsibleContainer">
          <ul className="collapsible">
            {this.state.servicos.map(item => {
              let servico = new Servico(item.nome, item.preco)
              servico.id = item.id
              let dataCadastro = new Date(item.createdAt)
              return (
                <li key={servico.nome}>
                  <div id="collapsibleHeader" className="collapsible-header justify-content-center" style={{fontSize:'x-large',}}>{servico.nome}</div>
                  <div id="collapsibleBody" className="collapsible-body">
                  <table className='responsive-table centered'>  
                                    <thead>
                                          <tr>
                                              <th>Preço R$</th>
                                              <th>Cadastrado em</th>
       
                                          </tr>
                                      </thead>
                                      <tbody>
                                          <tr>
                                              <td>{servico.preco}</td>
                                              <td>{dataCadastro.toLocaleString()}</td>
                                          </tr>
                                      </tbody>
                                    </table>

                        <div id="editDeleteButtonContainer">
                            <button id="editDeleteButton" data-target="modalEdit" className="btn blue modal-trigger"><a id={item.id} onClick={this.onClickEdit} >Editar</a></button>
                            <button id="editDeleteButton" className="btn blue modal-trigger"><a id={item.id} onClick={this.onClickDelete} >Deletar</a></button>
                            <a href="#modalSell" id="editDeleteButton" className="btn blue modal-trigger"><a id={item.id} onClick={this.onClickEdit}> Vender</a></a>
                        </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        <div id="addButtonContainer">
            <a href="#modalCadastro" className="btn blue modal-trigger" style={{margin:'20px'}}><a>Cadastrar Serviço</a></a>
            <a href="#modalSellAll" className="btn blue modal-trigger" style={{margin:'20px'}}><a>Realizar Venda</a></a>
        </div>

        <div id="modalCadastro" className="modal modal-fixed-footer">
          <FormularioCadastroServico tema="#ff4081 pink accent-2" />
        </div>

        <div id="modalEdit" className="modal modal-fixed-footer">
          {this.state.servicoSelected !== undefined ? <FormularioEdicaoServico servico={this.state.servicoSelected} /> : <></>}
        </div>

        <div id="modalSell" className="modal modal-fixed-footer">
          {this.state.servicoSelected !== undefined ? <VendaServico servico={this.state.servicoSelected} /> : <></>}
        </div>

        <div id="modalSellAll" className="modal modal-fixed-footer">
          <VendaServicoAll />
        </div>
      </div>
    );
  }
}
