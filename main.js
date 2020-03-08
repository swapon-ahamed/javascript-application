(function(){

	var numSquares = 6;
	var square = document.querySelectorAll(".square");
	var displayColor = document.querySelector('.displayColor');
	var displayMessage = document.querySelector('#message');
	var h1 = document.querySelector("h1");
	var resetBtn = document.getElementById('reset');
	var easyBtn = document.getElementById('easy');
	var hardBtn = document.getElementById('hard');
	var modeBtn = document.querySelectorAll('.mode');
	var colors = [];
	var pickedColor; 

	function init(){
		resetGame();
		for(var i = 0; i < square.length; i++ ){
			square[i].style.backgroundColor = colors[i];
			
			square[i].addEventListener('click', function(){
				var choosenColor = this.style.backgroundColor;
				// compare with picked color
				if(choosenColor === pickedColor){
					displayMessage.textContent = "Correct!";
					resetBtn.textContent = "Play Again";
					h1.style.backgroundColor = pickedColor;
					fillBox(pickedColor);

				}else{
					displayMessage.textContent = "Try again!";
					this.style.backgroundColor = "#232323";
				}
			}) 

		}

		for( var i  = 0; i< modeBtn.length; i++){

			modeBtn[i].addEventListener("click", function(){
				h1.style.backgroundColor = 'steelblue';
				displayMessage.textContent = "";
				easyBtn.classList.remove('selected');
				hardBtn.classList.remove('selected');
				this.classList.add('selected');

				numSquares = (this.textContent === 'Easy') ? 3 : 6;
				resetGame();
				for(var i = 0; i < square.length; i++ ){

					if(colors[i]){
						square[i].style.display = 'block';
						square[i].style.backgroundColor = colors[i];
					}else{
						square[i].style.display = 'none';
					}
					
				}

			});
		}

	}

	init();


	resetBtn.addEventListener("click", function(){
		// var selectedMode = document.getAttribute('selected');
		// console.log(selectedMode);
		displayMessage.textContent = '';
		resetBtn.textContent = "New Colors";
		resetGame();
		for(var i = 0; i < square.length; i++ ){
			square[i].style.backgroundColor = colors[i];
		}

	});


	function fillBox(pickedColor){
		for(var i = 0; i < square.length; i++ ){
			square[i].style.backgroundColor = pickedColor;
		}
	}

	function pickedRandomColor(){
		return Math.floor(Math.random() * colors.length);
	}

	function generateRandomColors(number){

		var colorsArr = [];
		for(var i = 0; i< number; i++ ){

			var r = Math.floor(Math.random() * 256 );
			var g = Math.floor(Math.random() * 256 );
			var b = Math.floor(Math.random() * 256 );
			//"rgb(255, 0, 0)",
			var randomColor = "rgb" + "(" + r + ", " + g + ", " + b + ")";
			colorsArr.push(randomColor);

		}
		return colorsArr;

	}

	function resetGame(){
		colors = generateRandomColors(numSquares);
		pickedColor = colors[pickedRandomColor()];
		displayColor.textContent = pickedColor;
	}
})();
