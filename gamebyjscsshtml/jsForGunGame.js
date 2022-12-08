const express = require('express');
const app = express();




app.get('/', (req, res) => {
    res.send('Welcome to The Gun Game!')
});
app.listen(3012, ()=>{
    console.log('the listening port:3012')
})

function f1(){
    var stage = document.getElementById("stage");
    var bg1 = stage.getElementsByClassName("bg1")[0];
    console.log(bg1);
    var topval =0;
    var t1=setInterval(function(){
        console.log( bg1.style.cssText);
        bg1.style.cssText="top" + topval +"px";
        topval -=1;

       
    }, 1000)
  
};
function myApp(a,b,c){};
