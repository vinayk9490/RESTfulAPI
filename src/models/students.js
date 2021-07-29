const mongoose =require("mongoose");

const validator=require("validator");

const studentSchema=new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minlength: 3
    },
    email:{
        type: String,
        unique: [true,"email id already used"],
        required: true,
        validate(value)
        {
            if(!validator.isEmail(value))
            {
                throw new Error("invalid email");
            }
        }
    },
    phone:{
        type: Number,
        minlength: 10,
        required: true,
        unique: true
    },
    address:{
        type: String,
        required: true
    }
});

//creating collection for the schema 

const Student=new mongoose.model('Student',studentSchema);
module.exports=Student;