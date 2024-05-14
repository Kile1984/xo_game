var wrapp = document.getElementById("wrapp");
var startBtn = document.getElementById("startBtn");
var newGameBtn = document.getElementById("newGameBtn");
var box = document.getElementsByClassName("box");
var xo = "O";
var boxes = document.getElementsByClassName("box");
var player1 = document.getElementById("playerX");
var player2 = document.getElementById("playerO");
var labelX = document.getElementById("labelX");
var labelO = document.getElementById("labelO");
var player1Score = 0;
var player2Score = 0;
var counter = 0;

newGameBtn.style.visibility = "hidden";

startBtn.addEventListener("click", startGameFn);
newGameBtn.addEventListener("click", newGameFn);


for ( let i=0; i<9; i++){
	var newDiv = document.createElement("div");
	newDiv.className = "box";
	newDiv.id = "box" + i;
	wrapp.appendChild(newDiv);
}

function startGameFn(){

	if ( player1.value != "" && player2.value != "" ){

		startBtn.style.display = "none";
		player1.style.display = "none";
		player2.style.display = "none";
		labelX.innerHTML = player1.value + " - " + player1Score;
		labelO.innerHTML = player2.value + " - " + player2Score;

		for ( let i=0; i<box.length; i++ ){
			box[i].style.color = "black";
			box[i].addEventListener("click", boxFn);
		};

		function boxFn(){
			counter ++;
			console.log(counter);
			if ( xo == "O"){
				xo = "X";
			}else{
				xo = "O";
			};
			this.innerHTML = xo;
			this.removeEventListener('click', boxFn);
			checkLine(xo);
		}

		function checkLine(xo){
			score(boxes[0], boxes[1], boxes[2]);
			score(boxes[3], boxes[4], boxes[5]);
			score(boxes[6], boxes[7], boxes[8]);
			score(boxes[0], boxes[3], boxes[6]);
			score(boxes[1], boxes[4], boxes[7]);
			score(boxes[2], boxes[5], boxes[8]);
			score(boxes[0], boxes[4], boxes[8]);
			score(boxes[2], boxes[4], boxes[6]);
		}

	}else{
		alert("Popunite ispravno polja!");
	};

	function score(box1, box2, box3){
		if ( (box1.innerHTML != "" && box1.innerHTML == box2.innerHTML) && (box1.innerHTML == box3.innerHTML ) ){
			colorBoxes(box1, box2, box3);
			newGameBtn.style.visibility = "visible";
			if ( xo == "X"){
				player1Score++;
			}else{
				player2Score++;
			};
			removeClicks();
		};
		for ( let i=0; i<9; i++ ){
			if(boxes[i].style.color == "black" && counter == 9 && boxes[i].style.color != "red"){
				newGameBtn.style.visibility = "visible";
			};
		};
	}

	function colorBoxes(arg1, arg2, arg3){
		arg1.style.color = "red";
		arg2.style.color = "red";
		arg3.style.color = "red";
	}

	function removeClicks(){
		for ( let i=0; i<box.length; i++ ){
			box[i].removeEventListener("click", boxFn);
		};
	}

} //end start game fn

function newGameFn(){
	localStorage.setItem("Player 1 score", JSON.stringify(player1Score))
	localStorage.setItem("Player 2 score", JSON.stringify(player2Score))		
	counter = 0;
	for ( let i=0; i<box.length; i++ ){
		box[i].innerHTML = "";
	};
	newGameBtn.style.visibility = "hidden";
	startGameFn();
}












// if ( (boxes[0].innerHTML != "" && boxes[0].innerHTML == boxes[1].innerHTML) && (boxes[0].innerHTML == boxes[2].innerHTML ) ){
			// 	console.log(xo + " is win");
			// 	colorBoxes(box[0], box[1], box[2]);
			// 	newGameBtn.style.display = "block";
			// 	removeClicks();
			// }else if( (boxes[3].innerHTML != "" && boxes[3].innerHTML == boxes[4].innerHTML) && (boxes[3].innerHTML == boxes[5].innerHTML ) ){
			// 	console.log(xo + " is win");
			// 	colorBoxes(box[3], box[4], box[5]);
			// 	newGameBtn.style.display = "block";
			// 	removeClicks();
			// }else if( (boxes[6].innerHTML != "" && boxes[6].innerHTML == boxes[7].innerHTML) && (boxes[6].innerHTML == boxes[8].innerHTML ) ){
			// 	console.log(xo + " is win");
			// 	colorBoxes(box[6], box[7], box[8]);
			// 	newGameBtn.style.display = "block";
			// 	removeClicks();
			// }else if( (boxes[0].innerHTML != "" && boxes[0].innerHTML == boxes[3].innerHTML) && (boxes[0].innerHTML == boxes[6].innerHTML ) ){
			// 	console.log(xo + " is win");
			// 	colorBoxes(box[0], box[3], box[6]);
			// 	newGameBtn.style.display = "block";
			// 	removeClicks();
			// }else if( (boxes[1].innerHTML != "" && boxes[1].innerHTML == boxes[4].innerHTML) && (boxes[1].innerHTML == boxes[7].innerHTML ) ){
			// 	console.log(xo + " is win");
			// 	colorBoxes(box[1], box[4], box[7]);
			// 	newGameBtn.style.display = "block";
			// 	removeClicks();
			// }else if( (boxes[2].innerHTML != "" && boxes[2].innerHTML == boxes[5].innerHTML) && (boxes[2].innerHTML == boxes[8].innerHTML ) ){
			// 	console.log(xo + " is win");
			// 	colorBoxes(box[2], box[5], box[8]);
			// 	newGameBtn.style.display = "block";
			// 	removeClicks();
			// }else if( (boxes[0].innerHTML != "" && boxes[0].innerHTML == boxes[4].innerHTML) && (boxes[0].innerHTML == boxes[8].innerHTML ) ){
			// 	console.log(xo + " is win");
			// 	colorBoxes(box[0], box[4], box[8]);
			// 	newGameBtn.style.display = "block";
			// 	removeClicks();
			// }else if( (boxes[2].innerHTML != "" && boxes[2].innerHTML == boxes[4].innerHTML) && (boxes[2].innerHTML == boxes[6].innerHTML ) ){
			// 	console.log(xo + " is win");
			// 	colorBoxes(box[2], box[4], box[6]);
			// 	newGameBtn.style.display = "block";
			// 	removeClicks();
			// }else {
			// 	// newGameBtn.style.display = "none";
			// 	console.log("aaaa")
			// };