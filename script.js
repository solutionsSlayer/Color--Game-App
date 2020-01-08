var colors = generateRandomColors(6);
var squares = document.querySelectorAll('.square');
var colorDisplay = document.querySelector('#colorDisplay');
var newColors = document.querySelector('#newColors');
var reset = document.querySelector('#reset');
var container = document.querySelector('#container');
var easyBtn = document.querySelector('#easyBtn');
var hardBtn = document.querySelector('#hardBtn');
var h1 = document.querySelector('#h1');
var result = document.querySelector('#result');
var pickColor = pickedColor();
var modeDifficult = 6;

colorDisplay.textContent = "Find this color - " + pickedColor();
newColors.style.display = "flex";
reset.style.display = "none";

hardBtn.classList.add('selected');

for(var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickColor) {
            for(var i = 0; i < colors.length; i++) {
                squares[i].style.backgroundColor = pickColor;
            }
            result.textContent = "Bonne réponse !";
            h1.style.backgroundColor = pickColor;
            newColors.style.display = "none";
            reset.style.display = "flex";
        } else {
            this.style.backgroundColor = "rgb(56, 55, 55)";
            result.textContent = "Mauvaise case ..."; 
        }
    });
}

newColors.addEventListener("click", function(){
    colors = generateRandomColors(modeDifficult);
    pickColor = pickedColor();
    h1.style.backgroundColor = "rgb(56, 55, 55)";
    colorDisplay.textContent = "Find this color - " + pickedColor();
    changeColors();
});

reset.addEventListener("click", function(){
    reset.style.display = "none";
    newColors.style.display = "flex";
    result.textContent = "";
    colors = generateRandomColors(modeDifficult);
    pickColor = pickedColor();
    colorDisplay.textContent = "Find this color - " + pickedColor();
    h1.style.backgroundColor = "rgb(56, 55, 55)";
    changeColors();
});

easyBtn.addEventListener("click", function(){
    modeDifficult = 3;
    colors = generateRandomColors(modeDifficult);
    pickColor = pickedColor();
    h1.style.backgroundColor = "rgb(56, 55, 55)";
    colorDisplay.textContent = "Find this color - " + pickedColor();
    easyBtn.classList.add('selected');
    hardBtn.classList.remove('selected');
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        } 
    }
});

hardBtn.addEventListener("click", function(){
    modeDifficult = 6;
    colors = generateRandomColors(modeDifficult);
    pickColor = pickedColor();
    h1.style.backgroundColor = "rgb(56, 55, 55)";
    colorDisplay.textContent = "Find this color - " + pickedColor();
    easyBtn.classList.remove('selected');
    hardBtn.classList.add('selected');
    for(var i = 0; i < colors.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "inline-block";     
    }
});

 function generateRandomColors(num) {
    var colors = [];
    for(var i = 0; i < num; i++) {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);

        var color = "rgb(" +  r + ", " + g + ", " + b + ")";

        colors.push(color);
    }
    return colors;
 }

 function changeColors() {
    for(var i = 0; i < colors.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
 }

 function pickedColor() {
     var length = colors.length;
     var randomColor = Math.floor(Math.random() * length);
     var random = colors[randomColor];

     return random;
 }