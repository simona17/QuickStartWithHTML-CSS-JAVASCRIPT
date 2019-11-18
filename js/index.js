/* index.js */

"use strict"; 
var msg="hello JavaScript"
	console.log(msg);

  var resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML= "<p> This is from JavaScript</p>";

/*
var result = {
	name: "jQuery",
	language: "JavaScript",
	score: 4.5,
	showLog: function(){

	},
	owner:{
		login:"nsdcss",
		id:1222

	}
};

result.phoneNumber ="123-4839";
console.log(result.phoneNumber ); 

*/

var results = [{
	name: "jQuery",
	language: "JavaScript",
	score: 4.5,
	showLog: function(){

	},
	owner:{
		login:"nsdcss",
		id:1222
	}
},{
	name: "jQuery UI",
	language: "JavaScript",
	score: 3.5,
	showLog: function(){

	},
	owner:{
		login:"nsdcss",
		id:1222

	}
	}];


//console.log(results.length);

for(var x = 0; x < results.length; x++){
	var result = results[x];
	console.log(result.name);







console.log("msd is" + typeof(msg));
console.log("resultsDiv is " + typeof(resultsDiv));

var none;
console.log("none is " + typeof(none));

var aNumber = 10;
console.log("aNumber is " + typeof(aNumber));

var trueFalse = true;
console.log("trueFalse is" + typeof(trueFalse));

//  noneexistent ="this shouldn't work";

if (none == undefined){
	console.log("none is undefined")
}

if(aNumber === "10"){
	console.log("10 is 10");  
}

//function showMsg(msg){
//	console.log("showMsg:" +msg );
//}

function showMsg(msg, more){  
if(more){
	console.log("showMsg+" + msg + more);
}else{
	console.log("showMsg+" + msg);
}
}


showMsg("some info");
showMsg("some info", " and even more");

//different way of declaring functions:

var showIt = function (msg){
	console.log(msg);
}

showIt("some msg");

function showItThen(msg,callback){
	showIt(msg);
	callback("foo bar");
}

showItThen("showItThen called", function(){
console.log("callback called");
});


  var inGlobal = true; // declarat global

 function testMe(){
 	console.log("testMe():" + inGlobal);

 }

showIt("with closure", function(){
	showIt("testMe with Closure():" + showMsg);
})


 testMe();

 var myJSON = '{"name":"John", "age":31, "city":"New York"}';
var myObj = JSON.parse(myJSON);