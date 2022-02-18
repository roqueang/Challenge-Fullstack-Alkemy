const express = require('express');
const app = express();

app.get ('/',(req, res)=>{
    res.send('Hello world');
});

app.get ('/about',(req, res)=>{
    res.send('About me');
});

app.get ('/contact',(req, res)=>{
    res.send('Contact me');
});

app.listen(3000, () => {
    console.log('Server on port http://localhost:3000/ ');
});