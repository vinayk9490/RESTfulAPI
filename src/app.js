const express= require("express");
const app=express();
const Student=require("./models/students");
require("./db/connect");

app.use(express.json());

// creating new students 

app.post("/students",async(req,res)=>{
    try{
        console.log(req.body);
        const user=new Student(req.body);
        const createUser=await user.save();
        res.status(201).send(createUser);
    }
    catch(e){res.status(400).send(e);}
});


// reading the students table

app.get("/students",async(req,res)=>{
    try{
        const studentData=await Student.find();
        res.send(studentData);
    }catch(e){res.send(e)};
})

// get the individual id of students
app.get("/students/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        
        const individualData=await Student.findById(_id);
        res.send(individualData);
    }
    catch(e){
        res.send(e);
    }
})

//get the details by name of the student
app.get("/students/:name",async(req,res)=>{
    try{
        const name=req.params.name;
        const getindividualsData=await Student.findById(name);
        res.send(getindividualsData);
    }catch(e){
        res.send(e);
    }
})
//update the students by their studentsid
app.patch("/students/:id",async(req,res)=>{
    try{
        const id=req.params.id;
        const updatestudentsData=await Student.findByIdAndUpdate(id,req.body);
        res.status(200).send(updatestudentsData);
    }catch(e){
      res.status(404).send(e);  
    }
})


//delete student by its it
app.delete("/students/:id",async(req,res)=>{
    try{
        const id=req.params.id;
        const deletestudentId=await Student.findByIdAndDelete(id);
        res.status(200).send(deletestudentId);
    }catch(e){
        res.status(404).send(e);
    }
})





const port=3000;
app.listen(port,()=>{
    console.log(`listening to port number ${port}`);
});