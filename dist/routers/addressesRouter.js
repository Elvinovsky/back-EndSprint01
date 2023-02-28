"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressesRouter = void 0;
const express_1 = require("express");
exports.addressesRouter = (0, express_1.Router)({});
const addresses = [{ id: 1, value: 'Krylova 49' }, { id: 2, value: 'Belesccogo 9' }];
exports.addressesRouter.get('/', (req, res) => {
    res.send(addresses);
});
exports.addressesRouter.get('/:id', (req, res) => {
    let address = addresses.find(c => c.id === +req.params.id);
    if (address) {
        res.send(address);
    }
    else {
        res.sendStatus(404);
    }
});
