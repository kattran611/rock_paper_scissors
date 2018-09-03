//var options = ['rock', 'paper', 'scissors']
var user,
    computer,
    result

var score = {win: 0,lose: 0, tie: 0}



function makeComputerSelection() {
  rdm = options[Math.floor(Math.random() * options.length)]
}

function setComputerChoice() {
  document.getElementById('computerselection').innerHTML = "The computer selected: " + rdm
}


var rock = getElementById('rock')
rock.addEventListener('click', function() {
  choice("rock")
  makeComputerSelection()
  setComputerSelection()
  playGame()
})

var paper = getElementById('paper')
paper.addEventListener('click', function() {
  choice("paper")
  makeComputerSelection()
  setComputerSelection()
  playGame()
})

var scissors = getElementById('scissors')
scissors.addEventListener('click', function() {
  choice("scissors")
  makeComputerSelection()
  setComputerSelection()
  playGame()
})
