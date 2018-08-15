var Stream = require('./openStream');

var $ = require('jquery')

Stream.open();

var Peer = require('simple-peer');

var p = new Peer({ initiator: location.hash === '#1', trickle: false });

p.on('signal',(token) => {
    console.log(token);
    console.log('waitting to connect');
    $('#mySignal').val(JSON.stringify(token));
} ); // sinh ra 1 object 


$('#click').click(()=>{

        const friendSignal = JSON.parse($('#friendSignal').val());

        p.signal(friendSignal);

});

p.on('connect',()=>{
    console.log('connected');
})

