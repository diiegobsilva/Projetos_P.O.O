import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from 'http-status-codes';

const clienteHistoricoRoute = Router();
const clienteHistorico = require('../models/clienteHistorico')



clienteHistoricoRoute.get('/clienteHistorico', async(req: Request, res: Response, next: NextFunction)=>{
    const clienteHistoricoList = await clienteHistorico.findAll();
    res.status(StatusCodes.OK).send(clienteHistoricoList)
})

clienteHistoricoRoute.get('/clienteHistorico/:uuid', async(req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    const project = await clienteHistorico.findAll({ where: { clienteId: uuid } })
    
    if (project === null) {
        return res.status(StatusCodes.NOT_FOUND).json({
            ok: false,
            message: "Relação não encontrada!"
        })
    } else {
        let arrayFlap:any =  []
        project.forEach(flap => {
            arrayFlap.push(flap.flapId)
        });
        return res.json(arrayFlap)
    }
})

clienteHistoricoRoute.post('/clienteHistorico/cadastrar', async (req: Request, res: Response, next: NextFunction)=>{
    const newclienteHistorico = req.body
    await clienteHistorico.create(newclienteHistorico)
    .then((test) =>{
        return res.json({
            id: test.id,
            ok: true,
            message: "Relação cadastrada com sucesso!"
        })
    }).catch(() =>{
        return res.status(StatusCodes.NOT_FOUND).json({
            id: -1,
            ok: false,
            message: "Relação não cadastrada!"
        })
    })
})

clienteHistoricoRoute.put('/clienteHistorico/modificar/:uuid', async(req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    const modifiedclienteHistorico = req.body;
    modifiedclienteHistorico.uuid = uuid
    await clienteHistorico.update(modifiedclienteHistorico, {
        where: {
            id: uuid
          }
    })
     .then(() =>{
         return res.json({
             ok: true,
             message: "Relação atualizada com sucesso!"
         })
     }).catch(() =>{
         return res.status(StatusCodes.NOT_FOUND).json({
             ok: false,
             message: "Relação não atualizada!"
        })
     })
})


clienteHistoricoRoute.delete('/clienteHistorico/deletar/:uuid', async(req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    await clienteHistorico.destroy({
        where: {
            id: uuid
          }
    })
    .then(() =>{
        return res.json({
            ok: true,
            message: "Relação deletada com sucesso!"
        })
    }).catch(() =>{
        return res.status(StatusCodes.NOT_FOUND).json({
            ok: false,
            message: "Relação não deletada!"
        })
    })
})


export default clienteHistoricoRoute;