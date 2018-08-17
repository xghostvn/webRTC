
    var Stream = require('./openStream');

    var socket =io.connect('http://localhost:3000');
    
    var playVideo = require('./playVideo');
    
    var Peer = require('peerjs');

    var $ = require('jquery');


    var uid = require('uid');
     


    function getPeer(){
        const id = uid(10);
        $('#mypeerid').append(id);
        console.log(id);
        return id;

    }

    var peer = new Peer(getPeer());
    console.log(peer);

    Stream.open(function(stream){
    
        playVideo(stream,'localStream'); 
                

        $('#connect').click(()=>{

                var fid = $('#friendid').val();

                var call = peer.call(fid,stream);

                call.on('stream',(stream)=>{
                        playVideo(stream,'friendStream');
                });

        });


        peer.on('call',(call)=>{

            call.answer(stream);
                    console.log('123');
            call.on('stream',(stream)=>{
                playVideo(stream,'friendStream');
        });

        });


    

    
    });
    
    
    
    
    
    