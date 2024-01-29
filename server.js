require('dotenv').config();
const express = require('express');
const server = express();
const path = require('path');
const cors = require('cors');
const book = require('./public/books.json');
port = process.env.PORT;
dburl = process.env.MONGO_URL;

const { default: mongoose } = require('mongoose');

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use(cors());

server.get('/', (req, res) => {
  res.json({ message: 'welcome to express server' });
});


const productRoutes = require('./routes/product_1.routes');
const userRoutes = require('./routes/user.routes');
const cartRoutes = require('./routes/cart.routes')


server.use('/api/product', productRoutes);
server.use('/api/user', userRoutes);
server.use('/api/Cart', cartRoutes);


server.listen(port, () => {
  try {
    mongoose.connect(dburl);
    console.log('mongodb start');
  } catch (error) {
    handleError(error);
  }
  console.log('server is start at http://localhost:1212');
})