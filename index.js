// Your code here

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }


  
  function moveDodgerRight() {
    
    const fake = document.getElementById("fake")
    const game = document.getElementById("game");
    const game_max_width = game.getBoundingClientRect();
    const int_game_max_width = parseInt(game_max_width, 10); 
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    

    if ( left !== 360) {
        dodger.style.left = `${left + 1}px`;
    }
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
  });