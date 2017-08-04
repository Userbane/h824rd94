const path = require("path");
var exp = require('express');
var app = exp();
const port = 8000;
app.use(exp.static(path.join(__dirname, 'web')));
app.listen(port, ()=>{
    console.log('Server has started on port:'+' '+ port);
    console.log('Running...');
})