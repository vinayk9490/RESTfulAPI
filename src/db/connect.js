const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/students-api",{
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndMoify: false
}).then(()=>{
    console.log("connection successful");
}).catch((e)=>{
    console.log("connection unsuccessfull");
})

