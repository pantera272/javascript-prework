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

//wybor gracza
let playerInput = prompt('1 Papier, 2 Kamień, 3 Nożyce');
console.log('Gracz wpisał' + playerInput);

let playerMove = 'nieznany ruch';

if (playerInput == '1'){
	playerMove = 'papier';
} else if (playerInput == '2'){
	playerMove = 'kamień';
} else if (playerInput =='3'){
	playerMove = 'nożyce';
}

printMessage('Wybrałeś ' + playerMove);

//wynik
if (playerMove != 'nieznany ruch'){
	if ((computerMove == 'papier' && playerMove == 'papier') || (computerMove == 'kamień' && playerMove == 'kamień') || (computerMove == 'nożyce' && playerMove == 'nożyce')){
		printMessage('Remis!');	//remis
	} else if ((computerMove == 'papier' && playerMove == 'kamień') || (computerMove == 'kamień' && playerMove == 'nożyce') || (computerMove == 'nożyce' && playerMove == 'papier')) {
		printMessage('Komputer wygrywa!');
	} else {
		printMessage("Wygrałeś!");
	}
} else {
	printMessage('Gracz nie zagrał');
}