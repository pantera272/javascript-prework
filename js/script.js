function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

let randomFraction = Math.random();
let calculation = randomFraction * 3 + 1;
let roundNumber = Math.floor(calculation);

console.log('Wybór komputera: ' + roundNumber);

let computerMove = 'nie wybrano'

if (roundNumber == '1'){
	computerMove = 'papier';
} else if (roundNumber == '2'){
	computerMove = 'kamień';
} else if (roundNumber =='3'){
	computerMove = 'nożyce';
}

printMessage('Komputer zagrał ' +computerMove);