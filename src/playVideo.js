module.exports = (stream,dir)=>{
    var video = document.getElementById(dir);
    video.srcObject = stream;
      video.onloadedmetadata = function(e) {
        video.play();
  };
}