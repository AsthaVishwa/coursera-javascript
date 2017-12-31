(function(window)
	{
var byespeaker ={};
var speakWord = "Good Bye";
function speak(name) {
  console.log(speakWord + " " + name);
}

window.byespeaker = speak;
})(window);