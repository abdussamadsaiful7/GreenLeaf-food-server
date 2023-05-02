const express = require('express');
const app = express();
const port  = process.env.PORT || 5000;
const cors = require('cors');
app.use(cors());


const allData = require('./data/chef.json')
app.get('/', (req, res)=>{
res.send("Assignment server is running.....")
});

app.get('/allData', (req, res)=>{
    res.send(allData)
})

app.listen(port, ()=>{
    console.log(`Assignment server API is running on port: ${port}`)
})