(function (global) {

/*Set up a namespace for utility*/
var ajaxutils = {};

/*Returns an HTTP request object*/
function getrequestobject(){
	if (window.XMLHttpRequest){
		return(new XMLHttpRequest());
	}

	else if (window.Activexobject){
		/*for very old IE browsers(optional)*/
	return(new Activexobject("Microsoft.XMLHTTP"));	
	}

	else{
		global.alert("Ajax is not supported");
	return(null);
	}
}


/*Makes an Ajax GET Request to 'requesturl'*/
ajaxutils.sendgetrequest =
function(requesturl, responsehandler, isJsonResponse){
	var request = getrequestobject();
	request.onreadystatechange =
	function() {
		handleresponse(request, responsehandler, isJsonResponse);
	};
	request.open ("GET", requesturl, true);
	request.send(null); /*for POST only*/
};

/*only calls user provided 'responsehandler'
function if response is ready
and not an error*/

function handleresponse(request, responsehandler){
	if ((request.readystate == 4) &&
		(request.status == 200)){
	/*default to JsonResponse=true*/
if(isJsonResponse==undefined){
	isJsonResponse=true;
	}

if (isJsonResponse){
	responsehandler(JSON.parse(request.responsetext))
}
else{
	responsehandler(request.responsetext)
}
}
}

/*Expose utility to the global object*/

global.$ajaxutils = ajaxutils;

})(window);