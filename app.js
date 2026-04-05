const express = require('express')
const app =  express()

app.use(express.json())

app.get('/' , (req, res)=>{
    res.send("test the server")
})
app.listen(3000, () => {
    console.log('http://localhost:3000')
    
})