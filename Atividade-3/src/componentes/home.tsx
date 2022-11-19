import 'materialize-css/dist/css/materialize.min.css'
import CSS from 'csstype'



const backgroundColor: CSS.Properties = {
    backgroundColor: '#008080',
}   
const fontStyle: CSS.Properties = {
    fontSize:'xx-large',
    fontFamily: 'fantasy',
}

const botaoStyle: CSS.Properties = {
    padding: '10px'
}

const Home = () => {
        return (
            <div>
                <>
                    <nav className="">
                    <div className="nav-wrapper" style={backgroundColor} >
                        <a className="brand-logo center" style={fontStyle}>WB</a>
                        <a  style={botaoStyle} href="/Home">Home</a>
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
                    <div className="center-align">
                        <div className="card">
                            <span className="card-title">Cadastros</span>
                            <div className="card-content">
                                <a className="waves-effect waves-light btn" href="/formularioCadastroCliente">Cadastrar clientes</a>
                                <a className="col s4"> </a>
                                <a className="waves-effect waves-light btn" href="/formularioCadastroProduto">Cadastrar produtos</a>
                                <a className="col s4"> </a>
                                <a className="waves-effect waves-light btn" href="/formularioCadastroServico">Cadastrar Serviço</a>
                                <a className="col s4"> </a>
                                <a className="waves-effect waves-light btn" href="/formularioCadastroPedido">Cadastrar Pedidos</a>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
            
        )
    }
export default Home;    
