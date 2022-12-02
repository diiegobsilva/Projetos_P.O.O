import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from 'http-status-codes';

const listagemRoute = Router();
const clienteProduto = require('../models/clienteProdutoTable')
const clienteServico = require('../models/clienteServico')
const clienteHistorico = require('../models/clienteHistorico')


listagemRoute.get("/produto/maisConsumidos", async (req, res)=>{
    const { count, rows } = await clienteProduto.findAndCountAll({
        group: "produtoId",
        })
   
    res.json({count: count, rows: rows})
})

listagemRoute.get("/produto/maisConsumidos/Valor", async (req, res)=>{
     await clienteProduto.findAll({
        }).then((data)=>{
            res.json({rows:data})
        })
})

listagemRoute.get("/produto/maisConsumidos/Masculino", async (req, res)=>{
    const { count, rows } = await clienteProduto.findAndCountAll({
       where:{generoCliente:'Masculino'},
        group: "produtoId",
        })
    res.json({count: count, rows: rows})
})

listagemRoute.get("/produto/maisConsumidos/Feminino", async (req, res)=>{
    const { count, rows } = await clienteProduto.findAndCountAll({
       where:{generoCliente:'Feminino'},
        group: "produtoId",
        })
   
    res.json({count: count, rows: rows})
})

listagemRoute.get("/produto/maisConsumidos/Outros", async (req, res)=>{
    const { count, rows } = await clienteProduto.findAndCountAll({
       where:{generoCliente:'Outros'},
        group: "produtoId",
        })
   
    res.json({count: count, rows: rows})
})



listagemRoute.get("/servico/maisConsumidos", async (req, res)=>{
    const { count, rows } = await clienteServico.findAndCountAll({
        group: "servicoId",
        })
   
    res.json({count: count, rows: rows})
})

listagemRoute.get("/servico/maisConsumidos/Valor", async (req, res)=>{
     await clienteServico.findAll({
        }).then((data)=>{
            res.json({rows:data})
        })
})

listagemRoute.get("/servico/maisConsumidos/Masculino", async (req, res)=>{
    const { count, rows } = await clienteServico.findAndCountAll({
       where:{generoCliente:'Masculino'},
        group: "servicoId",
        })
    res.json({count: count, rows: rows})
})

listagemRoute.get("/servico/maisConsumidos/Feminino", async (req, res)=>{
    const { count, rows } = await clienteServico.findAndCountAll({
       where:{generoCliente:'Feminino'},
        group: "servicoId",
        })
   
    res.json({count: count, rows: rows})
})

listagemRoute.get("/servico/maisConsumidos/Outros", async (req, res)=>{
    const { count, rows } = await clienteServico.findAndCountAll({
       where:{generoCliente:'Outros'},
        group: "servicoId",
        })
   
    res.json({count: count, rows: rows})
})


export default listagemRoute;