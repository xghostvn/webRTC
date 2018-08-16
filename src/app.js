
    var Stream = require('./openStream');

    var socket =io.connect('http://localhost:3000');
    
    var playVideo = require('./playVideo');
    
    var Peer = require('simple-peer');
    var $ = require('jquery')
    var my_token;
    

    socket.on('abc',()=>{
             console.log('123');
    });
    
    Stream.open(function(stream){
    
        playVideo(stream,'localStream'); 
                

        socket.on('answer_token',(data)=>{

           

            p.signal(data.token);


        });
      
                console.log(stream);

    
    
                var p = new Peer({ initiator: location.hash === '#1', trickle: false ,stream:stream});
    
                p.on('signal',(token) => {
                
                    my_token=token;
  
                } ); // sinh ra 1 object 
    
    
                $('#connect').click(()=>{

            

                    socket.emit('send_token',{token : my_token});
    
                     

                 
    
                });
    
                p.on('stream',(stream)=>{
                        console.log(stream);
                        playVideo(stream,'friendStream');
    
                });
    
    });
    
    
    
    
    
    