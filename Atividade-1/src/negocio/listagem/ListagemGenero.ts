import chalk from "chalk";
import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";


export default class ListagemGenero extends Listagem{
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
    }
    public listar():void{

        let mas: Cliente[] = []
        let fem: Cliente[] = []

        this.clientes.forEach(cliente => {
            if(cliente.genero[0] == 'M'){
                mas.push(cliente)
            }else{
                fem.push(cliente)
            }
        })

        let entrada =  new Entrada()
        let genero = entrada.receberGenero('Qual é o gênero?: ')
        if(genero[0].toUpperCase() == 'M'){
            console.log(chalk.red(`--------------------------------------`));
            mas.forEach(cliente => {
                console.log(chalk.greenBright(`Nome: ` )+ cliente.nome);
                console.log(chalk.greenBright(`Nome social: `) + cliente.nomeSocial);
                console.log(chalk.greenBright(`Gênero: `) + cliente.genero);
                console.log(chalk.greenBright(`CPF: ` ) + cliente.getCpf.getValor);
                cliente.getRgs.forEach(rg => {
                    console.log(chalk.greenBright(`RG: `) + rg.getValor);
                })
                console.log(chalk.greenBright(`Produtos consumidos: [ `))
                cliente.getProdutosConsumidos.forEach(prod => {
                    console.log('      '+ prod.nome)
                });console.log(chalk.greenBright(']'));
                console.log(chalk.greenBright(`Serviços consumidos: [ `))
                cliente.getServicosConsumidos.forEach(ser => {
                    console.log('      '+ ser.nome);
                });console.log(chalk.greenBright(']'));
                console.log(chalk.red(`--------------------------------------`));
            })
        }else{
            console.log(chalk.red(`--------------------------------------`));
            fem.forEach(cliente => {
                console.log(chalk.greenBright(`Nome: `) + cliente.nome);
                console.log(chalk.greenBright(`Nome social: ` )+ cliente.nomeSocial);
                console.log(chalk.greenBright(`Gênero: `)+ cliente.genero);
                console.log(chalk.greenBright(`CPF: ` ) + cliente.getCpf.getValor);
                cliente.getRgs.forEach(rg => {
                    console.log(chalk.greenBright(`RG: `) + rg.getValor);
                
                })
                console.log(chalk.greenBright(`Produtos consumidos: [ `))
                cliente.getProdutosConsumidos.forEach(prod => {
                    console.log('      '+ prod.nome)
                });console.log(chalk.greenBright(']'));
                console.log(chalk.greenBright(`Serviços consumidos: [ `))
                cliente.getServicosConsumidos.forEach(ser => {
                    console.log('      '+ ser.nome);
                });console.log(chalk.greenBright(']'));
                console.log(chalk.red(`--------------------------------------`));
            })
        }
    }
}