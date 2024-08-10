const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    rollno:{
        type:Number,
        required: true
    }
});

const studentModel = mongoose.model('student', studentSchema)

module.exports = studentModel;