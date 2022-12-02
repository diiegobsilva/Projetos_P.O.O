"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cliente = /** @class */ (function () {
    function Cliente(nome, nomeSocial, cpf, genero) {
        this.nome = nome;
        this.nomeSocial = nomeSocial;
        this.genero = genero;
        this.cpf = cpf;
        this.rgs = [];
        this.dataCadastro = new Date();
        this.telefones = [];
        this.produtosConsumidos = [];
        this.servicosConsumidos = [];
    }
    Object.defineProperty(Cliente.prototype, "getCpf", {
        get: function () {
            return this.cpf;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getRgs", {
        get: function () {
            return this.rgs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getDataCadastro", {
        get: function () {
            return this.dataCadastro;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getTelefones", {
        get: function () {
            return this.telefones;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getProdutosConsumidos", {
        get: function () {
            return this.produtosConsumidos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getServicosConsumidos", {
        get: function () {
            return this.servicosConsumidos;
        },
        enumerable: false,
        configurable: true
    });
    Cliente.prototype.addRg = function (rg) {
        this.rgs.push(rg);
    };
    Cliente.prototype.addTelefones = function (telefone) {
        this.telefones.push(telefone);
    };
    Cliente.prototype.addProduto = function (produto) {
        this.produtosConsumidos.push(produto);
        produto.addConsumo();
    };
    Cliente.prototype.addServico = function (servico) {
        this.servicosConsumidos.push(servico);
        servico.addConsumo();
    };
    Object.defineProperty(Cliente.prototype, "getGenero", {
        get: function () {
            switch (this.genero) {
                case 'Masculino':
                    return 'M - Masculino';
                case 'Feminino':
                    return 'F - Feminino';
                default:
                    return 'O - Outro';
            }
        },
        enumerable: false,
        configurable: true
    });
    Cliente.prototype.getGeneroChar = function () {
        return this.genero;
    };
    return Cliente;
}());
exports.default = Cliente;
