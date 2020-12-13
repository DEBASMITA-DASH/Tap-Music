window.addEventListener("load" , () => {
var sounds = document.querySelectorAll('.sound');
var pads = document.querySelectorAll('.pads div')
var visual = document.querySelector(".visual");
const colors = [
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#606bd3",
    "#60c2d3"
  ];

// // For Sounds, here sounds[0],[1]...type is to be used.
// so sounds[index] is used instead of writing the numbers directly
// currentTime = 0; is used so that we can click on pads and sounds play again instead of waiting for it to finish. Can tap multiple times

pads.forEach((pad, index) =>{
  pad.addEventListener("click" , function() {
    sounds[index].currentTime = 0;
    sounds[index].play();

    createBubbles(index);
  });
});


// Creating the jumping Bubbles
var createBubbles = (index) => {
  var bubbles = document.createElement("div");
  visual.appendChild(bubbles);
  // in the parent div "Visuals" we added div called "bubbles"
  // and createBubbles is the function where this adding bubbles takes place.
  bubbles.style.backgroundColor = colors[index];
  bubbles.style.animation = "jump 2s ease";

  // Ending the animation or deleting the child(bubbles) because the code in inspect just adds the div and it becomes very large.
  // delete the next three lines, go to inspect and check visual part.
  bubbles.addEventListener("animationend", function(){
    visual.removeChild(this);
  });
};



});
