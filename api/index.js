const express = require('express');
const app = express();
const User = require('./model/User')
const bodyParser = require('body-parser')
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

/**middleware */

app.use(express.json())

/**server */

const port = process.env.PORT

app.listen(port, () => {
    connect()
    console.log('listening to port: ', port)
})


/**connection */
const connect = async() => {
    try{
        await mongoose.connect('mongodb+srv://ejayawan22:ASzD363spEuN9Wdr@cluster0.m1kl4dn.mongodb.net/?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log('successfuly connected to Mongodb!')
    }
    catch(err){
        console.log('failed')
    }
}

app.post('/register', async (req,res) => {
    const {username, email, password} = req.body;

    try{
        await User.create({
            username,
            email,
            password,
        })
    }
    catch(err){
        console.log(err)
    }
})






