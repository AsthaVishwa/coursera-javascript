var string="Astha";
string += "Vishwa"; 
/*String = string + "world" */
console.log(string + "!");

console.log((5+7)/3);
console.log(undefined/5);

var x=4, y=4;
if (x==y){
	console.log("x=4 is equal to y=4");
}
x = '4';
if(x==y){
	console.log("x=4 is equal to y=4");
}

/* strict equality (x===y)*/


if(false || null || undefined|| "" || NaN)
{
	console.log("This line won't ever executed");
}
else{
	console.log("All false");
}

if(true && "hello" && 1 && -1 && "false")
{console.log("All true");
}

function a ()
{
	return/*not providing { brace after return considers, return; which is the end of the statement thus returning nothing*/
	{
		name: "yaakov"
	};
}

function b() {
	return{
		name: "yaakov"
	};
}

console.log(a());
console.log(b());

var sum=0;
for(var i=0; i<10; i++){
	console.log(i);
	sum = sum +i;
}
console.log ("sum of 0 through 9 is:" +sum);

var z=10;
if((null)||(console.log("Hello")) || z>5){
	console.log("Hello");
}
/*Object creation*/

var company = new Object();
company.name = "Srijan";
company.ceo = new Object();
company.ceo.firstname = "Astha";
company.ceo.favcolor ="Purple";

console.log(company);
console.log("company CEO name is:" + company.ceo.firstname);

console.log(company["name"]);
console.log(company["favcolor"]);

var stockpropname = "stock of company";
company[stockpropname] = 110;

console.log("Stock price is:" +company[stockpropname]);

/*Object creation: Object Literal*/
 var srijan = {
 	name: "Srijan",
 	ceo: {
 		firstname : "Astha",
 		favcolor: "purple"
 	},
 	"Stock of company" :110
 };

console.log(srijan.ceo.firstname);


function multiply (x,y){
	return x*y;
}
console.log(multiply(4,5));
multiply.version ="v.1.0.0";
console.log(multiply);

/*function factory*/

function makemultiplier(multiplier){
var myfunc = function(x){
	return multiplier*x;
};
return myfunc;
}
var multiplyby3= makemultiplier(3);
console.log(multiplyby3(10));

/*passing function as arguments*/

function dooperationon(x, operation){
	return operation(x);
}
var result = dooperationon(5,multiplyby3);
console.log(result);

/*copy by value

var a = 2;
var b = a;
console.log("a:" +a);
console.log("b:" +b);

b= 4;
console.log("a:" +a);
console.log("b:" +b);

*/

/*copy by refrence*/

var a = {x:7};
var b = a;
console.log(a);
console.log(b);

b.x = 5
console.log(a);
console.log(b);

/*pass by value*/

function changeprimitive(primvalue){
	console.log("in changeprimitive....");
	console.log ("before:");
	console.log(primvalue);

	primvalue = 5;
	console.log("after");
	console.log(primvalue);
}

var value = 7;
changeprimitive(value);
console.log("after changeprimitive, orig value:")
console.log(value);

/*pass by reference*/

function changeobject(objvalue){
	console.log("in changeobject...");
	console.log("before:");
	console.log(objvalue);

	objvalue.x = 5
	console.log("after");
	console.log(objvalue);
}
value ={x:7};
changeobject(value);
console.log("after changeobject, orig value:");
console.log(value);

function test(){
	console.log(this);
}
test();

/*function constructors*/
function Circle(radius){
	this.radius = radius;
}
Circle.prototype.getArea =
function(){
	return Math.PI* Math.pow(this.radius,2);
};

var myCircle = new Circle(10);
console.log(myCircle.getArea());

/*object literal and "this"*/
/*
var literalCircle ={
	radius: 10,

	getArea: function() {
		console.log(this);
		return Math.PI * Math.pow(this.radius,2);
	}
	};

*/
function Dog(name){
	this.name = name;
}
Dog.prototype.bark = function(){
	console.log(this.name+"likes barking! Bark!");
}

var max = new Dog ("Max","Buddy");
max.bark();

/*Arrays*/
var array = new Array();
array[0] ="Astha";
array[1] = 2;
array[2] = function(name){
	console.log("Hello" +name);
};

array[3] = {course: "HTML, CSS & JS"};

console.log(array);
array [2](array[0]);
console.log(array[3].course);

/*Short hand array creation*/
/*
var names = ["Astha", "Manu"];
console.log(names);

*/
var names2 = ["Astha", "Manu"];
var myobj={
	name: "Astha",
	Course: "HTML/CSS/JS",
};

for (var prop in myobj){
	console.log(prop+":" + myobj[prop]);
}

var counter = 0;
var myarray = ["Astha" , 2 , {handle: "Astha"}];
for (var i = 0; i<myarray.length; i++){
	counter++
}
console.log (counter);

/*closures*/
function makeMultiplier(multiplier){
	function b(){
		console.log("Multiplier is:" +multiplier);
	}
	b();

	return(
		function(x){
			return multiplier*x;
		}

		);
}var doubleAll = makeMultiplier(2);
console.log(doubleAll(10));
/**/

/*Fake namespaces
Scrip 1, Script2, App*/
 
 /* Immediately Invoked Function Expression= IIFE*/
 (function(name){
 	console.log("Hello" +name);
 }
 	) ("Coursera");

 var x = 10;
if ( (null) || (console.log("Hello")) || x > 5 ) {
  console.log("Hello");
}