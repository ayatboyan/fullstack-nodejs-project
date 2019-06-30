const express = require('express');
const app = express();
const path = require('path');

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'index.html'));
});

//app.get('/', function(req, res){
//    res.json('Haloo its work! from server.js')
//});

//membuat server atau menginisialisasi server
const PORT = process.env.PORT || 5000
app.listen(PORT, function(){
    //console.log("Server berjalan di port" +PORT)
    console.log(`Server berjalan di port ${PORT}`)
});