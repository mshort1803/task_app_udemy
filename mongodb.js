const { MongoClient, ObjectId } = require('mongodb');

const connectionURL  = 'mongodb://127.0.0.1:27017'
const databaseName    = 'task-manager'

MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
  if(error) {
    return console.log("There was an error connecting to the database");
  }

  const db = client.db(databaseName)

});


