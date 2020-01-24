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
        }
        else {
            userScore = eval(userScore) + eval(userChoice);
            document.getElementById('p1').innerHTML="Thats a " + dialogues[userChoice-1] + "....";
            document.getElementById('p2').innerHTML = userScore;
            document.getElementById('p3').innerHTML = computerScore;
        }
    }
    else if(canComputerPlay) {
        if(computerChoice==userChoice) {
            document.getElementById('p1').innerHTML="OUT !! You Won the match " ;
            canComputerPlay=false;
        }
        else{
            computerScore=eval(computerChoice) + eval(computerScore);
            document.getElementById('p1').innerHTML="Thats a " + dialogues[userChoice-1] + "....";
            if(computerScore > userScore) { 
                document.getElementById('p1').innerHTML+=' Computer Won The match ';
                canComputerPlay=false;
            }
            document.getElementById('p2').innerHTML = userScore;
            document.getElementById('p3').innerHTML = computerScore;
        }
    }
}