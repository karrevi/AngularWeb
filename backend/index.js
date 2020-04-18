const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = 3000;

const usersRouter = require('./routes/users')
const productsRouter = require('./routes/products.js')
const categoriesRouter = require('./routes/categories.js')
const ordersRouter = require('./routes/orders.js')

app.use(morgan('dev'))
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/categories', categoriesRouter);
app.use('/orders', ordersRouter);

app.listen(PORT, () => console.log('servidor levantado' + PORT))