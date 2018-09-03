var options = ['rock', 'paper', 'scissors']
var user
var computer
var outcome
var rand


var score = {win: 0,lose: 0, tie: 0}

var option = document.getElementById(option)



function makeComputerSelection() {
  rand = options[Math.floor(Math.random() * options.length)]
}

function setComputerSelection() {
  document.getElementById('computerSelection').innerHTML = "The computer selected: " + rand
}


var rock = document.getElementById("rock");
rock.addEventListener('click', function() {
  makeSelection("rock")
  makeComputerSelection()
  setComputerSelection()
  var gameResult = startGame()
  result(gameResult)
})

var paper = document.getElementById('paper')
paper.addEventListener('click', function() {
  makeSelection("paper")
  makeComputerSelection()
  setComputerSelection()
  var gameResult = startGame()
  result(gameResult)
})

var scissors = document.getElementById('scissors')
scissors.addEventListener('click', function() {
  makeSelection("scissors")
  makeComputerSelection()
  setComputerSelection()
  var gameResult = startGame()
  result(gameResult)
})


function makeSelection(choice) {
  playerSelection = choice
  document.getElementById('userSelection').innerHTML = "You selected: " + playerSelection
}


function result(gameResult) {
  switch(gameResult) {
    case 'tie':
    score.tie++;
      document.getElementById('ties').innerHTML = 'tie ' + score.tie
      break
    case 'you lose':
    score.lose++
      document.getElementById('losses').innerHTML = 'you lose ' + score.lose
      break
    case 'you win':
    score.win++
      document.getElementById('wins').innerHTML = 'you win ' + score.win
  }

}


function startGame() {
  switch(playerSelection) {
    case 'rock':
      if ('rock' == rand)
        return 'tie'
      if ('paper' == rand)
        return 'you lose'
      if ('scissors' == rand)
        return 'you win'
    case 'paper':
      if ('paper' == rand)
        return 'you tie'
      if ('scissors' == rand)
        return 'you lose'
      if ('rock' == rand)
        return 'you win'
    case 'scissors':
      if('scissors' == rand)
        return 'tie'
      if ('paper' == rand)
        return 'you win'
      if ('rock' == rand)
        return 'you lose'

  }
}
