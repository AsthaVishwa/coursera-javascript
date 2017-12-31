(function(window){
var byespeaker = {};
var speakWord = "Good Bye";
byespeaker.speak = function(names) {
  console.log(speakWord + " " + names);
}

window.byespeaker = byespeaker;
})(window);