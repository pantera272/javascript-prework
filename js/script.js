{
function printMessage(msg){
	const div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

const getMoveName = function(argMoveId)
{
	if (argMoveId == '1'){
        return 'papier';
    } else if (argMoveId == '2'){
        return 'kamień';
    } else if (argMoveId =='3'){
        return 'nożyce';
    }
	
	printMessage('Nie znam takiego ruchu.');
	return 'nieznany ruch';
}

const displayResult = function(argComputerMove, argPlayerMove)
{
	if (argPlayerMove != 'nieznany ruch'){
		if ((argComputerMove == 'papier' && argPlayerMove == 'papier') || (argComputerMove == 'kamień' && argPlayerMove == 'kamień') || (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce')){
			printMessage('Remis!');	//remis
		} else if ((argComputerMove == 'papier' && argPlayerMove == 'kamień') || (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') || (argComputerMove == 'nożyce' && argPlayerMove == 'papier')) {
			printMessage('Komputer wygrywa!');
		} else {
			printMessage("Wygrałeś!");
		}
	} else {
		printMessage('Gracz nie zagrał');
	}
}

const playGame = function(playerClic)
{
	clearMessages();
    const randomFraction = Math.random();
    const calculation = randomFraction * 3 + 1;
    const roundNumber = Math.floor(calculation);

    console.log('Wybór komputera: ' + roundNumber);

    const computerMove = getMoveName(roundNumber);

    printMessage('Komputer zagrał ' + computerMove);

    //wybor gracza
    const playerInput = playerClic;
    console.log('Gracz wpisał ' + playerInput);

    const playerMove = getMoveName(playerInput);

    printMessage('Wybrałeś ' + playerMove);

    displayResult(computerMove, playerMove);
}

document.getElementById('papier').addEventListener('click', function(){playGame(1);});
document.getElementById('kamien').addEventListener('click', function(){playGame(2);});
document.getElementById('nozyce').addEventListener('click', function(){playGame(3);});
}
