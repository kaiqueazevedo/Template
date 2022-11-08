const express = require('express');
const fs = require('fs');

const app = express();



let user = {
    id:0,
    name:"Igor",
    phone:"(222)234-4321",
}

app.get("/",(req,res)=>{

    res,send("Hello World");
})


app.listen(3000, () =>{
    console.log("Server Runing on 3000")
})
