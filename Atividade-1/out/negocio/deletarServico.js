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
var entrada_1 = __importDefault(require("../io/entrada"));
var deletar_1 = __importDefault(require("./deletar"));
var executa = true;
var ExcluirServico = /** @class */ (function (_super) {
    __extends(ExcluirServico, _super);
    function ExcluirServico(servicos) {
        var _this = _super.call(this) || this;
        _this.servicos = servicos;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    ExcluirServico.prototype.Exclui = function () {
        var _this = this;
        console.log("\nIn\u00EDcio da Exclus\u00E3o do Servi\u00E7o");
        executa = true;
        var _loop_1 = function () {
            var busca = this_1.entrada.receberTexto("Por favor informe o nome do Servi\u00E7o: ");
            var cont = 1;
            this_1.servicos.forEach(function (servico) {
                if (servico.nome == busca) {
                    console.log("Servi\u00E7o encontrado, deseja realmente excluir o Servi\u00E7o?");
                    var confirma = _this.entrada.receberNumero("1 - excluir, 2 - cancelar: ");
                    switch (confirma) {
                        case 1:
                            var indice = _this.servicos.indexOf(servico);
                            _this.servicos.splice(indice, 1);
                            console.log("Servi\u00E7o excluido!");
                            executa = false;
                            break;
                        case 2:
                            executa = false;
                            console.log("cancelado");
                            break;
                    }
                }
                else if (cont == _this.servicos.length) {
                    console.log("\n nenhum Servi\u00E7o encontrado com o nome informado!!! \n");
                    executa = false;
                }
                else {
                    cont++;
                }
            });
        };
        var this_1 = this;
        while (executa) {
            _loop_1();
        }
    };
    return ExcluirServico;
}(deletar_1.default));
exports.default = ExcluirServico;
