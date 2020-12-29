const express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());

//write your code 
app.get('/user', (req, res) => {
    const parameter=req.param('name');
    res.json({ message:"this is last homework " + parameter  });
});
app.post('/user', (req, res) => {
    console.log('body :', req.body);
    res.json({ name:req.body.name,message:"this is last homework" });
});




app.listen(3000,()=>{
   console.log('server running on port 3000'); 
});

