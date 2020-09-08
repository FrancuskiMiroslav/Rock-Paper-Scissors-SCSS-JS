const choices = ['paper', 'rock', 'scissors'];
const buttons = Array.from(document.querySelectorAll('.button-choices'));
const scoreResult = document.querySelector('.score__result');

let score = 0;

function pickRandomChoice() {
	randomChoice = choices[Math.floor(Math.random() * choices.length)];

	return randomChoice;
}

buttons.forEach((button) => {
	button.addEventListener('click', (e) => {
		myChoice = e.currentTarget.getAttribute('data-choice');

		result();
	});
});

function result() {
	const computerChoice = pickRandomChoice();

	if (myChoice === 'rock' && myChoice === computerChoice) {
		updateScore(0);
		console.log('DRAW rezultat je nerešen');
	} else if (myChoice === 'paper' && myChoice === computerChoice) {
		updateScore(0);
		console.log('DRAW rezultat je nerešen');
	} else if (myChoice === 'scissors' && myChoice === computerChoice) {
		updateScore(0);
		console.log('DRAW rezultat je nerešen');
	} else if (myChoice === 'rock' && computerChoice === 'paper') {
		updateScore(-1);
		console.log('YOU LOSE paper beats rock');
	} else if (myChoice === 'rock' && computerChoice === 'scissors') {
		updateScore(1);
		console.log('YOU WIN rock beats scissors');
	} else if (myChoice === 'paper' && computerChoice === 'rock') {
		updateScore(1);
		console.log('YOU WIN paper beats rock');
	} else if (myChoice === 'paper' && computerChoice === 'scissors') {
		updateScore(-1);
		console.log('YOU LOSE scissors beat paper ');
	} else if (myChoice === 'scissors' && computerChoice === 'rock') {
		updateScore(-1);
		console.log('YOU LOSE rock beats scissors');
	} else if (myChoice === 'scissors' && computerChoice === 'paper') {
		updateScore(1);
		console.log('YOU WIN scissors beat paper ');
	}
}

function updateScore(value) {
	score += value;

	scoreResult.innerText = score;
}
