const express =require("express")
const mongose =require("./db")

const app =express();

app.listen(3000,()=>{
    console.log("server connected on the port 3000 ...!")
})