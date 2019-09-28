
const response = () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [ "springgreen",
                     "palevioletred",
                     "rgb(174, 88, 196)",
                     "goldenrod",
                     "rgb(61, 76, 209)",
                     "aqua"   ] ;



//Sound functionality
pads.forEach( (pad, index) => {
    pad.addEventListener('click', function() {
        sounds[index].currentTime = 0;
        sounds[index].play();

    createBubbles(index);
    })
})

//Create a function that makes bubbles

const createBubbles = (index) => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index] ;
    bubble.style.animation = "jump 1s ease";
    bubble.addEventListener('animationend', function(){
        visual.removeChild(this);
    });
   }
}

window.addEventListener('load', response)