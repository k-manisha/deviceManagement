const express = require ("express");
const myParser = require("body-parser");
const app= express();
//const f = require("middle");
app.use(myParser.json());
app.post('',(req,res)=>{
	const data = req.body;
	console.log(data);
	//console.log(data.Query);
	const response = {
		text: "The code is working fine"
	}
	res.json(response);

});


app.listen(3000);

