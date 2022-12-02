import Urls from "./urls";

const URL = new Urls()

export function getAllProdutos(): any[] {
  fetch(URL.PRODUTO, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(r => r.json()).then(r => {
      return r
    });
    return []
}

export function getProdutoById(id: number) {
  fetch(URL.PRODUTO + "/" + id, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(r => r.json()).then(r => {
      return r
    });
}

export async function atualizarProduto(id: number, mapeado): Promise<boolean> {
    let retorno = false
    await fetch(URL.PRODUTO_MODIFICAR + id, {
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

export async function cadastrarProduto(mapeado): Promise<boolean> {
    let retorno = false
    await fetch(URL.PRODUTO_CADASTRAR, {
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


export async function deleteProduto(id: number): Promise<boolean>  {
    let retorno = false
    await fetch(URL.PRODUTO_DELETAR + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => {
      retorno = response.status === 200
    })  
    return retorno
}