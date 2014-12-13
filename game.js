/*//with id
function cubeClicked(id){
	document.getElementById('id').innerHTML = 'X';
}*/

/*//with addEventListener
document.getElementById('0').addEventListener('click', function(){
	document.getElementById('0').innerHTML = 'X';
});
document.getElementById('1').addEventListener('click', function(){
	document.getElementById('1').innerHTML = 'X';
});
document.getElementById('2').addEventListener('click', function(){
	document.getElementById('2').innerHTML = 'X';
});
document.getElementById('3').addEventListener('click', function(){
	document.getElementById('3').innerHTML = 'X';
});
document.getElementById('4').addEventListener('click', function(){
	document.getElementById('4').innerHTML = 'X';
});
document.getElementById('5').addEventListener('click', function(){
	document.getElementById('5').innerHTML = 'X';
});
document.getElementById('6').addEventListener('click', function(){
	document.getElementById('7').innerHTML = 'X';
});
document.getElementById('8').addEventListener('click', function(){
	document.getElementById('8').innerHTML = 'X';
});
document.getElementById('9').addEventListener('click', function(){
	document.getElementById('9').innerHTML = 'X';
});*/


//using class with combination of id without click handler
var cubeClass = document.getElementsByClassName('cube');
var resetClass = document.getElementsByClassName('resetButton');

function _innerHtml(attr){
	return document.getElementById(attr).innerHTML;
};

var isCubeLeft = function(){
	var result = false;
	for(var i = 0; i<cubeClass.length; i++){
		var val = cubeClass[i].getAttribute("id");
		if(document.getElementById(val).innerHTML == ''){
			result = true;
			break;
		}
	}
	return result;
};

var isFirstPlayerChance = true;
var isGameOver = false;

var resetClickHandler = function(){
	isFirstPlayerChance = true;
	isGameOver = false;
	for(var i = 0; i<cubeClass.length; i++){
		var val = cubeClass[i].getAttribute("id");
		document.getElementById(val).innerHTML = '';
	}
};



var cubeClickHandler = function(){
	var attr = this.getAttribute("id");
	if(document.getElementById(attr).innerHTML == '' && !isGameOver){
		var chance = 'X';
		isFirstPlayerChance ? chance = 'X' : chance = '0';
		isFirstPlayerChance = !isFirstPlayerChance;
		document.getElementById(attr).innerHTML = chance;

		//conditions
		if(_innerHtml('0') == chance && _innerHtml('1') == chance && _innerHtml('2') == chance){
			isGameOver = true;
		}else if(_innerHtml('3') == chance && _innerHtml('4') == chance && _innerHtml('5') == chance){
			isGameOver = true;
		}else if(_innerHtml('6') == chance && _innerHtml('7') == chance && _innerHtml('8') == chance){
			isGameOver = true;
		}else if(_innerHtml('0') == chance && _innerHtml('3') == chance && _innerHtml('6') == chance){
			isGameOver = true;
		}else if(_innerHtml('1') == chance && _innerHtml('4') == chance && _innerHtml('7') == chance){
			isGameOver = true;
		}else if(_innerHtml('2') == chance && _innerHtml('5') == chance && _innerHtml('8') == chance){
			isGameOver = true;
		}else if(_innerHtml('0') == chance && _innerHtml('4') == chance && _innerHtml('8') == chance){
			isGameOver = true;
		}else if(_innerHtml('2') == chance && _innerHtml('4') == chance && _innerHtml('6') == chance){
			isGameOver = true;
		}

		if(isGameOver){
			alert("Player " + chance + " Won");
		}else if(!isCubeLeft()){
			isGameOver = true;
			alert("Game Draw");
		}
	}



};

for(var i = 0; i<cubeClass.length; i++){
	cubeClass[i].addEventListener('click', cubeClickHandler, false);
};

resetClass[0].addEventListener('click', resetClickHandler, false);

