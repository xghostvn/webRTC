var express  = require('express');
const app = express();


app.use(express.static('public'));
app.set('view engine','hbs');
app.set('views','./views');


var server = app.listen(3000);

const io = require('socket.io')(server);

io.on('connection',(socket)=>{
      
        console.log('new user connect');
                
    
        socket.on('send_token',(data)=>{
                socket.broadcast.emit('answer_token',{token:data.token});
        })


});

app.get('/',(req,res)=>{
        res.render('index');
});


