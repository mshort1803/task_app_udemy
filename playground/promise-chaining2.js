require('../src/db/mongoose');
const Task = require('../src/models/task');

const deleteTaskAndCount = async (id, completed) => {
    await Task.findByIdAndDelete(id)
    return await Task.countDocuments(completed)
}

deleteTaskAndCount('63859f88c84f8c7a0d5aa6ac', false).then(count => {
    console.log(count)
}).catch (e => {
    console.log(e)
})
