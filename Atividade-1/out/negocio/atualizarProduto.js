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
var AtualizarProdutos = /** @class */ (function (_super) {
    __extends(AtualizarProdutos, _super);
    function AtualizarProdutos(produtos) {
        var _this = _super.call(this) || this;
        _this.produtos = produtos;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    AtualizarProdutos.prototype.atualiza = function () {
        var _this = this;
        var cont = 1;
        console.log("\nIn\u00EDcio da atualiza\u00E7\u00E3o do produto");
        var busca = this.entrada.receberTexto("Por favor informe o nome do produto: ");
        this.produtos.forEach(function (produto) {
            if (produto.nome == busca) {
                console.log("Produto encontrado, forne\u00E7a as informa\u00E7\u00F5es!");
                var nome = _this.entrada.receberTexto("Por favor informe o novo nome do Produto: ");
                produto.nome = nome;
                console.log("\nCadastro atualizado :)\n");
            }
            else if (cont == _this.produtos.length) {
                console.log("\n nenhum Produto encontrado com o nome informado!!! \n");
            }
            else {
                cont++;
            }
        });
    };
    return AtualizarProdutos;
}(atualizar_1.default));
exports.default = AtualizarProdutos;
