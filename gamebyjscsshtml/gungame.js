
var button1 = document.getElementById('StartGame');
button1.addEventListener('click',func1);
var div1= document.getElementById('div1');
function func1(element){
    element.innerText = 'the Gun-fighting Game begins';
    //element.style.webkitAnimationPlayState = "running";
    //element.style.color = "blue";
    //alert('Welcome to the Gun-fighting Game') 
    //document.getElementById('StartGame').innerHTML="Welcome to the Gun-fighting Game";
    //var div1= document.getElementById('div1');
    //div1.innerText =`Hi, ${PlayerName} Welcome to the Gun-fighting Game`;
    div1.innerText =`Hi, ${PlayerName} Welcome to the Gun-fighting Game`;
}


/* button2.addEventListener('click',function(){
    //alert('nihao');
    //alert(`accurary=${math.random()}`);
        
}); */


/* var button3 = document.getElementById('Player2');
button3.addEventListener('click',func3); */

/* var img = document.getElementById("img");
img.addEventListener('mouseover',function(){
    this.src="tree2.PNG"

})
img.addEventListener('mouseout',function(){
    this.src="tree1.PNG"

}) */
/* document.getElementById("colors").addEventListener("change", function(){
    document.body.style.background = document.getElementById("color").value
}) */

class Player {
    constructor(button, name, bullets, accuracy, scores){
        this.button= button;
        this.name = name;
        this.bullets = bullets;
        this.accuracy = accuracy;
        this.scores = scores;
        
    }
    //accuracy2=Math.random();
    greet(greetingwords){
        alert(greetingwords +'!');
    }
    start(){
        this.fighting = true;
        alert('fighting...');
    }

}
var Player11 = new Player(button1, "Jack", 5, 0.7, 0);
var Player22 = new Player(button2, "Jacob", 5, 0.7, 0 );

/* 
function openwin(){
    window.open("page.html","","width=200,height=200")

    }

    function get_cookie(Name) {
    var search = Name + "=" 
    var returnvalue = "";

    if (document.cookie.length > 0) {
    offset = document.cookie.indexOf(search)

    if (offset != -1) {
    offset += search.length

    end = document.cookie.indexOf(";", offset);

    if (end == -1)

    end = document.cookie.length;
    returnvalue=unescape(document.cookie.substring(offset, end))

    }
    }

return returnvalue;

}

function loadpopup(){
    if (get_cookie("popped")=="yes"){
    openwin();
    document.cookie="popped=yes"
}
} */

/* console.log(Player11.accuracy2);
console.log(Player11.accuracy1); */



var button2 = document.getElementById('Player1');
var button3 = document.getElementById('Player2'); 


for (var i = 1; i <= Player11.bullets; i++){
    function func2(element){
        element.innerText = 'Player1 completed';
        Player1HitRate = (Math.random()).toFixed(2); 
        console.log(Player1HitRate);
        if (Player1HitRate >= Player11.accuracy){
            Player11.scores =+ 10;
            div1.innerText =`Yah!  Player1 succeeded the ${i}th round, Player1 Scores are ${Player11.scores}`;
            //alert(`Player1 succeeded the ${i} round, Player1 Scores is ${Player11.scores}`)
            //Player11.greet('Yah!')
        }else{
            Player11.scores = Player11.scores + 0;
            //var div1= document.getElementById('div1');
            div1.innerText =`Gosh! Player1 missed the ${i}th round, Player1 Scores are ${Player11.scores}`;
           // alert(`Player1 missed the ${i} round, Player1 Scores is ${Player11.scores}`)
            //Player11.greet('')
        }
        var Player1Total = Player11.scores;
        console.log(Player1Total);
    }
     /*    var Player11Total = ()=>{
            Player11Total = Player11.scores;
        };
        Player1Total.bind(window);   
        } */
    button2.addEventListener('click', func2);
      
    function func3(element){
        element.innerText = 'Player2 completed';
        Player2HitRate = (Math.random()).toFixed(2); 
        console.log(Player2HitRate);
        if (Player2HitRate >= Player22.accuracy){
            Player22.scores =+ 10;
            div1.innerText =`'Wow!' Player2 succeeded the ${i}th  round, Player2 Scores are ${Player22.scores}`;
            
        }else{
            Player22.scores =+ 0;
            div1.innerText =`'What?!' Player2 missed the  ${i}th  round, Player2 Scores are ${Player22.scores}`;
           
        }
        var Player2Total = Player22.scores;
        console.log(Player2Total);
      
      /*   var Player2Total = ()=>{
            Player2Total = Player22.scores;
        };

        Player2Total.bind(window); */
        
        
    }
    button3.addEventListener('click', func3); 
    //func4(Player11.scores,Player22.scores);   
    
   
}

var button4 = document.getElementById('CheckResult');
function func4() {
if (Player11.scores> Player22.scores){
    div1.innerText =`${Player11.name} is the winner`;
}else if (Player11.scores = Player22.scores){
    div1.innerText ='Nobody wins, restart the game';
func1(); 

}else {
    div1.innerText =`${Player22.name} is the winner`;
}
}  
button4.addEventListener('click',func4);  
 
var button5 = document.getElementById('Restart');
function func5(element1){
    element1.innerText = 'End the Gun-fighting Game';
    element1.style.color = "red";
  
    func1();
}
button5.addEventListener('click',func5);  


