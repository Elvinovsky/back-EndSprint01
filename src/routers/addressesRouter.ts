import {Request, Response, Router} from "express";

export const addressesRouter = Router({});

const addresses = [{id: 1, value: 'Krylova 49'}, {id: 2, value: 'Belesccogo 9'}]
addressesRouter.get('/', (req: Request, res: Response) => {
    res.send(addresses)
})
addressesRouter.get('/:id', (req: Request, res: Response) => {
    let address = addresses.find(c => c.id === +req.params.id)
    if(address) {
        res.send(address)
    } else {
        res.sendStatus(404)
    }
})
