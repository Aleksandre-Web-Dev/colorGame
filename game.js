let color = document.querySelectorAll(".game-body-color");
let generatedColor = document.getElementById("generated-color");
let reset  = document.getElementById("reset");
generatedColor.innerHTML = randomRGB();
checkStr = generatedColor.innerHTML.toLowerCase().replace(/,/g, ", ");
let generatedText =  document.getElementById("generated-text");
let generatedSubText =  document.getElementById("generated-sub-text");
let gameHeader = document.getElementById("game-header");
 
const arr = [];



for(let i=0;i<color.length;i++){
    color[i].style.backgroundColor = randomRGB();
    arr.push(color[i]);
    
    arr[i].addEventListener("click",function checkGuess(e){
        console.log(e.target.style.backgroundColor);
        if(e.target.style.backgroundColor==checkStr){
           console.log("true");
           generatedText.innerHTML = "CONGRATULATIONS";
           generatedSubText.innerHTML = "You guess the color";
           gameHeader.style.backgroundColor="purple";
        }else{
            fade(e.target)
            console.log("false");
        }
    
    })
}

let item = arr[Math.floor(Math.random()*arr.length)];
item.style.backgroundColor = generatedColor.innerHTML.toLowerCase();





function randomRGB(){   
    let str = "";
    for(let i=0;i<3;i++){
        str += Math.round(Math.random()*255)+",";
    }
    let generated = str.replace(/\'|,$/g, "");

    return `RGB(${generated})`;
}


function fade(element){
    var op = 1;
    var timer = setInterval(() => {
       if(op <= 0.1){
           clearInterval(timer);
           element.style.display= "none";
       } 
       element.style.opacity = op;
       element.style.filter = 'alpha(opacity='+op*100+")";
       op -=op*0.1;
    }, 50);
}





reset.addEventListener("click",function(){
    location.reload();
    return false;
})