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





