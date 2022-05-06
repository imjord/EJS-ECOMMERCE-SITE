const mongoose = require('mongoose');
const Product = require('../models/Products');

mongoose.connect('mongodb://localhost/ejsecom').then(() => {
    console.log('product seeds opened')
}).catch((err) => {
    console.log(err);
})

const seedProducts = [
    {
        image: '/assets/doom.jpg',
        name: 'Doom',
        price: 10,
        category: 'FPS'
    },
    {
        image: '/assets/mario.jpg',
        name: 'Mario',
        price: 10,
        category: 'Platformer'
    },
    {
        image: '/assets/pokemon.png',
        name: 'Pokemon',
        price: 10,
        category: 'RPG'
    },
]

const seedDB = async () => {
    await Product.deleteMany({});
    await Product.insertMany(seedProducts)
}

seedDB().then(() => {
    mongoose.connection.close()
})