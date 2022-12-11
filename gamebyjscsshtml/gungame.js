var div1= document.getElementById('div1');
var button1 = document.getElementById('StartGame');
button1.addEventListener('click',func1);
function func1(element){
    element.innerText  = 'the Gun-fighting Game begins';
    //div1.innerText =`Hi, ${playerName} Welcome to the Gun-fighting Game`;
    div1.innerText ="Hi, Welcome to the Gun-fighting Game";
}

class Player {
    constructor(button, name, bullets, accuracy, scores){
        this.button= button;
        this.name = name;
        this.bullets =bullets;
        this.accuracy = accuracy;
        this.scores = scores;   
    }
        greet(greetingwords){
        alert(greetingwords +'!');
    }
    start(){
        this.fighting = true;
        alert('fighting...');
    }

}
var Player11 = new Player(button1, "Jack", 10, 0.7, 0);
var Player22 = new Player(button2, "Jacob", 10, 0.7, 0 );

var button2 = document.getElementById('Player1');
var button3 = document.getElementById('Player2'); 
//button2.addEventListener('click', func2);
//button3.addEventListener('click', func3); 
for (var i = 1; i <= Player11.bullets; i++){
    function func2 (element) {       
        Player1HitRate = (Math.random()).toFixed(2); 
        console.log(Player1HitRate);      
        if (Player1HitRate >= Player11.accuracy){
            Player11.scores = Player11.scores+ 10;
            div1.innerText =`Yah! ${Player1HitRate} > 0.7  Player1 succeeded this round, Player1 TotalScores are ${Player11.scores}`;
            Player11.greet('Yah!')
        }else{
            Player11.scores = Player11.scores + 0;
            div1.innerText =`Gosh! ${Player1HitRate} < 0.7  Player1 missed this round, Player1 TotalScores are ${Player11.scores}`;
           
        }
        element.innerText = 'Player1 completed';
        var Player1Total = Player11.scores;
        console.log(Player1Total);
    }
    button2.addEventListener('click', func2);
   
    function func3(element){        
        Player2HitRate = (Math.random()).toFixed(2); 
        console.log(Player2HitRate);
        if (Player2HitRate >= Player22.accuracy){
            Player22.scores =Player22.scores  + 10;
            div1.innerText =`Wow! ${Player2HitRate} > 0.7  Player2 succeeded the this round, Player2 TotalScores are ${Player22.scores}`;
            Player11.greet('Yah!')
        }else{
            Player22.scores = Player22.scores + 0;
            div1.innerText =`What?! ${Player2HitRate} < 0.7  Player2 missed the this round, Player2 TotalScores are ${Player22.scores}`;
           
        }
        element.innerText = 'Player2 completed';
        var Player2Total = Player22.scores;
        console.log(Player2Total);     
        
    }
    button3.addEventListener('click', func3); 

    func4(Player11.scores,Player22.scores);   
}

var button4 = document.getElementById('CheckResult');
function func4() {
if (Player11.scores > Player22.scores){
    div1.innerText =`${Player11.name} is the winner`;
}else if (Player11.scores < Player22.scores){
    div1.innerText =`${Player22.name} is the winner`;
 
}else {
    div1.innerText ='NO one won the game, Welcome To The Gun Game again';   
    div1.innerText= "Welcome to The Gun Game";
}
}  
button4.addEventListener('click',func4); 

var button5 = document.getElementById('Restart');
function func5(element1){
    element1.innerText = 'End the Gun-fighting Game';
    div1.innerText= "End Fun Gun Game";
    div1.innerText= "Welcome to The Gun Game";
        
}
button5.addEventListener('click',func5);  

/* var button6 = document.getElementById('canvas');
button6.addEventListener('click',func6); 
function func6(){

} */

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
  /*    var Player11Total = ()=>{
            Player11Total = Player11.scores;
        };
        Player1Total.bind(window);   
        */
//alert(`Player1 missed the ${i} round, Player1 Scores is ${Player11.scores}`)
//element.style.webkitAnimationPlayState = "running";
//element.style.color = "blue";
//alert('Welcome to the Gun-fighting Game') 
//document.getElementById('StartGame').innerHTML="Welcome to the Gun-fighting Game";
//var div1= document.getElementById('div1');
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