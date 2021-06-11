const {MongoClient} = require('mongodb');

async function main() {
    // The main Mongodb function. 
    // Connection URI
    const uri = "mongodb+srv://west557:<password>@cluster0.g0vtv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

    try {
        await client.connect();
    
        await listDatabases(client);
    
    } catch (e) {
        console.error(e);
    }
    
    finally {
        await client.close();
    }
    
    main().catch(console.error);

}

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};


const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://west557:<password>@cluster0.g0vtv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {

    const collection = client.db("test").collection("devices");
// perform actions on the collection object
client.close();
});
