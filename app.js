let userScore=0;
let computerScore=0;
let dialogues=['one','two','three','four','five','six'];
let canUserPlay=true;
let canComputerPlay=false;
function getComputerChoice() {
    return Math.ceil(Math.random()*6);
}
function displayChoices(userChoice,computerChoice) {
    document.getElementById('t7').innerHTML=userChoice;
    document.getElementById('t10').innerHTML=computerChoice;
}
function runApp(userChoice) {
    var computerChoice=getComputerChoice();
    displayChoices(userChoice,computerChoice);
    if(canUserPlay) {
        if(computerChoice==userChoice) {
            document.getElementById('p1').innerHTML='Thats OUT !! Now its time to bowl and restrict a target of ' + userScore ;
            canUserPlay=false;
            canComputerPlay=true;
            document.getElementById('t11').innerHTML="";
        }
        else {
            userScore = eval(userScore) + eval(userChoice);
            document.getElementById('p1').innerHTML="Thats a " + dialogues[userChoice-1] + "....";
            document.getElementById('t11').innerHTML="*";
            document.getElementById('t12').innerHTML = userScore;
            document.getElementById('t14').innerHTML = computerScore;
        }
    }
    else if(canComputerPlay) {
        if(computerChoice==userChoice) {
            document.getElementById('p1').innerHTML="OUT !! You Won the match " ;
            canComputerPlay=false;
            document.getElementById('t13').innerHTML="";
        }
        else{
            computerScore=eval(computerChoice) + eval(computerScore);
            document.getElementById('p1').innerHTML="Thats a " + dialogues[userChoice-1] + "....";
            if(computerScore > userScore) { 
                document.getElementById('p1').innerHTML+=' Computer Won The match ';
                document.getElementById('t11').innerHTML="";
                canComputerPlay=false;
            }
            document.getElementById('t13').innerHTML="*";
            document.getElementById('t12').innerHTML = userScore;
            document.getElementById('t14').innerHTML = computerScore;
        }
    }
}
