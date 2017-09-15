$(document).ready(function() {
	initGrid(16);
	changeSize();
	randomizeColors();
	classicMode();
	

});

	function initGrid(numSquares) {

		clear();
		var container = $("#container");
		var area = numSquares*numSquares;
		var dimension = 600 / numSquares;		
		for(var i=0; i<area; i++){
			container.append("<div class='square'></div>");
		}
		var square = $(".square");
		square.width(dimension);
		square.height(dimension);
		square.mouseenter(function(){ 
			$(this).css("background","black");
		});

		clearButton(numSquares);
		
	}

	function clearButton(numSquares) {
		$("#clearButton").on("click", function(){
			initGrid(numSquares);
		});
		
	}

	function changeSize() {
		$("#changeSizeButton").on("click",function(){
			var numSquares=prompt("Enter the number of squares lengthwise you'd like:");
			initGrid(numSquares);
		});
	}

	function randomizeColors() {
		
		$("#randomizeButton").on("click",function() {
			$(".square").mouseenter(function() {
				var randR = Math.floor(Math.random()*256);
				var randG = Math.floor(Math.random()*256);
				var randB = Math.floor(Math.random()*256);
				$(this).css("background", "rgb(" + randR + "," + randG + "," + randB + ")");
			})
		});

		
	}

	function classicMode() {
		$("#classicButton").on("click",function() {
			$(".square").css("opacity","0");
			$(".square").mouseenter(function() {
				
				$(this).css("opacity", "+=" + 0.2);
			})
		});
	}

	function clear(){
		$("#container").empty();
	}





