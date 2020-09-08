const choices = ['paper', 'rock', 'scissors'];
const buttons = Array.from(document.querySelectorAll('.button-choices'));
const scoreResult = document.querySelector('.score__result');
const resultBox = document.getElementById('result-box');
const choicesBox = document.getElementById('choices');
const scoreBox = document.getElementById('score-box');

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
	let resultMessage = '';

	if (myChoice === 'rock' && myChoice === computerChoice) {
		updateScore(0);
		resultMessage = 'draw';
		console.log('DRAW rezultat je nerešen');
	} else if (myChoice === 'paper' && myChoice === computerChoice) {
		updateScore(0);
		resultMessage = 'draw';
		console.log('DRAW rezultat je nerešen');
	} else if (myChoice === 'scissors' && myChoice === computerChoice) {
		updateScore(0);
		resultMessage = 'draw';
		console.log('DRAW rezultat je nerešen');
	} else if (myChoice === 'rock' && computerChoice === 'paper') {
		updateScore(-1);
		resultMessage = 'lose';
		console.log('YOU LOSE paper beats rock');
	} else if (myChoice === 'rock' && computerChoice === 'scissors') {
		updateScore(1);
		resultMessage = 'win';
		console.log('YOU WIN rock beats scissors');
	} else if (myChoice === 'paper' && computerChoice === 'rock') {
		updateScore(1);
		resultMessage = 'win';
		console.log('YOU WIN paper beats rock');
	} else if (myChoice === 'paper' && computerChoice === 'scissors') {
		updateScore(-1);
		resultMessage = 'lose';
		console.log('YOU LOSE scissors beat paper ');
	} else if (myChoice === 'scissors' && computerChoice === 'rock') {
		updateScore(-1);
		resultMessage = 'lose';
		console.log('YOU LOSE rock beats scissors');
	} else if (myChoice === 'scissors' && computerChoice === 'paper') {
		updateScore(1);
		resultMessage = 'win';
		console.log('YOU WIN scissors beat paper ');
	}

	let resultContainer = document.createElement('div');
	resultContainer.classList.add('result-box');
	resultContainer.innerHTML = `
				<div class="result-box__picked my-pick">
					<h3 class="result-box__title">You picked</h3>
					<button class="${myChoice} button-choices ${resultMessage}">
						<span class="inner-circle">
							<img
								src="./assets/images/icon-${myChoice}.svg"
								alt=""
								class="svg"
								alt="paper"
							/>
						</span>
					</button>
				</div>

				<div class="winner">
					<h2 class="winner__title">
					 You <span id="winner-result">${resultMessage}</span>	
					</h2>

					<button class="winner__button button" id="reset">Play Again</button>
				</div>

				<div class="result-box__picked computer-pick">
					<h3 class="result-box__title">Computer picked</h3>
					<button class="${computerChoice} button-choices ${
		resultMessage === 'lose' ? 'win' : ''
	} ">
						<span class="inner-circle">
							<img
								src="./assets/images/icon-${computerChoice}.svg"
								alt=""
								class="svg"
								alt="scissors"
							/>
						</span>
					</button>
				</div>
		`;

	scoreBox.insertAdjacentElement('afterend', resultContainer);
	choicesBox.style.display = 'none';

	const resetBtn = document.getElementById('reset');

	resetBtn.addEventListener('click', (e) => {
		choicesBox.style.display = 'flex';
		resultContainer.remove();
	});
}

function updateScore(value) {
	score += value;

	if (score < 0) {
		score = 0;
	}

	scoreResult.innerText = score;
}

////// modal popup
const rules = document.querySelector('.rules');
const modalContainer = document.getElementById('modal-container');
const modalClose = document.getElementById('modal-close');

rules.addEventListener('click', (e) => {
	modalContainer.classList.add('show');
});

modalClose.addEventListener('click', (e) => {
	modalContainer.classList.remove('show');
});
