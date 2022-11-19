import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from "./home";
import ListaCliente from "./listaCliente";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import ListaProduto from "./listaProduto";
import FormularioCadastroProduto from "./formularioCadastroProduto";
import FormularioCadastroServico from './formularioCadastroServico';
import FormularioCadastroPedido from './formularioCadastroPedido';
import Produtos from './produtos';
import ListaPedidos from './listaPedidos';
import Pedidos from './pedidos';
import Clientes from './clientes';
import Servicos from './servicos';
import ListaSevicos from './listaServicos';
import Listagens from './Listagens';

  function App() {
    return (
      <BrowserRouter>
      <Routes>
      <Route index element={<Home/>}/>
      <Route path="*" element={<Navigate to="/"/>}/>
      <Route path="/Listagens" element={<Listagens/>}/>
      <Route path="/listaCliente" element={<ListaCliente/>}/>
      <Route path="/listaProduto" element={<ListaProduto/>}/>
      <Route path="/listaPedidos" element={<ListaPedidos/>}/>
      <Route path="/listaServicos" element={<ListaSevicos/>}/>
      <Route path="/formularioCadastroCliente" element={<FormularioCadastroCliente/>}/>
      <Route path="/formularioCadastroProduto" element={<FormularioCadastroProduto/>}/>
      <Route path="/formularioCadastroServico" element={<FormularioCadastroServico/>}/>
      <Route path="/formularioCadastroPedido" element={<FormularioCadastroPedido/>}/>
      <Route path="/produtos" element={<Produtos/>}/>
      <Route path="/pedidos" element={<Pedidos/>}/>
      <Route path="/clientes" element={<Clientes/>}/>
      <Route path="/servicos" element={<Servicos/>}/>
      </Routes>
      </BrowserRouter>
    );
  }
  export default App;

