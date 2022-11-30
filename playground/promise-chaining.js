require('../src/db/mongoose.js');
const User = require('../src/models/user');

// User.findByIdAndUpdate('638544f478afdb66a446ed3d', { age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1})
// }).then(result => {
//     console.log(result)
// }).catch(e => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    await User.findByIdAndUpdate(id, { age })
    return await User.countDocuments({ age })
}

updateAgeAndCount('638544f478afdb66a446ed3d', 37 ).then(count => {
    console.log(count)
}).catch(e => {
    console.log(e)
})
