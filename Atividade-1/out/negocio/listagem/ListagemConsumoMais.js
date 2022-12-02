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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var entrada_1 = __importDefault(require("../../io/entrada"));
var listagem_1 = __importDefault(require("../listagem"));
var ListagemConsumoMais = /** @class */ (function (_super) {
    __extends(ListagemConsumoMais, _super);
    function ListagemConsumoMais(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        return _this;
    }
    ListagemConsumoMais.prototype.listar = function () {
        return __awaiter(this, void 0, void 0, function () {
            var consumoProduto, consumoServico, exec, entrada, opcao;
            return __generator(this, function (_a) {
                consumoProduto = [];
                consumoServico = [];
                this.clientes.forEach(function (cliente) {
                    var produtosConsumidosTamanho = cliente.getProdutosConsumidos.length;
                    consumoProduto.push({
                        nome: cliente.nome,
                        cpf: cliente.getCpf.getValor,
                        quantidadeProdutos: produtosConsumidosTamanho
                    });
                    var servicosConsumidosTamanho = cliente.getServicosConsumidos.length;
                    consumoServico.push({
                        nome: cliente.nome,
                        cpf: cliente.getCpf.getValor,
                        quantidadeServicos: servicosConsumidosTamanho
                    });
                });
                consumoProduto.sort(function (n1, n2) {
                    return n2.quantidadeProdutos - n1.quantidadeProdutos;
                });
                consumoProduto = consumoProduto.slice(0, 10);
                consumoServico.sort(function (n1, n2) {
                    return n2.quantidadeServicos - n1.quantidadeServicos;
                });
                consumoServico = consumoServico.slice(0, 10);
                exec = true;
                while (exec) {
                    entrada = new entrada_1.default();
                    console.log("------------------------------------------------");
                    console.log("Ope\u00E7\u00E3o de Listagem.");
                    console.log("1 - Produto");
                    console.log("2 - Servi\u00E7o");
                    opcao = entrada.receberNumero("Por favor, escolha uma op\u00E7\u00E3o: ");
                    switch (opcao) {
                        case 1:
                            console.log(chalk_1.default.blue("Listagem dos 10 Clientes que MAIS consumiram produtos em quantidade."));
                            console.log(chalk_1.default.red("\n---------------------------------------------------------------\n"));
                            consumoProduto.forEach(function (cliente) {
                                console.log(chalk_1.default.greenBright('Nome do Cliente: ') + cliente.nome);
                                console.log(chalk_1.default.greenBright('CPF do Cliente: ') + cliente.cpf);
                                console.log(chalk_1.default.greenBright('Quantidade de Produtos Consumidos pelo Cliente: ') + cliente.quantidadeProdutos);
                                console.log(chalk_1.default.red("\n---------------------------------------------------------------\n"));
                            });
                            exec = false;
                            break;
                        case 2:
                            console.log(chalk_1.default.blue("Listagem dos 10 Clientes que MAIS consumiram serviços em quantidade."));
                            console.log(chalk_1.default.red("\n---------------------------------------------------------------\n"));
                            consumoServico.forEach(function (cliente) {
                                console.log(chalk_1.default.greenBright('Nome do Cliente: ') + cliente.nome);
                                console.log(chalk_1.default.greenBright('CPF do Cliente: ') + cliente.cpf);
                                console.log(chalk_1.default.greenBright('Quantidade de Serviços Consumidos pelo Cliente: ') + cliente.quantidadeServicos);
                                console.log(chalk_1.default.red("\n---------------------------------------------------------------\n"));
                            });
                            exec = false;
                            break;
                        default:
                            console.log(chalk_1.default.red("Digite Uma Op\u00E7\u00E3o V\u00E1lida!"));
                            exec = true;
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    return ListagemConsumoMais;
}(listagem_1.default));
exports.default = ListagemConsumoMais;
