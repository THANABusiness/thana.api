const express = require('express');
const app = express();
const PORT = 8080;
const cors = require('cors')

app.use(cors())
app.use(express.json());

const products = [
  {
    name: 'Product_1',
    image: 'https://cdn.store-assets.com/s/875875/i/39054424.png',
    company: 'THANA Business.'
  },
  {
    name: 'Product_1',
    image: 'https://cdn.store-assets.com/s/875875/i/39054424.png',
    company: 'THANA Business.'
  },
  {
    name: 'Product_1',
    image: 'https://cdn.store-assets.com/s/875875/i/39054424.png',
    company: 'THANA Business.'
  }
]

app.get('/', (req, res) => {
  res.status(200).json(products);
})

app.listen(PORT, () => console.log('@THANA Business.'))