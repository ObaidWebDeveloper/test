const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.get('/',(req,res) => {
    res.send("hellow");
})

app.listen(port,() => {
    console.log(`server running port ${port}`)
})