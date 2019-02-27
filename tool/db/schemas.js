const mongoose = require('./connect');
var  Schema = mongoose.Schema;
var schemas = {};

schemas.students = new Schema({
    name: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    like: {
        type: String,
        required: true
    },
    major: {
        type: String,
        required: true
    },
    intro: {
        type: String,
        required: true
    } ,
    tel: {
        type: String,
        require: true
    }
});

// schemas.students.methods.printName = function () {
//     console.log('姓名'+this.name);
// }

module.exports = schemas;