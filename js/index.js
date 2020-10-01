// Here you can access the colors variable
// have fun

// Randomly:
const randomColor =  document.querySelector('button');
const pallete = document.getElementById('pallete');
randomColor.addEventListener('click', function(){
    color = colors[Math.floor(Math.random() * colors.length-1)];
    pallete.style.backgroundColor = color;
    pallete.style.color = "white";
    inputColor.setAttribute('value', color);
});

// input value:
const input =  document.getElementById('color');
input.addEventListener('input', function(){
    pallete.style.backgroundColor = input.value;
});
 