import { Component } from "react";
import salaoWB from "./imagem/salaoWB.jpg"

type props = {
    tema: string
}

export default class Home extends Component<any, props> {

    render() {
        return (
            <>
            <div id="background">
                <div className='container'>
                    <div className="center-align" >
                        <div className="card" >
                            <span className="card-title" style={{fontSize:"30px"}}>Seja bem vindo!</span>
                            <span className="card-title">Esse é um sistema para controle de clientes e vendas desenvolvida para o uso do grupo World Beauty</span>
                            <br></br>
                                <div className="d-flex justify-content-center">
                                    <img src={salaoWB} style={{height:"300px", width:"340px"}}/>
                                </div>
                            <br></br>
                            <span>O grupo World Beauty  possui  um  modelo  de  negócio  focado  em  pequenas  unidades  espalhadas  por  várias  cidades  no país.
                            Cada unidade oferece serviços comumente procurados pelo público feminino como manicure, pedicure, design de sobrancelhas, corte e pintura de cabelos.
                            Além  destes,  também  são  oferecidos  outros  serviços  de  estética  comoremoção  de  rugas,  remoção  de manchas na pele, aplicação de Botox, tratamento para emagrecimento e redução de medidas.</span>
                            <div className="card-content">

                            </div>
                            
                        </div>
                    </div>
                </div>
            </div >
            </>
        )
    }
}