const express = require('express');
const fs = require('fs');
const app = express();

let user ={
    id:0,
    name:"igor",
    phone:"(222)234-4321"
}

app.get("/", (req,res)=>{
    fs.readFile('./templates/user.html'/'UTF8',(err,data =>{
        if(!err){
            res.send(data);
        }
    }))

})

app.listen(3000,()=>{
    console.log('Server Runing on 3000')
})