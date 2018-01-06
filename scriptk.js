/*Event handling*/
document.addEventListener("DOMContentLoaded",
function(event) {
	/*unobstrusive event binding*/
	document.querySelector("button")
	.addEventListener("click", function () {
var self = this;
var name = "";

/*call server to get the name*/

$ajaxutils.sendgetrequest("/data/name.txt",
function(request){
	self.name = request.responsetext;
console.log(self.name);
});

document.querySelector("#content")
.innerHTML = "<h2>Hello" + self.name+"!"
	});
}
)