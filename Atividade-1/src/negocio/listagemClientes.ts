import chalk from "chalk";
import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(chalk.greenBright(`\nLista de todos os clientes:`));
        console.log(chalk.red(`----------------------------------------------------------`));
        this.clientes.forEach(cliente => {
            console.log(chalk.greenBright(`Nome: ` )+ cliente.nome); 
            console.log(chalk.greenBright(`Nome social: ` ) + cliente.nomeSocial);
            console.log(chalk.greenBright('Gênero: ' ) + cliente.genero);
            console.log(chalk.greenBright(`CPF: ` ) + cliente.getCpf.getValor);
            cliente.getRgs.forEach(rg => {
                console.log(chalk.greenBright(`RG: ` ) + rg.getValor );
            })
            console.log(chalk.greenBright(`Produtos consumidos: [ `))
            cliente.getProdutosConsumidos.forEach(prod => {
                console.log('      '+ prod.nome)
            });console.log(chalk.greenBright(']'));
            console.log(chalk.greenBright(`Serviços consumidos: [ `))
            cliente.getServicosConsumidos.forEach(ser => {
                console.log('      '+ ser.nome);
            });console.log(chalk.greenBright(']'));
            console.log(chalk.red(`----------------------------------------------------------`));
        });
        console.log(`\n`);
    }
}