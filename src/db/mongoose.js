const mongoose = require('mongoose');

const connectionURL  = 'mongodb://127.0.0.1:27017/task-manager-api'

mongoose.connect(connectionURL, {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true,
}).catch(error => {
    console.log('Error', error);
})