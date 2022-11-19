/* eslint-disable jsx-a11y/anchor-is-valid */
import CSS from 'csstype'
import 'materialize-css/dist/css/materialize.min.css'

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
const ListaSevicos = () => {
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
                    <div className="collection">
                        <a className="collection-item" href="/servicos">Serviço 1</a>
                        <a className="collection-item" href="/servicos">Serviço 2</a>
                        <a className="collection-item" href="/servicos">Serviço 3</a>
                    </div>
                </div>
            </div>
        )

    }
export default ListaSevicos