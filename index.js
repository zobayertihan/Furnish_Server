const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

const catagories = require('./data/catagories.json')
const products = require('./data/products.json')

app.use(cors());

app.get('/', (req, res) => {
    res.send('API running');
})

app.get('/catagories', (req, res) => {
    res.send(catagories);
})

app.get('/products', (req, res) => {
    res.send(products);
})

app.get('/catagories/:id', (req, res) => {
    const id = req.params.id;
    const selectedCatagories = products.filter(n => n.catagoryID === id)
    res.send(selectedCatagories);
})

app.get('/products/:id', (req, res) => {
    const id = req.params.id;
    const selectedProducts = products.find(n => n.id === id)
    res.send(selectedProducts);
})

app.listen(port, () => {
    console.log('Furnish running on port: ', port)
})