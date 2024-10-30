const path = require("path");
const express = require("express");

const app = express();

app.use(express.static(__dirname + '/dist/ecommerce-fastery'));

app.get('/*', function(req,res){
res.sendFile(path.join(__dirname, '/dist/ecommerce-fastery/index.html'))
});

app.listen(process.env.PORT || 8080, () => {
	console.log("app running 8080");
});