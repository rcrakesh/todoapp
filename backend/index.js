const express = require("express");
const cors = require("cors");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express(); 
app.use(express.json());
app.use(cors());



app.post("/todo" , async  function(req, res){
    const createPayload = req.body;
    const parsedPayLoad = createTodo.safeParse(createPayload);
    if (!parsedPayLoad.success){
        res.status(411).json({
            msg: "you sent the wrong inputs",
        })
        return ;
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
    })
    res.json({
        msg : "todo created"
    })


})

app.get("/todos", async  function(req , res){

    const todos =  await todo.find({});
    res.json({
        todos
    })
})

app.put("/completed" , async function(req , res){
    const updatePayload = req.body;
    const parsedPayLoad = updateTodo.safeParse(updatePayload);
    if (!parsedPayLoad.success){
        res.status(411).json({
            msg : " you sent the wrong inputs",
        })
        return ;
    }
    await todo.update({
        _id : req.body.id
    },{
        completed : true
    })
    res,json({
        msg: "todo marked as completed"
    })
})

app.delete("/delete" , function(req , res){
       
})

app.listen(3000);