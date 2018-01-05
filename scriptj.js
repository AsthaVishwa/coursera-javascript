console.log(document.getElementById("title"));

function sayHello(event){
	var name= document.getElementById("name").value;
	var message ="<h2> Hello" +name +"!</h2>";

	document.getElementById("content")
	.innerHTML = message;

	if (name ==="student"){
		var title= document.
		querySelector("#title")
		.textcontent;

		title +="&loving it!";

		document.querySelector("h1")
		.textcontent=title;
	}
}