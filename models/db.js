//to connect with localhost
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/EmployeeDB')
.then(()=>{
    console.log('Connect successfully')
})
.catch((err)=>{
    console.log(err)
})
require('./employee.model');