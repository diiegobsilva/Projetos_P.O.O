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
var servico_1 = __importDefault(require("../../modelo/servico"));
var produto_1 = __importDefault(require("../../modelo/produto"));
var listagem_1 = __importDefault(require("../listagem"));
var entrada_1 = __importDefault(require("../../io/entrada"));
var chalk_1 = __importDefault(require("chalk"));
var ListaGeneroConsumo = /** @class */ (function (_super) {
    __extends(ListaGeneroConsumo, _super);
    function ListaGeneroConsumo(empresa) {
        var _this = _super.call(this) || this;
        _this.listaProduto = {
            listaFem: [],
            listaMasc: [],
            listaOutros: []
        };
        _this.listaServico = {
            listaFem: [],
            listaMasc: [],
            listaOutros: []
        };
        _this.registrarItens = function () {
            _this.empresa.getClientes.forEach(function (cliente) {
                cliente.getProdutosConsumidos.forEach(function (p) {
                    var produto = new produto_1.default(p.nome, p.preco);
                    switch (cliente.getGeneroChar()) {
                        case 'Feminino':
                            if (_this.listaProduto.listaFem.length == 0) {
                                produto.addConsumo();
                                _this.listaProduto.listaFem.push(produto);
                            }
                            else {
                                var produtoEncontrado = _this.listaProduto.listaFem.find(function (prod) {
                                    return produto.nome == prod.nome;
                                });
                                if (produtoEncontrado == undefined) {
                                    produto.addConsumo();
                                    _this.listaProduto.listaFem.push(produto);
                                }
                                else {
                                    produtoEncontrado.addConsumo();
                                }
                            }
                            break;
                        case 'Masculino':
                            if (_this.listaProduto.listaMasc.length == 0) {
                                produto.addConsumo();
                                _this.listaProduto.listaMasc.push(produto);
                            }
                            else {
                                var produtoEncontrado = _this.listaProduto.listaMasc.find(function (prod) {
                                    return produto.nome == prod.nome;
                                });
                                if (produtoEncontrado == undefined) {
                                    produto.addConsumo();
                                    _this.listaProduto.listaMasc.push(produto);
                                }
                                else {
                                    produtoEncontrado.addConsumo();
                                }
                            }
                            break;
                        default:
                            if (_this.listaProduto.listaOutros.length == 0) {
                                produto.addConsumo();
                                _this.listaProduto.listaOutros.push(produto);
                            }
                            else {
                                var produtoEncontrado = _this.listaProduto.listaOutros.find(function (prod) {
                                    return produto.nome == prod.nome;
                                });
                                if (produtoEncontrado == undefined) {
                                    produto.addConsumo();
                                    _this.listaProduto.listaOutros.push(produto);
                                }
                                else {
                                    produtoEncontrado.addConsumo();
                                }
                            }
                    }
                });
                cliente.getServicosConsumidos.forEach(function (s) {
                    var servico = new servico_1.default(s.nome, s.preco);
                    switch (cliente.getGeneroChar()) {
                        case 'Feminino':
                            if (_this.listaServico.listaFem.length == 0) {
                                servico.addConsumo();
                                _this.listaServico.listaFem.push(servico);
                            }
                            else {
                                var servicoEncontrado = _this.listaServico.listaFem.find(function (serv) {
                                    return servico.nome == serv.nome;
                                });
                                if (servicoEncontrado == undefined) {
                                    servico.addConsumo();
                                    _this.listaServico.listaFem.push(servico);
                                }
                                else {
                                    servicoEncontrado.addConsumo();
                                }
                            }
                            break;
                        case 'Masculino':
                            if (_this.listaServico.listaMasc.length == 0) {
                                servico.addConsumo();
                                _this.listaServico.listaMasc.push(servico);
                            }
                            else {
                                var servicoEncontrado = _this.listaServico.listaMasc.find(function (prod) {
                                    return servico.nome == prod.nome;
                                });
                                if (servicoEncontrado == undefined) {
                                    servico.addConsumo();
                                    _this.listaServico.listaMasc.push(servico);
                                }
                                else {
                                    servicoEncontrado.addConsumo();
                                }
                            }
                            break;
                        default:
                            if (_this.listaServico.listaOutros.length == 0) {
                                servico.addConsumo();
                                _this.listaServico.listaOutros.push(servico);
                            }
                            else {
                                var servicoEncontrado = _this.listaServico.listaOutros.find(function (prod) {
                                    return servico.nome == prod.nome;
                                });
                                if (servicoEncontrado == undefined) {
                                    servico.addConsumo();
                                    _this.listaServico.listaOutros.push(servico);
                                }
                                else {
                                    servicoEncontrado.addConsumo();
                                }
                            }
                    }
                });
            });
            var listaLista = [
                _this.listaProduto.listaFem, _this.listaProduto.listaMasc, _this.listaProduto.listaOutros,
                _this.listaServico.listaFem, _this.listaServico.listaMasc, _this.listaServico.listaOutros
            ];
            listaLista.forEach(function (lista) {
                lista.sort(function (item1, item2) {
                    if (item1.consumo > item2.consumo)
                        return -1;
                    else
                        return 1;
                });
            });
        };
        _this.empresa = empresa;
        return _this;
    }
    ListaGeneroConsumo.prototype.listar = function () {
        var exec = true;
        this.registrarItens();
        while (exec) {
            var entrada = new entrada_1.default();
            console.log("------------------------------------------------");
            console.log("Op\u00E7\u00E3o de Listagem.");
            console.log("1 - Produto");
            console.log("2 - Servi\u00E7o");
            var opcao = entrada.receberNumero("Por favor, escolha uma op\u00E7\u00E3o: ");
            switch (opcao) {
                case 1:
                    console.log('\nLista de produtos mais consumidos pelo público...');
                    console.log('\nFEMININO');
                    this.listaProduto.listaFem.forEach(function (produto) {
                        console.log("- ".concat(produto.nome, ": Consumido ").concat(produto.consumo, " vezes"));
                    });
                    console.log('---------------');
                    console.log('\nMASCULINO');
                    this.listaProduto.listaMasc.forEach(function (produto) {
                        console.log("- ".concat(produto.nome, ": Consumido ").concat(produto.consumo, " vezes"));
                    });
                    console.log('---------------');
                    exec = false;
                    break;
                case 2:
                    console.log('\nLista de serviços mais consumidos pelo público...');
                    console.log('\nFEMININO');
                    this.listaServico.listaFem.forEach(function (servico) {
                        console.log("- ".concat(servico.nome, ": Consumido ").concat(servico.consumo, " vezes"));
                    });
                    console.log('---------------');
                    console.log('\nMASCULINO');
                    this.listaServico.listaMasc.forEach(function (servico) {
                        console.log("- ".concat(servico.nome, ": Consumido ").concat(servico.consumo, " vezes"));
                    });
                    console.log('---------------');
                    exec = false;
                    break;
                default:
                    console.log(chalk_1.default.red("Digite Uma Op\u00E7\u00E3o V\u00E1lida!"));
                    exec = true;
            }
        }
    };
    return ListaGeneroConsumo;
}(listagem_1.default));
exports.default = ListaGeneroConsumo;
