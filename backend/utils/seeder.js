//Author - Shubham padalkar
//This file is seeder for model data to create same structure

const Product = require('../models/product');
const dotenv = require('dotenv')
const connectDatabase = require('../config/database')

const data = require('../data/data.json')

//setting dotenv file

dotenv.config({path:'backend/config/config.env'})

connectDatabase();

const seedProduct = async () =>
{
    try{
        await Product.deleteMany()
        console.log('Products are deleted')

        await Product.insertMany(data)
        console.log('All products are added.')

        process.exit()
    }
    catch(error)
    {
        console.log(error.message);
        process.exit();
    }
}

seedProduct()