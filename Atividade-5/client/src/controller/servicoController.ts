import Urls from "./urls";

const URL = new Urls()

export function getAllServicos(): any[] {
  fetch(URL.SERVICO, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(r => r.json()).then(r => {
      return r
    });
    return []
}

export function getServicoById(id: number) {
  fetch(URL.SERVICO + "/" + id, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(r => r.json()).then(r => {
      return r
    });
}

export async function atualizarServico(id: number, mapeado): Promise<boolean> {
    let retorno = false
    await fetch(URL.SERVICO_MODIFICAR + id, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(mapeado)
    }).then(r => {
        retorno = r.status === 200
    })
    return retorno
}

export async function cadastrarServico(mapeado): Promise<boolean> {
    let retorno = false
    await fetch(URL.SERVICO_CADASTRAR, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(mapeado)
    }).then(r => {
        retorno = r.status === 200
    })
    return retorno
}


export async function deleteServico(id: number): Promise<boolean>  {
    let retorno = false
    await fetch(URL.SERVICO_DELETAR + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => {
      retorno = response.status === 200
    })  
    return retorno
}