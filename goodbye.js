(function(window){
var byeSpeaker = {};
window.byeSpeaker = byeSpeaker;
var speakWord = "GoodBye";
byeSpeaker.speak= function(name) {
  console.log(speakWord + " " + name);
}
})(window);