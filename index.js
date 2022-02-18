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

app.get ('/test',(req, res)=>{
    res.send('<h1>TEST</H1> ');
});


app.listen(5000, () => {
    console.log('Server on port http://localhost:5000/ ');
});