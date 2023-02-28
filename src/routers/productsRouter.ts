import {Request, Response, Router} from "express";
export const productsRouter = Router({});

const products = [{id: 1, title: 'tomato'}, {id: 2, title: 'orange'}]

productsRouter.get('/', (req: Request, res: Response) => {
    let product = products
    if (req.query.title) {
        product = product.filter(c => c.title.indexOf(req.query.title  as string) > -1)
        res.send(product)
    } else if ('/'){
        res.send(products)
    } else  {
        res.sendStatus(404)
    }
})
productsRouter.delete('/:id', (req: Request, res: Response) => {
    for (let i = 0; i < products.length; i++){
        if (products[i].id === +req.params.id) {
            res.sendStatus(204)
            return;
        }
    }
    let product = products.find(c => c.id === +req.params.id)
    if(!product)
        res.sendStatus(404)
})
productsRouter.get('/:id', (req: Request, res: Response) => {
    let product = products.find(c => c.id === +req.params.id)
    if(product) {
        res.send(product)
    } else {
        res.sendStatus(404)
    }
})
