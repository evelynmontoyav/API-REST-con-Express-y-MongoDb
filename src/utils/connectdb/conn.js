// Importando el mongo client y ServerApiVersion de mongodb
const  {MongoClient, ServerApiVersion } = require('mongodb')

const uri ="mongodb+srv://Evelyn:1054542694@cluster0.vlo9vuo.mongodb.net/?retryWrites=true&w=majority"

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
});

// exportando el client
module.exports = client