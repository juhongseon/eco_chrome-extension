const express = require("express")
const app = express()
app.use(express.static('emo'))
app.listen(7777,()=>{
    console.log("Static Server Start at Port:7777","http://localhost:7777")
})