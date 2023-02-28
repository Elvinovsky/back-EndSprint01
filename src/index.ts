import express  from 'express'
import bodyParser from "body-parser";
import {productsRouter} from "./routers/productsRouter";
import {addressesRouter} from "./routers/addressesRouter";

const app = express()
const port = process.env.PORT || 5003

const parserMiddleware = bodyParser({});
app.use(parserMiddleware)

app.use('/products', productsRouter)
app.use('/addresses', addressesRouter)
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})