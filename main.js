var player = 'cross';
var clickCount = 0;

//game starting - main block

for(let i=0; i<9; i++)
{
	let btnClicked = document.querySelectorAll('.btn')[i];
	btnClicked.addEventListener('click',function () {
		
		mark(btnClicked);
		if(win() === 'x')
		{
			document.querySelector('#title').innerText = 'X Wins!!';
			setTimeout(resetting, 2000);
		}
		if(win() === 'o')
		{
			document.querySelector('#title').innerText = 'O Wins!!';
			setTimeout(resetting, 2000);
		}
		if(win() === 'd' && clickCount===9)
		{
			document.querySelector('#title').innerText = 'Draw!!';
			setTimeout(resetting, 2000);
		}
	});
}


//changing player
function changePlayer()
{
	if(player === 'cross')
		player = 'circle';
	else if(player === 'circle')
		player = 'cross';
}


//marking position
function mark(btnClicked)
{

	if(btnClicked.classList.length === 1)
	{
		btnClicked.classList.add(player);
		clickCount++;
		changePlayer();
	}
	else{
		alert("Can't Mark here. Choose Another Position");
	}
}

//checking win
function win()
{
	let btn = [];
	for(let i=0; i<9; i++)
		btn[i] = document.querySelector('#btn' + (i+1)).classList[1];

	//x-wins
	if(btn[0]==='cross'&&btn[1]==='cross'&&btn[2]==='cross')
		return 'x';
	else if(btn[3]==='cross'&&btn[4]==='cross'&&btn[5]==='cross')
		return 'x';
	else if(btn[6]==='cross'&&btn[7]==='cross'&&btn[8]==='cross')
		return 'x';

	else if(btn[0]==='cross'&&btn[3]==='cross'&&btn[6]==='cross')
		return 'x';
	else if(btn[1]==='cross'&&btn[4]==='cross'&&btn[7]==='cross')
		return 'x';
	else if(btn[2]==='cross'&&btn[5]==='cross'&&btn[8]==='cross')
		return 'x';

	else if(btn[0]==='cross'&&btn[4]==='cross'&&btn[8]==='cross')
		return 'x';
	else if(btn[2]==='cross'&&btn[4]==='cross'&&btn[6]==='cross')
		return 'x';

	//o-wins
	else if(btn[0]==='circle'&&btn[1]==='circle'&&btn[2]==='circle')
		return 'o';
	else if(btn[3]==='circle'&&btn[4]==='circle'&&btn[5]==='circle')
		return 'o';
	else if(btn[6]==='circle'&&btn[7]==='circle'&&btn[8]==='circle')
		return 'o';

	else if(btn[0]==='circle'&&btn[3]==='circle'&&btn[6]==='circle')
		return 'o';
	else if(btn[1]==='circle'&&btn[4]==='circle'&&btn[7]==='circle')
		return 'o';
	else if(btn[2]==='circle'&&btn[5]==='circle'&&btn[8]==='circle')
		return 'o';

	else if(btn[0]==='circle'&&btn[4]==='circle'&&btn[8]==='circle')
		return 'o';
	else if(btn[2]==='circle'&&btn[4]==='circle'&&btn[6]==='circle')
		return 'o';

	//draw
	else
		return 'd';
}

//reseting the game
var reset = document.querySelector('.reset');
reset.addEventListener('click', function() {
	resetting();
});

function resetting()
{
	clickCount = 0;
	for (let i = 0; i <9; i++) {
		document.querySelectorAll('.btn')[i].classList.remove("cross");
		document.querySelectorAll('.btn')[i].classList.remove("circle");
	}
	document.querySelector('#title').innerText = 'Tic-Tac-Toe';
}