


var open = ()=>{
    var constraints = {audio:false,video:{width:1280,height:720}};
    navigator.mediaDevices.getUserMedia(constraints)
        .then((mediaStream)=>{
                
                var video = document.getElementById('localStream');
                  video.srcObject = mediaStream;
                    video.onloadedmetadata = function(e) {
                      video.play();
                };
    
    
        })
        .catch((err)=>{
            console.log(err);
  });
}

    module.exports = {
        open
    }