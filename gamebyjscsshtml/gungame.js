var button1 = document.getElementById('StartGame');
button1.addEventListener('click',func1);


/* button2.addEventListener('click',function(){
    //alert('nihao');
    //alert(`accurary=${math.random()}`);
        
}); */


var button3 = document.getElementById('Player2');
button3.addEventListener('click',func3);


var button4 = document.getElementById('Restart');
button4.addEventListener('click',func4);

var img = document.getElementById("img");
img.addEventListener('mouseover',function(){
    this.src="tree2.PNG"

})
img.addEventListener('mouseout',function(){
    this.src="tree1.PNG"

})

class Player {
    constructor(button, name, bullets, accuracy1, scores){
        this.button= button;
        this.name = name;
        this.bullets = bullets;
        this.accuracy1 = accuracy1;
       
        this.scores = scores;
        
    }
    accuracy2=Math.random();
    greet(greetingwords){
        alert('Hi' + greetingwords +'!')
    }
    start(){
        this.fighting = true;
        alert('fighting...')
    }

}
var Player11 = new Player(button1, "Jack", 10, 0.7, 0);
var Player22 = new Player(button2, "Jacob", 10, 0.7, 0 );

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

console.log(Player11.accuracy2);
console.log(Player11.accuracy1);

function func1(element){
    element.innerText = 'the Gun-fighting Game begins';
    element.style.color = "blue";
    alert('Welcome the Gun-fighting Game')
    prompt('your name and your age?')
    alert('Please click the Player1 button to start')
  
    
}

function func2(element){
    element.innerText = 'Player1 Turn';
    element.style.color = "blue";

    var prescores = 0;
    if (Player11.accuracy2 >= Player11.accuracy1){
        Player11.scores = prescores + 10;
        alert(`the  round, Player11 Scores is ${Player11.scores}`)
    }else{
        Player11.scores = prescores
        alert(`the ${i} round, Player11 Scores is ${Player11.scores}`)

    }

    }
    var button2 = document.getElementById('Player1');
    button2.addEventListener('click', func2);


    /* for (let i = 1; i<=Player11.bullets; i++) {
        prescores = Player11.scores;
        if (Player11.accuracy2 >= Player11.accuracy1){
            Player11.scores = prescores + 10;
            alert(`the ${i} round, Player11 Scores is ${Player11.scores}`)
        }else{
            Player11.scores = prescores
            alert(`the ${i} round, Player11 Scores is ${Player11.scores}`)

        }
        if (Player22.accuracy2 >= Player22.accuracy1){
            Player22.scores = prescores + 10;
            alert(`the ${i} round, Player22 Scores is ${Player22.scores}`)
        }else{
            Player22.scores = prescores
            alert(`the ${i} round, Player22 Scores is ${Player22.scores}`)

        }
        
    } */
    





function func3(){
    alert('Restart the Gun-fighting Game')
    prompt('You are awesome, and your name and age?' , '>=18?')
    

}




function func4(element){
    element.innerText = 'Restart the Gun-fighting Game';
    element.style.color = "red";
      
    prompt('You are awesome, and your name and age?' , '>=18?')
    


}


