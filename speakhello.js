(function(window){
var hellospeaker ={};
var speakWord = "Hello";
function speak(name) {
  console.log(speakWord + " " + name);
}

window.hellospeaker = speak;

})(window);