"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var entrada_1 = __importDefault(require("../../io/entrada"));
var listagem_1 = __importDefault(require("../listagem"));
var ListagemGenero = /** @class */ (function (_super) {
    __extends(ListagemGenero, _super);
    function ListagemGenero(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        return _this;
    }
    ListagemGenero.prototype.listar = function () {
        var mas = [];
        var fem = [];
        this.clientes.forEach(function (cliente) {
            if (cliente.genero[0] == 'M') {
                mas.push(cliente);
            }
            else {
                fem.push(cliente);
            }
        });
        var entrada = new entrada_1.default();
        var genero = entrada.receberGenero('Qual é o gênero?: ');
        if (genero[0].toUpperCase() == 'M') {
            console.log(chalk_1.default.red("--------------------------------------"));
            mas.forEach(function (cliente) {
                console.log(chalk_1.default.greenBright("Nome: ") + cliente.nome);
                console.log(chalk_1.default.greenBright("Nome social: ") + cliente.nomeSocial);
                console.log(chalk_1.default.greenBright("G\u00EAnero: ") + cliente.genero);
                console.log(chalk_1.default.greenBright("CPF: ") + cliente.getCpf.getValor);
                cliente.getRgs.forEach(function (rg) {
                    console.log(chalk_1.default.greenBright("RG: ") + rg.getValor);
                });
                console.log(chalk_1.default.greenBright("Produtos consumidos: [ "));
                cliente.getProdutosConsumidos.forEach(function (prod) {
                    console.log('      ' + prod.nome);
                });
                console.log(chalk_1.default.greenBright(']'));
                console.log(chalk_1.default.greenBright("Servi\u00E7os consumidos: [ "));
                cliente.getServicosConsumidos.forEach(function (ser) {
                    console.log('      ' + ser.nome);
                });
                console.log(chalk_1.default.greenBright(']'));
                console.log(chalk_1.default.red("--------------------------------------"));
            });
        }
        else {
            console.log(chalk_1.default.red("--------------------------------------"));
            fem.forEach(function (cliente) {
                console.log(chalk_1.default.greenBright("Nome: ") + cliente.nome);
                console.log(chalk_1.default.greenBright("Nome social: ") + cliente.nomeSocial);
                console.log(chalk_1.default.greenBright("G\u00EAnero: ") + cliente.genero);
                console.log(chalk_1.default.greenBright("CPF: ") + cliente.getCpf.getValor);
                cliente.getRgs.forEach(function (rg) {
                    console.log(chalk_1.default.greenBright("RG: ") + rg.getValor);
                });
                console.log(chalk_1.default.greenBright("Produtos consumidos: [ "));
                cliente.getProdutosConsumidos.forEach(function (prod) {
                    console.log('      ' + prod.nome);
                });
                console.log(chalk_1.default.greenBright(']'));
                console.log(chalk_1.default.greenBright("Servi\u00E7os consumidos: [ "));
                cliente.getServicosConsumidos.forEach(function (ser) {
                    console.log('      ' + ser.nome);
                });
                console.log(chalk_1.default.greenBright(']'));
                console.log(chalk_1.default.red("--------------------------------------"));
            });
        }
    };
    return ListagemGenero;
}(listagem_1.default));
exports.default = ListagemGenero;
