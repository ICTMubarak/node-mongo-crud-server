const express = require('express');
const cors =require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// dbuser2
// JS1tmKLIq9bDPioI




const uri = "mongodb+srv://dbuser2:JS1tmKLIq9bDPioI@cluster0.ltjdg3f.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run(){

    try{
        const userCollection = client.db('nodeMongoCruddb').collection('users');
        // const user = {

        //     name: 'testint test 2',
        //     email: 'testing2@gmail.com'
        // }

        // const result = await userCollection.insertOne(user);
        // console.log(result);

        app.post('/users', (req, res) => {
            const user = req.body;
            console.log(user);
        })

    }
    finally{

    }

}
run().catch(err => console.log(err));



app.get('/', (req, res) => {
    res.send('Hesso fron node mongo crud server');
})

app.listen(port, ()=>{
    console.log(`listening to port ${port}`)
})