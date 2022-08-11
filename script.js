PullToRefresh.init({
  mainElement: "main",
  onRefresh: function () {
    updateImage();
  }
});

//function setTime() {
//document.getElementById('date').innerHTML = new Date().toLocaleString();
//}
var newImage = new Image();
newImage.src = "flag_animation.gif";
//var myAudio = new Audio("anthem.mp3");
var myAudio = new Audio();
myAudio = new Audio("anthem.mp3");
//myaudio = "anthem.mp3";

function updateImage() {
  document.getElementById("ThisImage").src = newImage.src;
  newImage = new Image();
  newImage.src = "flag_animation.gif?time=" + new Date();
  //document.getElementById("Anthem").src = audio;
  //myAudio.src = new Audio();
  //myAudio.src = document.getElementById("anthem_id").src;
  //myAudio.unmute();
  myAudio.play();
  //myAudio.unmute();
  //myAudio.play();
  //myAudio.muted = false;
  //setTimeout(updateImage, 1000);
}
//setTime();1
//updateImage()
TouchEmulator();
