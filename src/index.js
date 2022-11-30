const express = require('express')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

require('./db/mongoose.js');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

const bcrypt = require('bcryptjs');

app.listen(port, () => {
    console.log('server is running on port ' + port);
})

const jwt = require('jsonwebtoken')

const myFunction = async () => {
    const token = jwt.sign({_id: 'abc123'}, 'thisismynewcourse', { expiresIn: '7 days' })
    console.log(token)

    const data = jwt.verify(token, 'thisismynewcourse')
    console.log(data)
}

myFunction()
