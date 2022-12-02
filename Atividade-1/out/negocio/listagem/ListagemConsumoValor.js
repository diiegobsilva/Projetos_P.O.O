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
var ListagemComusumoValor = /** @class */ (function (_super) {
    __extends(ListagemComusumoValor, _super);
    function ListagemComusumoValor(empresa) {
        var _this = _super.call(this) || this;
        _this.empresa = empresa;
        return _this;
    }
    ListagemComusumoValor.prototype.listar = function () {
        var getValorTotal = function (Array) {
            var total = 0;
            Array.forEach(function (item) {
                total = total + item.preco;
            });
            return total;
        };
        var lista = this.empresa.getClientes;
        var listaProduto = [];
        var listaServico = [];
        // copiando lista de clientes para ambas as listas para não afetar a lista principal
        lista.forEach(function (cliente) {
            listaProduto.push(cliente);
            listaServico.push(cliente);
        });
        // ordenando as listas copiadas
        listaProduto.sort(function (c1, c2) {
            var consumoC1 = getValorTotal(c1.getProdutosConsumidos);
            var consumoC2 = getValorTotal(c2.getProdutosConsumidos);
            if (consumoC1 > consumoC2) {
                return -1;
            }
            return 1;
        });
        listaServico.sort(function (c1, c2) {
            var consumoC1 = getValorTotal(c1.getServicosConsumidos);
            var consumoC2 = getValorTotal(c2.getServicosConsumidos);
            if (consumoC1 > consumoC2) {
                return -1;
            }
            return 1;
        });
        var exec = true;
        while (exec) {
            var entrada = new entrada_1.default();
            console.log("------------------------------------------------");
            console.log("Op\u00E7\u00E3o de Listagem.");
            console.log("1 - Produto");
            console.log("2 - Servi\u00E7o");
            var opcao = entrada.receberNumero("Por favor, escolha uma op\u00E7\u00E3o: ");
            switch (opcao) {
                case 1:
                    console.log(chalk_1.default.greenBright('\nListagem de clientes que MAIS consumiram produtos em VALOR'));
                    listaProduto.forEach(function (cliente, indice) {
                        var txt = "".concat(indice + 1, "\u00B0 - R$").concat(getValorTotal(cliente.getProdutosConsumidos), " em produtos consumidos");
                        console.log("".concat(indice + 1, "\u00B0 - ").concat(cliente.nome, ": ").concat(txt));
                    });
                    exec = false;
                    break;
                case 2:
                    console.log(chalk_1.default.greenBright('\nListagem de clientes que MAIS consumiram serviços em VALOR'));
                    listaServico.forEach(function (cliente, indice) {
                        var txt = "".concat(indice + 1, "\u00B0 - R$").concat(getValorTotal(cliente.getServicosConsumidos), " em servi\u00E7os consumidos");
                        console.log("".concat(indice + 1, "\u00B0 - ").concat(cliente.nome, ": ").concat(txt));
                    });
                    exec = false;
                    break;
                default:
                    console.log(chalk_1.default.red("Digite Uma Op\u00E7\u00E3o V\u00E1lida!"));
                    exec = true;
            }
        }
    };
    return ListagemComusumoValor;
}(listagem_1.default));
exports.default = ListagemComusumoValor;
