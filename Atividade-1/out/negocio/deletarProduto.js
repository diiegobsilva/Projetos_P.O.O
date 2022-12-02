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
var ExcluirProduto = /** @class */ (function (_super) {
    __extends(ExcluirProduto, _super);
    function ExcluirProduto(produtos) {
        var _this = _super.call(this) || this;
        _this.produtos = produtos;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    ExcluirProduto.prototype.Exclui = function () {
        var _this = this;
        console.log("\nIn\u00EDcio da Exclus\u00E3o do Produto");
        executa = true;
        var _loop_1 = function () {
            var busca = this_1.entrada.receberTexto("Por favor informe o nome do Produto: ");
            var cont = 1;
            this_1.produtos.forEach(function (produto) {
                if (produto.nome == busca) {
                    console.log("Produto encontrado, deseja realmente excluir o Produto?");
                    var confirma = _this.entrada.receberNumero("1 - excluir, 2 - cancelar: ");
                    switch (confirma) {
                        case 1:
                            var indice = _this.produtos.indexOf(produto);
                            _this.produtos.splice(indice, 1);
                            console.log("Produto excluido!");
                            executa = false;
                            break;
                        case 2:
                            executa = false;
                            console.log("cancelado");
                            break;
                    }
                }
                else if (cont == _this.produtos.length) {
                    console.log("\n nenhum Produto encontrado com o nome informado!!! \n");
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
    return ExcluirProduto;
}(deletar_1.default));
exports.default = ExcluirProduto;
