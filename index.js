
// Create variables for the game state
let player1Score = 0
let player2Score = 0
let player1Turn = true

// Create variables to store references to the necessary DOM nodes
const player1DiceEl = document.getElementById("player1Dice")
const player2DiceEl = document.getElementById("player2Dice")
const player1ScoreboardEL = document.getElementById("player1Scoreboard")
const player2ScoreboardEL = document.getElementById("player2Scoreboard")
const messageEl = document.getElementById("message")
const rollBtnEl = document.getElementById("rollBtn")
const resetBtnEl = document.getElementById("resetBtn")

rollBtnEl.addEventListener("click", function () {
    let randomNumber = Math.floor(Math.random()*6)+1

    clearActive()
    if(player1Turn){
        player1Score += randomNumber
        player2DiceEl.classList.add("active")
        player1DiceEl.innerText = `${randomNumber}`
        player2DiceEl.innerText = "-"
        player1ScoreboardEL.innerText = player1Score
        messageEl.innerText = "Player 2 Turn"
    }
    else{
        player2Score += randomNumber
        player1DiceEl.classList.add("active")
        player2DiceEl.innerText = `${randomNumber}`
        player1DiceEl.innerText = "-"
        player2ScoreboardEL.innerText = player2Score
        messageEl.innerText = "Player 1 Turn"
    }

    // check if a player has won
    if(player1Score > 20 || player2Score > 20){
        if(player1Score > 20){
            messageEl.innerText = "Player 1 has won! "
            messageEl.style.color = "darkblue"
        }else
        {
            messageEl.innerText = "Player 2 has won! "
            messageEl.style.color = "darkblue"
        }
        rollBtnEl.style.display = "none"
        resetBtnEl.style.display = "block"
    }


    player1Turn = !player1Turn
})

resetBtnEl.addEventListener("click", function (){
    messageEl.textContent = "Player 1 Turn"
    player1ScoreboardEL.textContent = 0
    player2ScoreboardEL.textContent = 0
    player1DiceEl.textContent = '-'
    player2DiceEl.textContent = '-'
    player1Score = 0
    player2Score = 0
    player1Turn = true
    resetBtnEl.style.display = "none"
    rollBtnEl.style.display = "block"
    player2DiceEl.classList.remove("active")
    player1DiceEl.classList.add("active")
})

function clearActive() {
    player1DiceEl.classList.remove("active")
    player2DiceEl.classList.remove("active")
}


