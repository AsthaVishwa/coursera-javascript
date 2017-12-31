(function(window){
var hellospeaker ={};
var speakWord = "Hello";
hellospeaker.speak = function(names) {
  console.log(speakWord + " " + names);
}

window.hellospeaker = hellospeaker;

})(window);