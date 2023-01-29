const Computer = document.querySelector(".computer img");
const Player = document.querySelector(".player img");
var ComputerPoints = document.querySelector(".computerPoints");
var PlayerPoints = document.querySelector(".playerPoints");
const Options = document.querySelectorAll(".options button");
var playerValue=0;
function submit(){
    var username =document.getElementById('Inputer').value
    console.log(username)
    // var JsonUsername = JSON.stringify(username)
    // localStorage.setItem(JsonUsername)
}
function restart(){
    var username =document.getElementById('Inputer').value
    document.getElementById('username').innerHTML=username + ':'+PlayerPoints.innerHTML;
    ComputerPoints.innerHTML=0;
    PlayerPoints.innerHTML=0;
    username = " "
    Player.src = "./assets/images/stonePlayer.png"; 
    Computer.src = "./assets/images/stoneComputer.png";
}
function result(){
    var username =document.getElementById('Inputer').value
    document.getElementById('username').innerHTML=username + ':'+PlayerPoints.innerHTML;
    var data = {name: username, highscore: PlayerPoints.innerHTML}
    // console.log(data)
    // console.log(username)
    var jsonData = JSON.stringify(data)
    // console.log(jsonData)

    localStorage.setItem("highscore", jsonData)

    //console.log(localStorage.getItem("highscore"))
    downloadFile();
}

function downloadFile(){
    var link = document.createElement('a');
    var HighScore = localStorage.getItem("highscore");
    const file = new Blob([HighScore], {type:"text/plain"});
    link.href = URL.createObjectURL(file);
    link.download = "Highscore.txt";
    link.click();
}
Options.forEach((Option) => {
    Option.addEventListener("click", () => {
        Computer.classList.add("shakeComputer");
        Player.classList.add("shakePlayer");
        

        setTimeout(() => {
            Computer.classList.remove("shakeComputer");
            Player.classList.remove("shakePlayer");

            Player.src = "./assets/images/" + Option.innerHTML + "Player.png";

            //console.log(Option.innerHTML) --testing purposes :]

            const choice = ["STONE", "PAPER", "SCISSORS"]
            let ArrayNo = Math.floor(Math.random() * choice.length)
            let ComputerChoice = choice[ArrayNo];

            Computer.src = "./assets/images/" + ComputerChoice + "Computer.png" // Wierd

            var cPoints = parseInt(ComputerPoints.innerHTML)
            var pPoints = parseInt(PlayerPoints.innerHTML);

            if (Option.innerHTML === "STONE") {
                if (ComputerChoice === "PAPER")
                ComputerPoints.innerHTML = cPoints + 1;
                else if (ComputerChoice === "SCISSORS")
                PlayerPoints.innerHTML = pPoints + 1;
            } else if (Option.innerHTML === "PAPER") {
                if (ComputerChoice === "SCISSORS")
                ComputerPoints.innerHTML = cPoints + 1;
                else if (ComputerChoice === "STONE")
                PlayerPoints.innerHTML = pPoints + 1;
            } else {
                if (ComputerChoice === "STONE")
                ComputerPoints.innerHTML = cPoints + 1;
                else if (ComputerChoice === "PAPER")
                PlayerPoints.innerHTML = pPoints + 1;
            }
        }, 500) //refreshing for the button press since you have reload any other else after you already clicked one.
    })
})