const mongoose = require('./connect');
var  Schema = mongoose.Schema;
var schemas = {};

schemas.students = new Schema({
    name: {//姓名
        type: {},
        required: true
    },
    sex: {  //性别
        type: {},
        required: true
    },
    like: {  //意向
        type: {},
        required: true
    },
    intro: {    //自我介绍
        type: {},
        required: true
    } ,
    stuID:{   //学号
        type: {},
        required: true
    },
    subject: { //专业班级
        type: {},
        require: true
    },
    call: {  //电话
        type: {},
        require: true
    }
});

// schemas.students.methods.printName = function () {
//     console.log('姓名'+this.name);
// }

module.exports = schemas;