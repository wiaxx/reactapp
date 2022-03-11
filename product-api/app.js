const express = require('express')    // Import exrepss, a light-weight framework
const app = express()                 // Init exrpess, and save it in "app" variable
const mongoose = require('mongoose'); // Import mongoose, a tool that gives NoSQL DB (such as Mongodb), the ablilities of a relational DB (such MySQL)
const bodyParser = require('body-parser'); 
const corse = require('cors');

app.use(corse());           // Allow cross-origin requests 
app.use(bodyParser.json()); // Formats data to Json
//middleware

const productRouter = require('./routes/products');
app.use('/products', productRouter);

// Connect to DB
// NOTE! Connect to your own DB
mongoose.connect(
    // 'mongodb+srv://blog_user:123qwe123@cluster0.wffly.mongodb.net/Cluster0?retryWrites=true&w=majority',
    'mongodb+srv://wiaxx:XZ9co3aYXY3TcqAI@cluster0.cd27p.mongodb.net/Cluster0?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log('DB connected');
    }
)

// Listen to server
app.listen(5000); //Listen through port 5000
