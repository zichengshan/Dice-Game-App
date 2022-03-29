
// Create variables for the game state
let player1Score = 0
let player2Score = 0
let player1Turn = true
let round = 2

// Create variables to store references to the necessary DOM nodes
const player1DiceEl = document.getElementById("player1Dice")
const player2DiceEl = document.getElementById("player2Dice")
const player1ScoreboardEL = document.getElementById("player1Scoreboard")
const player2ScoreboardEL = document.getElementById("player2Scoreboard")
const messageEl = document.getElementById("message")
const roundEl = document.getElementById("round")
const rollBtnEl = document.getElementById("rollBtn")
const resetBtnEl = document.getElementById("resetBtn")

rollBtnEl.addEventListener("click", function () {
    let randomNumber = Math.floor(Math.random()*6)+1
    roundEl.innerText = `Round ${Math.floor(round/2)}`
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

    round++

    // check if a player has won
    if(round == 6){
        if(player1Score > player2Score){
            messageEl.innerText = "Player 1 has won!"
            messageEl.style.color = "darkblue"
        }else
        {
            messageEl.innerText = "Player 2 has won!"
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
    round = 0
    player1Turn = true
    resetBtnEl.style.display = "none"
    rollBtnEl.style.display = "block"
    roundEl.innerText = "Round 1"
    player2DiceEl.classList.remove("active")
    player1DiceEl.classList.add("active")
})

function clearActive() {
    player1DiceEl.classList.remove("active")
    player2DiceEl.classList.remove("active")
}


