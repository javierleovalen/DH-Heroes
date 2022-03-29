let express = require('express');
const path =require('path');
let app = express ();

                       

app.listen(3030, ()=> console.log('Pedido exitoso en el puerto 3030'));


app.get('/home', function (req,res) {
    let htmlPath = path.resolve(__dirname,'./views/index.html');
    res.sendFile(htmlPath);
});


app.get('/', function (req,res) {
    let htmlPath = path.resolve(__dirname,'./views/index.html');
    res.sendFile(htmlPath);
});


app.get('/babbage', function (req,res) {
    let htmlPath = path.resolve(__dirname,'./views/babbage.html');
    res.sendFile(htmlPath);

});

app.get('/berners-lee', function (req,res) {
    let htmlPath = path.resolve(__dirname,'./views/berners-lee.html');
    res.sendFile(htmlPath);
});

app.get('/clarke', function (req,res) {
    let htmlPath = path.resolve(__dirname,'./views/clarke.html');
    res.sendFile(htmlPath);
});

app.get('/hamilton', function (req,res) {
    let htmlPath = path.resolve(__dirname,'./views/hamilton.html');
    res.sendFile(htmlPath);
});

app.get('/hopper', function (req,res) {
    let htmlPath = path.resolve(__dirname,'./views/hopper.html');
    res.sendFile(htmlPath);
});

app.get('/lovelace', function (req,res) {
    let htmlPath = path.resolve(__dirname,'./views/lovelace.html');
    res.sendFile(htmlPath);
});

app.get('/turing', function (req,res) {
    let htmlPath = path.resolve(__dirname,'./views/turing.html');
    res.sendFile(htmlPath);
});


app.use(express.static('public')); //localhost:3030/ccs/style.ccs

//app.use('/static',express.static('Public')); //localhost:3030/static/ccs/style.ccs



// ● / -> Debe direccionar al recurso index.html.
// ● /babbage -> Debe direccionar al recurso babbage.html
// ● /berners-lee -> Debe direccionar al recurso berners-lee.html.
// ● /clarke -> Debe direccionar al recurso clarke.html.
// ● /hamilton -> Debe direccionar al recurso hamilton.html.
// ● /hopper -> Debe direccionar al recurso hopper.html.
// ● /lovelace -> Debe direccionar al recurso lovelace.html.
// ● /turing-> Debe direccionar al recurso turing.html.