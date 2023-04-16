let squares = document.querySelectorAll('.square');
let player = 'X';
let winner = null;

const winningCombinations = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
];

squares.forEach(function(square) {
	square.addEventListener('click', function() {
		if (square.innerHTML === '' && !winner) {
			square.innerHTML = player;
			square.classList.add(player.toLowerCase());
			checkForWinner();
			if (!winner) {
				player = player === 'X' ? 'O' : 'X';
			}
		}
	});
});

document.getElementById('restart').addEventListener('click', function() {
	squares.forEach(function(square) {
		square.innerHTML = '';
		square.classList.remove('x', 'o');
	});
	document.getElementById('message').innerHTML = '';
	winner = null;
	player = 'X';
});

function checkForWinner() {
	for (let i = 0; i < winningCombinations.length; i++) {
		const [a, b, c] = winningCombinations[i];
		if (squares[a].innerHTML !== '' && squares[a].innerHTML === squares[b].innerHTML && squares[b].innerHTML === squares[c].innerHTML) {
			winner = squares[a].innerHTML;
			document.getElementById('message').innerHTML = `${winner} gana!`;
			break;
		}
	}
	if (!winner && Array.from(squares).every(square => square.innerHTML !== '')) {
		document.getElementById('message').innerHTML = 'Empate!';
	}
}

