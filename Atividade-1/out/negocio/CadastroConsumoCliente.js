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
var entrada_1 = __importDefault(require("../io/entrada"));
var cadastro_1 = __importDefault(require("./cadastro"));
var CadastroConsumoCliente = /** @class */ (function (_super) {
    __extends(CadastroConsumoCliente, _super);
    function CadastroConsumoCliente(clientes, empresa) {
        var _this = _super.call(this) || this;
        _this.empresa = empresa;
        _this.entrada = new entrada_1.default();
        _this.clientes = clientes;
        return _this;
    }
    CadastroConsumoCliente.prototype.cadastrar = function () {
        var _this = this;
        var proc = this.entrada.receberCpf("Informe o cpf da pessoa: ");
        var exe = true;
        var c = 1;
        var execucao = true;
        while (execucao) {
            this.clientes.forEach(function (cliente) {
                if (cliente.getCpf.getValor == proc) {
                    var _loop_1 = function () {
                        console.log("------------------------------------------------");
                        console.log(chalk_1.default.greenBright("Ope\u00E7\u00E3o de consumo."));
                        console.log(chalk_1.default.greenBright("1 - Produto"));
                        console.log(chalk_1.default.greenBright("2 - Servi\u00E7o"));
                        console.log(chalk_1.default.redBright("0 - Sair"));
                        var op = _this.entrada.receberNumero('Insira a Opção:  ');
                        var cont = 1;
                        switch (op) {
                            case 1:
                                var produtoNome_1 = _this.entrada.receberTexto("Informe o nome do produto: ");
                                _this.empresa.getProdutos.forEach(function (prod) {
                                    if (prod.nome == produtoNome_1) {
                                        cliente.addProduto(prod);
                                        prod.addConsumo();
                                        console.log(chalk_1.default.greenBright("\nInserido com Sucesso"));
                                    }
                                    else if (cont == _this.empresa.getProdutos.length) {
                                        console.log(chalk_1.default.redBright("Produto invalido!"));
                                    }
                                    else {
                                        cont++;
                                    }
                                });
                                break;
                            case 2:
                                var servicoNome_1 = _this.entrada.receberTexto("Informe o nome do servi\u00E7o: ");
                                _this.empresa.getServicos.forEach(function (ser) {
                                    if (ser.nome == servicoNome_1) {
                                        cliente.addServico(ser);
                                        ser.addConsumo();
                                        console.log(chalk_1.default.greenBright("\nInserido com Sucesso"));
                                    }
                                    else if (cont == _this.empresa.getServicos.length) {
                                        console.log(chalk_1.default.redBright("Servi\u00E7o invalido!"));
                                    }
                                    else {
                                        cont++;
                                    }
                                });
                                break;
                            case 0:
                                exe = false;
                                execucao = false;
                                console.log(chalk_1.default.greenBright("Obrigado!"));
                                break;
                            default:
                                console.log(chalk_1.default.redBright("Digite Uma Op\u00E7\u00E3o V\u00E1lida!"));
                                exe = true;
                        }
                    };
                    while (exe) {
                        _loop_1();
                    }
                }
                else if (c == _this.clientes.length) {
                    console.log(chalk_1.default.redBright('CPF invalido!'));
                    console.log('\n');
                    execucao = false;
                }
                else {
                    c++;
                }
            });
        }
    };
    return CadastroConsumoCliente;
}(cadastro_1.default));
exports.default = CadastroConsumoCliente;
