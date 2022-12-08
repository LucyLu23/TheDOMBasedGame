/* const name = 'Josh Perez';
const element = <h1>Hello, { name }</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);
 */

const button1 = document.getElementById('StartGame');
button1.addEventListener('click',func1);

const mySpaceship1 = {
        'hull':20,
        'firepower':5,
        'accuracy':0.7
    }
    
const alienSpaceship1={
        'hull': Math.floor(Math.random()*4+3), //3-6  Math.floor(Math.random()*(max-min+1)+min);
        'firepower':Math.floor(Math.random()*3+2), //2-4
        'accuracy':(Math.floor(Math.random()*3+6))/10,//0.6-0.8
        'number':6,
    }

function func1() {
    const welcomewords1 = "Welcom to the Space Battle Game: mySpaceshipHull:20, firepower:5, accuracy:0.7; AlienSpaceshipHUll:3-6, firepower:2-4, accuracy:0.6-0.8,number:6";
    alert('Welcom to the Space Battle Game: mySpaceshipHull:20, firepower:5, accuracy:0.7; AlienSpaceshipHUll:3-6, firepower:2-4, accuracy:0.6-0.8,number:6');
    
    /* const style1 ={
        fontSize: 23 ,
        color: 'green'

    }
    const welcome1= <h1 style={style1} > {welcomewords1} </h1>;

    React.render(
        welcome1,
        

    )

}
    */ 
    
    var name1 = prompt("Enter your name");
    var age = prompt("Enter your age, need to be older than 18 ");
    if (name1 != null && age >=18) {
        alert("Hello! Welcome to the Space Battle Game  "+ name1);
        beginOrContinue();
    }else {
        alert("Hello! you are too young and not allowed to play this game, bye bye "+ name1);
        process.exit();
    }
};

function beginOrContinue(){
    var yourChoice = prompt('play the game? must input "yes" to start the game', 'yes');
    if (yourChoice ==="yes"){
        alert('Come On, Let Us Begin/Continue Our Fighting Adventure!');
        func2();                    
    }else{
        alert("you don't input yes, You are out of the game! Byebye ")
        process.exit();
}
};

function func2(){
    
    for(let i=1; i<=alienSpaceship.number; i++){
        var ourAttack= prompt(`my firepower: ${mySpaceship.firepower}`, 5);
        if (ourAttack==5){    
            var alienShipHullValue = Math.floor(Math.random()*4+3)-ourAttack;
            if (alienShipHullValue > 0){
                alert(`the Alian Spaceship ${i} got hit,but it is not destroyed, alienShipHullValue:${alienShipHullValue}, we need to keep fighting!`);
                alert('It is alienship turn to hit');
                
            }
           
            else if (alienShipHullValue < 0 || alienShipHullValue==0){
                alert(`Alien Spaceship ${i} has been destroyed, we won this round`)
                             
            } else{
                alert(`We missed attacking the Alien spaceship ${i} ! it is alienship turn to hit`);
                
            }               
        }
        else{alert('please input the right firepower,this one is not right one "5"!');
        process.exit();
        }

        var alienRandomAttack1= prompt(`Alienship ${i} attack. To start the NO.1 attack USS HelloWorld, you must input 1`);
        var alienRandomAttack = Math.floor(Math.random()*3+2);            
   
        if (i==6){
            break;
        }else{
            if (alienRandomAttack1==='1' ) {  
                var myShipHullValue = 20 - alienRandomAttack;        
                alert(`Our spaceship has been hit and our ship hull is ${myShipHullValue}, it is our turn to attack!`);
            }else if(alienRandomAttack){
                myShipHullValue -= alienRandomAttack;        
                alert(`Our spaceship has been hit and our ship hull is ${myShipHullValue}, it is our turn to attack!`);                              
            }else if(alienRandomAttack1.search('5') == 1){
                process.exit();
                
            }else{
                myShipHullValue = myShipHullValue;
                alert(`Alien spaceship missed hitting our spaceship, our ship hull is ${myShipHullValue}, and it our turn to attack!`)
    
            }

        }
   
            
    }
    if(myShipHullValue>0){
        alert('CONGRATULATIONS, WE WON THE GAME!')

    }else{
        alert('We lost the Game')
    }

    
    }