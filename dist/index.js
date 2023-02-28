"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const productsRouter_1 = require("./routers/productsRouter");
const addressesRouter_1 = require("./routers/addressesRouter");
const app = (0, express_1.default)();
const port = process.env.PORT || 5003;
const parserMiddleware = (0, body_parser_1.default)({});
app.use(parserMiddleware);
app.use('/products', productsRouter_1.productsRouter);
app.use('/addresses', addressesRouter_1.addressesRouter);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
