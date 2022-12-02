"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var entrada_1 = __importDefault(require("../io/entrada"));
var cliente_1 = __importDefault(require("../modelo/cliente"));
var cpf_1 = __importDefault(require("../modelo/cpf"));
var empresa_1 = __importDefault(require("../modelo/empresa"));
var produto_1 = __importDefault(require("../modelo/produto"));
var rg_1 = __importDefault(require("../modelo/rg"));
var servico_1 = __importDefault(require("../modelo/servico"));
var atualizarCliente_1 = __importDefault(require("../negocio/atualizarCliente"));
var atualizarProduto_1 = __importDefault(require("../negocio/atualizarProduto"));
var atualizarServicos_1 = __importDefault(require("../negocio/atualizarServicos"));
var cadastroCliente_1 = __importDefault(require("../negocio/cadastroCliente"));
var CadastroConsumoCliente_1 = __importDefault(require("../negocio/CadastroConsumoCliente"));
var CadastroProdutos_1 = __importDefault(require("../negocio/CadastroProdutos"));
var CadastroServicos_1 = __importDefault(require("../negocio/CadastroServicos"));
var deletarCliente_1 = __importDefault(require("../negocio/deletarCliente"));
var deletarProduto_1 = __importDefault(require("../negocio/deletarProduto"));
var deletarServico_1 = __importDefault(require("../negocio/deletarServico"));
var ListagemComusumoGen_1 = __importDefault(require("../negocio/listagem/ListagemComusumoGen"));
var ListagemConsumoMais_1 = __importDefault(require("../negocio/listagem/ListagemConsumoMais"));
var ListagemConsumoMenos_1 = __importDefault(require("../negocio/listagem/ListagemConsumoMenos"));
var ListagemConsumoValor_1 = __importDefault(require("../negocio/listagem/ListagemConsumoValor"));
var ListagemGenero_1 = __importDefault(require("../negocio/listagem/ListagemGenero"));
var ListagemProdutosOuServicosMais_1 = __importDefault(require("../negocio/listagem/ListagemProdutosOuServicosMais"));
var listagemClientes_1 = __importDefault(require("../negocio/listagemClientes"));
var ListagemProdutos_1 = __importDefault(require("../negocio/ListagemProdutos"));
var ListagemServicos_1 = __importDefault(require("../negocio/ListagemServicos"));
console.log(chalk_1.default.cyan("Bem-vindo ao cadastro de clientes do Grupo World Beauty"));
var empresa = new empresa_1.default();
let cli1 = new cliente_1.default('Guilherme', 'Guilherme', new cpf_1.default('001',new Date(14,9,2003)), 'Masculino')
let cli2 = new cliente_1.default('Diego', 'Diego', new cpf_1.default('002',new Date(12,11,2003)), 'Masculino')
let cli3 = new cliente_1.default('Nico Robin', 'Robin', new cpf_1.default('003',new Date(10,10,1994)), 'Feminino')
let cli4 = new cliente_1.default('Monkey D. Luffy', 'Luffy', new cpf_1.default('004',new Date(17,8,1997)), 'Masculino')
let cli5 = new cliente_1.default('Roronoa Zoro', 'Zoro', new cpf_1.default('005',new Date(12,12,1996)), 'Masculino')
let cli6 = new cliente_1.default('Nami', 'Nami', new cpf_1.default('006',new Date(24,12,1993)), 'Feminino')
let cli7 = new cliente_1.default('Tony Tony Chopper', 'Chopper', new cpf_1.default('007',new Date(22,9,1999)), 'Masculino')
let cli8 = new cliente_1.default('Charlotte Pudding', 'Pudding', new cpf_1.default('008',new Date(25,10,1998)), 'Feminino')
let cli9 = new cliente_1.default('Vinsmoke Sanji', 'Sanji', new cpf_1.default('009',new Date(17,8,1997)), 'Masculino')
let cli10 = new cliente_1.default('Franky', 'Franky', new cpf_1.default('010',new Date(15,10,1999)), 'Masculino')
let cli11 = new cliente_1.default('Usopp', 'Usopp', new cpf_1.default('011',new Date(10,11,1989)), 'Masculino')
let cli12 = new cliente_1.default('Brook', 'SkullBrook', new cpf_1.default('012',new Date(29,12,1954)), 'Masculino')
let cli13 = new cliente_1.default('Jinbei', 'Jinbei', new cpf_1.default('013',new Date(15,9,1971)), 'Masculino')
let cli14 = new cliente_1.default('Yamato', 'Yamato', new cpf_1.default('014',new Date(30,8,1995)), 'Feminino')
let cli15 = new cliente_1.default('Shanks', 'Shanks', new cpf_1.default('015',new Date(11,11,1966)), 'Masculino')
let cli16 = new cliente_1.default('Edward Newgate', 'Shiro Hi-Ge', new cpf_1.default('016',new Date(27,10,1996)), 'Masculino')
let cli17 = new cliente_1.default('Nefertari Vivi', 'Vivi', new cpf_1.default('017',new Date(24,11,1993)), 'Feminino')
let cli18 = new cliente_1.default('Marshall D. Teach', 'Kuro Hi-Ge', new cpf_1.default('018',new Date(22,12,1984)), 'Masculino')
let cli19 = new cliente_1.default('Portgas D. Rouge', 'Rouge', new cpf_1.default('019',new Date(31, 8,1965)), 'Feminino')
let cli20 = new cliente_1.default('Portgas D. Ace', 'Ace', new cpf_1.default('020',new Date(11,10,1982)), 'Masculino')
let cli21 = new cliente_1.default('Sabo', 'Sabo', new cpf_1.default('021',new Date(21,11,1982)), 'Masculino')
let cli22 = new cliente_1.default('Trafalgar D. Water Law', 'Law', new cpf_1.default('022',new Date(22,12,1992)), 'Masculino')
cli1.addRg(new rg_1.default('69951348',new Date(14,10,2003)))
cli2.addRg(new rg_1.default('89514146',new Date(15,11,2003)))
cli3.addRg(new rg_1.default('77570427',new Date(16,11,1999)))
cli4.addRg(new rg_1.default('53475637',new Date(17,12,1997)))
cli5.addRg(new rg_1.default('71466764',new Date(18,11,1985)))
cli6.addRg(new rg_1.default('39845489',new Date(19,11,1987)))
cli7.addRg(new rg_1.default('87434654',new Date(20,10,2002)))
cli8.addRg(new rg_1.default('44524668',new Date(21,10,2001)))
cli9.addRg(new rg_1.default('52645576',new Date(22,12,2000)))
cli10.addRg(new rg_1.default('46015597',new Date(23,12,1996)))
cli11.addRg(new rg_1.default('84015597',new Date(24,11,1995)))
cli12.addRg(new rg_1.default('51851348',new Date(25,10,1994)))
cli13.addRg(new rg_1.default('89842146',new Date(26,10,1993)))
cli14.addRg(new rg_1.default('77533727',new Date(27,11,1992)))
cli15.addRg(new rg_1.default('53477127',new Date(28,10,1991)))
cli16.addRg(new rg_1.default('71432984',new Date(29,12,1990)))
cli17.addRg(new rg_1.default('39862464',new Date(30,11,1989)))
cli18.addRg(new rg_1.default('87281654',new Date(31,12,1988)))
cli19.addRg(new rg_1.default('44899668',new Date(10,10,1987)))
cli20.addRg(new rg_1.default('52110576',new Date(11,10,1986)))
cli21.addRg(new rg_1.default('47120597',new Date(12,11,1985)))
cli22.addRg(new rg_1.default('88731597',new Date(13,12,1984)))

empresa.getClientes.push(cli1)
empresa.getClientes.push(cli2)
empresa.getClientes.push(cli3)
empresa.getClientes.push(cli4)
empresa.getClientes.push(cli5)
empresa.getClientes.push(cli6)
empresa.getClientes.push(cli7)
empresa.getClientes.push(cli8)
empresa.getClientes.push(cli9)
empresa.getClientes.push(cli10)
empresa.getClientes.push(cli11)
empresa.getClientes.push(cli12)
empresa.getClientes.push(cli13)
empresa.getClientes.push(cli14)
empresa.getClientes.push(cli15)
empresa.getClientes.push(cli16)
empresa.getClientes.push(cli17)
empresa.getClientes.push(cli18)
empresa.getClientes.push(cli19)
empresa.getClientes.push(cli20)
empresa.getClientes.push(cli21)
empresa.getClientes.push(cli22)
var servico1 = new servico_1.default("Corte", 30);
var servico2 = new servico_1.default("Progressiva", 120);
var servico3 = new servico_1.default("Descoloração", 25);
empresa.getServicos.push(servico1);
empresa.getServicos.push(servico2);
empresa.getServicos.push(servico3);
var produto1 = new produto_1.default("Matizador", 20);
var produto2 = new produto_1.default("Esmalte", 4);
var produto3 = new produto_1.default("Condicionador", 25);
empresa.getProdutos.push(produto1);
empresa.getProdutos.push(produto2);
empresa.getProdutos.push(produto3);
cli1.addProduto(produto1);
cli2.addProduto(produto2);
cli3.addProduto(produto3);
cli4.addProduto(produto2);
cli5.addProduto(produto1);
cli6.addProduto(produto3);
cli7.addProduto(produto3);
cli8.addProduto(produto1);
cli9.addProduto(produto1);
cli9.addProduto(produto2);
cli11.addProduto(produto2);
cli1.addServico(servico1);
cli2.addServico(servico2);
cli3.addServico(servico3);
cli4.addServico(servico2);
cli5.addServico(servico1);
cli6.addServico(servico3);
cli7.addServico(servico3);
cli8.addServico(servico1);
cli9.addServico(servico1);
cli11.addServico(servico1);
// FIM
var execucao = true;
while (execucao) {
    console.log(chalk_1.default.whiteBright("Opções:"));
    console.log(chalk_1.default.greenBright("1 - Cadastrar cliente"));
    console.log(chalk_1.default.greenBright("2 - Listar todos os clientes"));
    console.log(chalk_1.default.greenBright("3 - Atualizar clientes"));
    console.log(chalk_1.default.greenBright("4 - Excluir clientes"));
    console.log(chalk_1.default.greenBright("5 - Cadastrar Produto"));
    console.log(chalk_1.default.greenBright("6 - Listar todos os produtos"));
    console.log(chalk_1.default.greenBright("7 - Atualizar produtos"));
    console.log(chalk_1.default.greenBright("8 - Excluir produtos"));
    console.log(chalk_1.default.greenBright("9 - Cadastrar Serviços"));
    console.log(chalk_1.default.greenBright("10 - Listar todos os Serviços"));
    console.log(chalk_1.default.greenBright("11 - Atualizar serviços"));
    console.log(chalk_1.default.greenBright("12 - Excluir serviços"));
    console.log(chalk_1.default.greenBright("13 - Listagem por gênero"));
    console.log(chalk_1.default.greenBright("14 - Cadastrar consumo de produtos ou serviço para o cliente"));
    console.log(chalk_1.default.greenBright("15 - Listagem do consumo dos produtos ou serviços mais consumidos"));
    console.log(chalk_1.default.greenBright("16 - Listagem do consumo dos produtos ou serviços menos consumidos"));
    console.log(chalk_1.default.greenBright("17 - Listagem do produto ou serviço mais consumido por gênero"));
    console.log(chalk_1.default.greenBright("18 - Listagem do produto ou serviço mais consumido"));
    console.log(chalk_1.default.greenBright("19 - Listagem dos clientes que mais consumiram em valor"));
    console.log(chalk_1.default.red("0 - Sair"));
    var entrada = new entrada_1.default();
    var opcao = entrada.receberNumero("Por favor, escolha uma opção: ");
    switch (opcao) {
        case 1:
            var cadastro = new cadastroCliente_1.default(empresa.getClientes);
            cadastro.cadastrar();
            break;
        case 2:
            var listagem = new listagemClientes_1.default(empresa.getClientes);
            listagem.listar();
            break;
        case 3:
            var atualizar = new atualizarCliente_1.default(empresa.getClientes);
            atualizar.atualiza();
            break;
        case 4:
            var exclusao = new deletarCliente_1.default(empresa.getClientes);
            exclusao.Exclui();
            break;
        case 5:
            var cadastrarProd = new CadastroProdutos_1.default(empresa.getProdutos);
            cadastrarProd.cadastrar();
            break;
        case 6:
            var listagemProd = new ListagemProdutos_1.default(empresa.getProdutos);
            listagemProd.listar();
            break;
        case 7:
            var atualizarProdutos = new atualizarProduto_1.default(empresa.getProdutos);
            atualizarProdutos.atualiza();
            break;
        case 8:
            var exclusaoProduto = new deletarProduto_1.default(empresa.getProdutos);
            exclusaoProduto.Exclui();
            break;
        case 9:
            var cadastrarSer = new CadastroServicos_1.default(empresa.getServicos);
            cadastrarSer.cadastrar();
            break;
        case 10:
            var listagemSer = new ListagemServicos_1.default(empresa.getServicos);
            listagemSer.listar();
            break;
        case 11:
            var atualizaSer = new atualizarServicos_1.default(empresa.getServicos);
            atualizaSer.atualiza();
            break;
        case 12:
            var excluirSer = new deletarServico_1.default(empresa.getServicos);
            excluirSer.Exclui();
            break;
        case 13:
            var listagemGem = new ListagemGenero_1.default(empresa.getClientes);
            listagemGem.listar();
            break;
        case 14:
            var cadastroConsumoCliente = new CadastroConsumoCliente_1.default(empresa.getClientes, empresa);
            cadastroConsumoCliente.cadastrar();
            break;
        case 15:
            var listagem10mais = new ListagemConsumoMais_1.default(empresa.getClientes);
            listagem10mais.listar();
            break;
        case 16:
            var listagem10menos = new ListagemConsumoMenos_1.default(empresa.getClientes);
            listagem10menos.listar();
            break;
        case 17:
                var listagemConsumoGem = new ListagemComusumoGen_1.default(empresa);
                listagemConsumoGem.listar();
                break;
        case 18:
            var listagemProdutosOuServicosMais = new ListagemProdutosOuServicosMais_1.default(empresa);
            listagemProdutosOuServicosMais.listar();
            break;
        case 19:
            var listagemConsumoValor = new ListagemConsumoValor_1.default(empresa);
            listagemConsumoValor.listar();
            break;
        case 0:
            execucao = false;
            console.log("Até mais");
            break;
        default:
            console.log("Operação não entendida :(");
    }
}
