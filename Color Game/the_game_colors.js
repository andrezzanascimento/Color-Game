// variables

var arrOfColors = [];
var selectedColor;

// DOM

var allSquares = document.querySelectorAll("#square");
var numOfSquares = allSquares.length;
var showSelectedColor = document.querySelector("#header2");
var showMessage = document.querySelector("#message");
var colorHeader = document.querySelector("#header");
var firstButton = document.querySelector('.double-function');
var lastButtons = document.querySelectorAll(".button");


// functions

function getColor() {

	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    
    return "RGB(" + r + ", " + g + ", " + b + ")"; 
    
}

function fillSquareColors() {

    for (var i = 0; i < numOfSquares; i++) {
 
        arrOfColors[i] = getColor();

        allSquares[i].style.backgroundColor = arrOfColors[i].toUpperCase();
       
    }

}

function clickSquares() {

    for (var i = 0; i < numOfSquares; i++) {

        allSquares[i].addEventListener("click", function() {
            
            if (this.style.backgroundColor.toUpperCase() === selectedColor) {

                showMessage.textContent = "CORRECT";

                for (var j = 0; j < numOfSquares; j++) {

                    allSquares[j].style.backgroundColor = selectedColor;

                }

                colorHeader.style.backgroundColor = selectedColor;
                firstButton.textContent = "PLAY AGAIN";

            } else {

                this.style.backgroundColor = "#232323";
                showMessage.textContent = "TRY AGAIN";
                
            }
        
        });

    }        

}

function clickFirstButton() {

    firstButton.addEventListener("click", function() {

        init();

    });

}

function clickLastButtons() {

    for (var i = 0; i < lastButtons.length; i++) {

        lastButtons[i].addEventListener("click", function() {

            for (var j = 0; j < lastButtons.length; j++) {

                lastButtons[j].classList.remove("first-selected");

            }

            this.classList.add("first-selected");
            
            if (this.textContent === "HARD") {

                numOfSquares = allSquares.length;                

            } else {

                numOfSquares = allSquares.length / 2; 

            }

            init();

        });

    }

}

function init() {

    fillSquareColors();
    selectedColor = arrOfColors[Math.floor(Math.random() * numOfSquares)];
    showSelectedColor.textContent = selectedColor;
    console.log(showSelectedColor);

    showMessage.textContent = "";

    colorHeader.style.backgroundColor = "#2C8E99";

    firstButton.textContent = "NEW COLORS";

    for (var i = 0; i < allSquares.length; i++) {

        if (i >= numOfSquares) {

            allSquares[i].style.display = "none";

        } else {

            allSquares[i].style.display = "block";

        }

    }
    

}

function main() {
 
    init();
    
    clickSquares();

    clickFirstButton();

    clickLastButtons();

}    

main();