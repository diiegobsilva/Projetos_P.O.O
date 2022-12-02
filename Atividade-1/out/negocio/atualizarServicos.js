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
var atualizar_1 = __importDefault(require("./atualizar"));
var AtualizarServicos = /** @class */ (function (_super) {
    __extends(AtualizarServicos, _super);
    function AtualizarServicos(servicos) {
        var _this = _super.call(this) || this;
        _this.servicos = servicos;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    AtualizarServicos.prototype.atualiza = function () {
        var _this = this;
        var cont = 1;
        console.log("\nIn\u00EDcio da atualiza\u00E7\u00E3o do Servi\u00E7o");
        var busca = this.entrada.receberTexto("Por favor informe o nome do Servi\u00E7o: ");
        this.servicos.forEach(function (servico) {
            if (servico.nome == busca) {
                console.log("Servi\u00E7o encontrado, forne\u00E7a as informa\u00E7\u00F5es:");
                var nome = _this.entrada.receberTexto("Por favor informe o nome do Servi\u00E7o: ");
                servico.nome = nome;
                console.log("\nCadastro atualizado :)\n");
            }
            else if (cont == _this.servicos.length) {
                console.log("\n nenhum Servi\u00E7o encontrado com o nome informado!!! \n");
            }
            else {
                cont++;
            }
        });
    };
    return AtualizarServicos;
}(atualizar_1.default));
exports.default = AtualizarServicos;
