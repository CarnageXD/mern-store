require('dotenv').config()
const cors = require('cors')
const mongoose = require('mongoose')
const express = require('express')
const AuthRouter = require('./routes/auth.routes')
const ProductRouter = require('./routes/product.routes')
const CartRouter = require('./routes/cart.routes')
const OrdersRouter = require('./routes/orders.routes')
const config = require('config')
const path = require('path')


const app = express()

const PORT = process.env.PORT || 5000

app.use(express.static(__dirname));
app.use(express.static(path.resolve(__dirname, 'files')))
app.use(cors())
app.use(express.json())
app.use('/api/auth', AuthRouter)
app.use('/api/products', ProductRouter)
app.use('/api/cart', CartRouter)
app.use('/api/orders', OrdersRouter)

const start = async () => {
    try {
        await mongoose.connect(config.get("MONGO"))
        app.listen(PORT, () => console.log(`Server has been started on ${PORT} port`))
    } catch (e) {
        console.log('Server error', e.message)
    }
}

start()