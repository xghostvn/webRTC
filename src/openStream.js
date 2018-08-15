


var open = (cb)=>{
    var constraints = {audio:false,video:{width:1280,height:720}};
    navigator.mediaDevices.getUserMedia(constraints)
        .then((stream)=>{
                



                cb(stream);


    
    
        })
        .catch((err)=>{
            console.log(err);
  });
}

    module.exports = {
        open
    }