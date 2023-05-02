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

app.get('/allData/:id', (req, res)=>{
    const id =req.params.id;
    console.log(id);
    const singleData = allData.find(n=>n.id == id)
    res.send(singleData)
    
})

app.listen(port, ()=>{
    console.log(`Assignment server API is running on port: ${port}`)
})