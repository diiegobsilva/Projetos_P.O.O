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
var listagem_1 = __importDefault(require("./listagem"));
var ListagemClientes = /** @class */ (function (_super) {
    __extends(ListagemClientes, _super);
    function ListagemClientes(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        return _this;
    }
    ListagemClientes.prototype.listar = function () {
        console.log(chalk_1.default.greenBright("\nLista de todos os clientes:"));
        console.log(chalk_1.default.red("----------------------------------------------------------"));
        this.clientes.forEach(function (cliente) {
            console.log(chalk_1.default.greenBright("Nome: ") + cliente.nome);
            console.log(chalk_1.default.greenBright("Nome social: ") + cliente.nomeSocial);
            console.log(chalk_1.default.greenBright('Gênero: ') + cliente.genero);
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
            console.log(chalk_1.default.red("----------------------------------------------------------"));
        });
        console.log("\n");
    };
    return ListagemClientes;
}(listagem_1.default));
exports.default = ListagemClientes;
