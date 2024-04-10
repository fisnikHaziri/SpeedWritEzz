import txt from './textFile.js'

var cursor = document.getElementById('cursor') //costom cursor
document.addEventListener('mousemove', (event) => {
	var x = event.clientX
	var y = event.clientY
	cursor.style.left = x + 'px'
	cursor.style.top = y + 'px'
})
document.addEventListener('click', (event) => {
	cursor.style.backgroundColor = 'whitesmoke'
	setTimeout(() => {
		cursor.style.backgroundColor = 'transparent'
	}, 150)
}) //Cursor events end

var mainHeadder = document.getElementById('mainHeadder') //WritEzzz
var playAgain = document.getElementById('playAgain') //Play again button from the endgame screen

var infoBox = document.getElementById('preRun') //Initial info on game
var guide = document.getElementById('keyPressInf') //How to start the game
var endGame = document.getElementById('endGame') //End game section

var timer = document.getElementById('clock') //Timer
var mistakes = document.getElementById('misCounter') //Mistake counter
var mistakesDisplay = document.getElementById('misPressedList')

var textBox = document.getElementById('theText') //Where the sample text is actualy presented
var theActualText = []
var gameStart = false
var gameEnd = false
var userInput = []

var wrongInputs = []

var spanList
var i = 0
var time = 0

var onBreak = false

playAgain.addEventListener('click', () => {
	restart()
})

document.addEventListener('keypress', (event) => {
	if (gameStart && userInput.length < theActualText.length) {
		userInput.push(event.key)
	}
	!gameStart ? start() : gameLogic(spanList, event.key)
}) //keyboard listener

function counter() {
	var clock = setInterval(function () {
		timer.innerHTML = time
		time++
		gameEnd ? clearInterval(clock) : null
	}, 1000)
}

function start() {
	theActualText = txt[Math.floor(Math.random() * 20)][0] //Randomly selected text from textFile.js
	gameStart = true
	document.body.style.backgroundColor = '#6b5c83'
	infoBox.style.display = 'none'
	guide.style.display = 'none'
	cursor.classList.add('glow')
	setTimeout(() => {
		mainHeadder.classList.remove('headderAnimation')
		document.getElementById('textArena').style.display = 'block'
	}, 200)
	if (textBox.innerHTML == '') {
		;[...theActualText].forEach((letter) => {
			if (letter == ' ') {
				textBox.innerHTML += `<span style="display: inline-block; width: 10.5px; height: 25px">${letter}</span>`
			} else {
				textBox.innerHTML += `<span class='dimed'>${letter}</span>`
			}
		})
	} //Builds the whole text in seperate spans so i can style it
	spanList = document.querySelectorAll('span') //returns a list of all the spans
	counter()
} //game handler

document.addEventListener('keydown', (event) => {
	undo(event.key, spanList)
})

function gameLogic(spans, input) {
	if (!onBreak) {
		if (spans[i].innerHTML == ' ' && input != ' ') {
			spans[i].style.opacity = 0.2
			spans[i].style.backgroundColor = 'rgba(255, 0, 0)'
		}
		if (spans[i].innerHTML == userInput[i]) {
			spans[i].style.color = '#dcdde1'
			spans[i].style.opacity = 1 //This bit changes the style!
		} else {
			wrongInputs.push(userInput[i])
			mistakes.innerText = wrongInputs.length
			spans[i].style.color = 'red'
		}
		i++
		if (wrongInputs.length > 25) {
			mistakes.style.color = '#801818'
		} else if (wrongInputs.length > 10) {
			mistakes.style.color = '#B22222'
		} else if (wrongInputs.length > 5) {
			mistakes.style.color = '#FFEE88'
		}
		if (
			userInput.length == theActualText.length &&
			userInput.join('') == theActualText
		) {
			onBreak = true
			setTimeout(() => {
				document.getElementById('textArena').style.display = 'none'
				mainHeadder.style.display = 'none'
				document.body.style.backgroundColor = 'indianred'
				endGame.style.display = 'block'
			}, 250)
			gameEnd = true
			document.getElementById('timerDisplay').innerText += time
			document.getElementById('mistakesDisplay').innerText += wrongInputs.length
			let counter = 0
			wrongInputs.forEach((mistake) => {
				mistakesDisplay.innerHTML += `${mistake}&nbsp,&nbsp`
				if (counter == 10) {
					mistakesDisplay.innerHTML += '<br />'
					counter = 0
				}
				counter++
			})
			console.log(wrongInputs)
		} //Game ending sequence handler
	}
}

function undo(key, span) {
	if (key == 'Backspace' && userInput.length > 0) {
		userInput.pop()
		if (i >= 0) {
			i--
			if (span[i].innerHTML == ' ') {
				span[i].style.backgroundColor = 'transparent'
			}
			span[i].style.opacity = 0.2
			span[i].style.color = '#dcdde1'
		}
	}
}

function restart() {
	onBreak = false
	theActualText = []
	gameStart = false
	gameEnd = false
	userInput = []
	wrongInputs = []

	i = 0
	time = 0
	textBox.innerText = null
	mistakes.innerText = 0
	mistakes.style.color = '#26a96c'

	setTimeout(() => {
		mistakesDisplay.innerHTML = ''
		document.body.style.backgroundColor = '#4083b7'
		endGame.style.display = 'none'
		infoBox.style.display = 'flex'
		guide.style.display = 'block'
		mainHeadder.style.display = 'block'
		mainHeadder.classList.add('headderAnimation')
		document.getElementById('timerDisplay').innerText = 'Time: '
		document.getElementById('mistakesDisplay').innerText = 'Mistakes: '
	})
}
