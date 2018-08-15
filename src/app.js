var Stream = require('./openStream');

var playVideo = require('./playVideo');

var Peer = require('simple-peer');
var $ = require('jquery')



Stream.open(function(stream){

    playVideo(stream,'localStream'); 
                
    console.log(stream);


var p = new Peer({ initiator: location.hash === '#1', trickle: false ,stream:stream});

p.on('signal',(token) => {
 
    $('#mySignal').val(JSON.stringify(token));
} ); // sinh ra 1 object 


$('#click').click(()=>{

        const friendSignal = JSON.parse($('#friendSignal').val());

        p.signal(friendSignal);

});

p.on('stream',(stream)=>{
        console.log(stream);
        playVideo(stream,'friendStream');

});

});


