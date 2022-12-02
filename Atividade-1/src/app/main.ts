import chalk from "chalk";
import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Empresa from "../modelo/empresa"
import Produto from "../modelo/produto";
import RG from "../modelo/rg";
import Servico from "../modelo/servico";
import AtualizarCliente from "../negocio/atualizarCliente";
import AtualizarProdutos from "../negocio/atualizarProduto";
import AtualizarServicos from "../negocio/atualizarServicos";
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroConsumoCliente from "../negocio/CadastroConsumoCliente";
import CadastroProdutos from "../negocio/CadastroProdutos";
import CadastroServicos from "../negocio/CadastroServicos";
import ExcluirCliente from "../negocio/deletarCliente";
import ExcluirProduto from "../negocio/deletarProduto";
import ExcluirServico from "../negocio/deletarServico";
import ListagemComusumoGen from "../negocio/listagem/ListagemComusumoGen";
import ListagemConsumoMais from "../negocio/listagem/ListagemConsumoMais";
import ListagemConsumoMenos from "../negocio/listagem/ListagemConsumoMenos";
import ListagemComusumoValor from "../negocio/listagem/ListagemConsumoValor";
import ListagemGenero from "../negocio/listagem/ListagemGenero";
import ListagemProdutosOuServicosMais from "../negocio/listagem/ListagemProdutosOuServicosMais";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemProdutos from "../negocio/ListagemProdutos";
import ListagemServicos from "../negocio/ListagemServicos";


console.log(chalk.greenBright(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`))
let empresa = new Empresa()



let cli1 = new Cliente('Guilherme', 'Guilherme', new CPF('1',new Date(14,09,2003)), 'Masculino')
let cli2 = new Cliente('Diego', 'Diego', new CPF('2',new Date(12,11,2003)), 'Masculino')
let cli3 = new Cliente('Nico Robin', 'Robin', new CPF('3',new Date(10,10,1994)), 'Feminino')
let cli4 = new Cliente('Monkey D. Luffy', 'Luffy', new CPF('4',new Date(17,08,1997)), 'Masculino')
let cli5 = new Cliente('Roronoa Zoro', 'Zoro', new CPF('5',new Date(12,12,1996)), 'Masculino')
let cli6 = new Cliente('Nami', 'Nami', new CPF('6',new Date(24,12,1993)), 'Feminino')
let cli7 = new Cliente('Tony Tony Chopper', 'Chopper', new CPF('7',new Date(22,09,1999)), 'Masculino')
let cli8 = new Cliente('Charlotte Pudding', 'Pudding', new CPF('8',new Date(25,10,1998)), 'Feminino')
let cli9 = new Cliente('Vinsmoke Sanji', 'Sanji', new CPF('9',new Date(17,08,1997)), 'Masculino')
let cli10 = new Cliente('Franky', 'Franky', new CPF('10',new Date(15,10,1999)), 'Masculino')
let cli11 = new Cliente('Usopp', 'Usopp', new CPF('11',new Date(10,11,1989)), 'Masculino')
let cli12 = new Cliente('Brook', 'SkullBrook', new CPF('12',new Date(29,12,1954)), 'Masculino')
let cli13 = new Cliente('Jinbei', 'Jinbei', new CPF('13',new Date(15,09,1971)), 'Masculino')
let cli14 = new Cliente('Yamato', 'Yamato', new CPF('14',new Date(30,08,1995)), 'Feminino')
let cli15 = new Cliente('Shanks', 'Shanks', new CPF('15',new Date(11,11,1966)), 'Masculino')
let cli16 = new Cliente('Edward Newgate', 'Shiro Hi-Ge', new CPF('16',new Date(27,10,1996)), 'Masculino')
let cli17 = new Cliente('Nefertari Vivi', 'Vivi', new CPF('17',new Date(24,11,1993)), 'Feminino')
let cli18 = new Cliente('Marshall D. Teach', 'Kuro Hi-Ge', new CPF('18',new Date(22,12,1984)), 'Masculino')
let cli19 = new Cliente('Portgas D. Rouge', 'Rouge', new CPF('19',new Date(31,08,1965)), 'Feminino')
let cli20 = new Cliente('Portgas D. Ace', 'Ace', new CPF('20',new Date(11,09,1982)), 'Masculino')
let cli21 = new Cliente('Sabo', 'Sabo', new CPF('21',new Date(21,11,1982)), 'Masculino')
let cli22 = new Cliente('Trafalgar D. Water Law', 'Law', new CPF('22',new Date(22,12,1992)), 'Masculino')
cli1.addRg(new RG('69951348',new Date(14,12,2003)))
cli2.addRg(new RG('89514146',new Date(15,09,2003)))
cli3.addRg(new RG('77570427',new Date(16,11,1999)))
cli4.addRg(new RG('53475637',new Date(17,08,1997)))
cli5.addRg(new RG('71466764',new Date(18,10,1985)))
cli6.addRg(new RG('39845489',new Date(19,12,1987)))
cli7.addRg(new RG('87434654',new Date(20,09,2002)))
cli8.addRg(new RG('44524668',new Date(21,08,2001)))
cli9.addRg(new RG('52645576',new Date(22,12,2000)))
cli10.addRg(new RG('46015597',new Date(23,09,1996)))
cli11.addRg(new RG('84015597',new Date(24,11,1995)))
cli12.addRg(new RG('51851348',new Date(25,10,1994)))
cli13.addRg(new RG('89842146',new Date(26,09,1993)))
cli14.addRg(new RG('77533727',new Date(27,08,1992)))
cli15.addRg(new RG('53477127',new Date(28,10,1991)))
cli16.addRg(new RG('71432984',new Date(29,12,1990)))
cli17.addRg(new RG('39862464',new Date(30,11,1989)))
cli18.addRg(new RG('87281654',new Date(31,08,1988)))
cli19.addRg(new RG('44899668',new Date(10,09,1987)))
cli20.addRg(new RG('52110576',new Date(11,10,1986)))
cli21.addRg(new RG('47120597',new Date(12,11,1985)))
cli22.addRg(new RG('88731597',new Date(13,12,1984)))

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


let servico1 = new Servico("Corte", 30)
let servico2 = new Servico("Progressiva", 120)
let servico3 = new Servico("Descoloração", 25)

empresa.getServicos.push(servico1)
empresa.getServicos.push(servico2)
empresa.getServicos.push(servico3)

let produto1 = new Produto("matizador",20)
let produto2 = new Produto("esmalte",4)
let produto3 = new Produto("condicionador", 25)

empresa.getProdutos.push(produto1)
empresa.getProdutos.push(produto2)
empresa.getProdutos.push(produto3)

cli1.addProduto(produto1)
cli1.addProduto(produto3)
cli1.addProduto(produto3)
cli2.addProduto(produto2)
cli3.addProduto(produto3)
cli4.addProduto(produto2)
cli5.addProduto(produto1)
cli6.addProduto(produto3)
cli7.addProduto(produto3)
cli8.addProduto(produto1)
cli9.addProduto(produto1)
cli9.addProduto(produto2)
cli11.addProduto(produto2)
cli12.addProduto(produto1)
cli13.addProduto(produto2)
cli14.addProduto(produto3)
cli15.addProduto(produto2)
cli16.addProduto(produto1)
cli17.addProduto(produto3)
cli18.addProduto(produto3)
cli19.addProduto(produto1)
cli20.addProduto(produto1)
cli21.addProduto(produto2)
cli22.addProduto(produto2)

cli1.addServico(servico1)
cli1.addServico(servico3)
cli2.addServico(servico3)
cli3.addServico(servico2)
cli4.addServico(servico1)
cli5.addServico(servico3)
cli6.addServico(servico1)
cli7.addServico(servico2)
cli8.addServico(servico2)
cli9.addServico(servico1)
cli11.addServico(servico3)
cli12.addServico(servico1)
cli13.addServico(servico2)
cli14.addServico(servico3)
cli15.addServico(servico2)
cli16.addServico(servico1)
cli17.addServico(servico3)
cli18.addServico(servico3)
cli19.addServico(servico2)
cli20.addServico(servico1)
cli21.addServico(servico2)


let execucao = true

while (execucao) {
    console.log(chalk.white(`Opções:`));
    console.log(chalk.greenBright(`1 - Cadastrar cliente`));
    console.log(chalk.greenBright(`2 - Listar todos os clientes`));
    console.log(chalk.greenBright(`3 - Atualizar clientes`));
    console.log(chalk.greenBright(`4 - Excluir clientes`));
    console.log(chalk.greenBright(`5 - Cadastrar Produto`));
    console.log(chalk.greenBright(`6 - Listar todos os produtos`));
    console.log(chalk.greenBright(`7 - Atualizar produtos`));
    console.log(chalk.greenBright(`8 - Excluir produtos`));
    console.log(chalk.greenBright(`9 - Cadastrar Serviços`));
    console.log(chalk.greenBright(`10 - Listar todos os Serviços`));
    console.log(chalk.greenBright(`11 - Atualizar serviços`));
    console.log(chalk.greenBright(`12 - Excluir serviços`));
    console.log(chalk.greenBright(`13 - Listagem por gênero`));
    console.log(chalk.greenBright(`14 - Cadastrar consumo de produtos ou serviço para o cliente`));
    console.log(chalk.greenBright(`15 - Listagem do consumo dos produtos ou serviços mais consumidos`));
    console.log(chalk.greenBright(`16 - Listagem do consumo dos produtos ou serviços menos consumidos`))
    console.log(chalk.greenBright(`17 - Listagem do produto ou serviço mais consumido por gênero`));
    console.log(chalk.greenBright(`18 - Listagem do produto ou serviço mais consumido`));
    console.log(chalk.greenBright(`19 - Listagem dos clientes que mais consumiram em valor`));
    console.log(chalk.red(`0 - Sair`));

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes)
            cadastro.cadastrar()
            break;
        case 2:
            let listagem = new ListagemClientes(empresa.getClientes)
            listagem.listar()
            break;
        case 3:
            let atualizar = new AtualizarCliente(empresa.getClientes)
            atualizar.atualiza()
            break;
        case 4:
            let exclusao = new ExcluirCliente(empresa.getClientes)
            exclusao.Exclui()
            break;
        case 5:
            let cadastrarProd = new CadastroProdutos(empresa.getProdutos)
            cadastrarProd.cadastrar()
            break;
        case 6:
            let listagemProd = new ListagemProdutos(empresa.getProdutos)
            listagemProd.listar()
            break;
        case 7:
            let atualizarProdutos = new AtualizarProdutos(empresa.getProdutos)
            atualizarProdutos.atualiza()
            break;
        case 8:
            let exclusaoProduto = new ExcluirProduto(empresa.getProdutos)
            exclusaoProduto.Exclui()
            break;
        case 9:
            let cadastrarSer = new CadastroServicos(empresa.getServicos)
            cadastrarSer.cadastrar()
            break
        case 10:
            let listagemSer = new ListagemServicos(empresa.getServicos)
            listagemSer.listar()
            break
        case 11:
            let atualizaSer = new AtualizarServicos(empresa.getServicos)
            atualizaSer.atualiza()
            break
        case 12:
            let excluirSer = new ExcluirServico(empresa.getServicos)
            excluirSer.Exclui()
            break
        case 13:
            let listagemGem = new ListagemGenero(empresa.getClientes)
            listagemGem.listar()
            break
        case 14:
            let cadastroConsumoCliente = new CadastroConsumoCliente(empresa.getClientes,empresa)
            cadastroConsumoCliente.cadastrar()
            break
        case 15:
            let listagem10mais = new ListagemConsumoMais(empresa.getClientes)
            listagem10mais.listar()
            break
        case 16:
            let listagem10menos = new ListagemConsumoMenos(empresa.getClientes)
            listagem10menos.listar()
            break
        case 17:
            let listagemConsumoGem = new ListagemComusumoGen(empresa)
            listagemConsumoGem.listar()
            break
        case 18:
            let listagemProdutosOuServicosMais = new ListagemProdutosOuServicosMais(empresa)
            listagemProdutosOuServicosMais.listar()
            break
        case 19:
            let listagemConsumoValor = new ListagemComusumoValor(empresa)
            listagemConsumoValor.listar()
            break
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}