"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRouter = void 0;
const express_1 = require("express");
exports.productsRouter = (0, express_1.Router)({});
const products = [{ id: 1, title: 'tomato' }, { id: 2, title: 'orange' }];
exports.productsRouter.get('/', (req, res) => {
    let product = products;
    if (req.query.title) {
        product = product.filter(c => c.title.indexOf(req.query.title) > -1);
        res.send(product);
    }
    else if ('/') {
        res.send(products);
    }
    else {
        res.sendStatus(404);
    }
});
exports.productsRouter.delete('/:id', (req, res) => {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === +req.params.id) {
            res.sendStatus(204);
            return;
        }
    }
    let product = products.find(c => c.id === +req.params.id);
    if (!product)
        res.sendStatus(404);
});
exports.productsRouter.get('/:id', (req, res) => {
    let product = products.find(c => c.id === +req.params.id);
    if (product) {
        res.send(product);
    }
    else {
        res.sendStatus(404);
    }
});
