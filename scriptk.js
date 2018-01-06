/*Event handling*/
document.addeventlistener ("DOMcontentloaded",
function(event){
	/*unobstrusive event binding*/
	document.queryselector("button")
	.addeventlistener("click", function(){
var self = this;
var name ="";
/*call server to get the name*/

$ajaxutils.sendgetrequest("/data/name.txt",
function(request){
	self.name = request.responsetext;
});

document.queryselector("#content")
.innerHTML = "<h2>Hello" + self.name+"!"
	});
}
)