let AllBtn = document.querySelectorAll(".row .col .btn-primary");
let winningCombination = [[0,1,2],[3,4,5],[6,7,8],//horizontal
[0,3,6],[1,4,7],[2,5,8],//vertical
[0,4,8],[2,4,6]];//diagonal

let reset = document.querySelector('#Reset .btn-primary');
reset.addEventListener('click',Reset);

let turn = true;
for (let i = 0; i < AllBtn.length; i++) {
    AllBtn[i].addEventListener("click", function() {
        console.log("Btn is clicked");
        if(turn){

            this.innerText = "X";
            turn = false;
        }
        else{
            this.innerText = "O";
            turn = true;
        }
        this.disabled = true; // Disable the button after it's clicked
        const winner  = checkWinner();
        if (winner) {
            document.getElementById('status').innerText = `Player ${winner} wins!`;
           // console.log(`Player ${winner} wins!`);
           showStatus();
            disableAllButtons();
            // Handle the end of the game (e.g., show a message, disable other buttons, etc.)
        }
        else if(isDraw()){
            document.getElementById('status').innerText = "It's a draw!";
            showStatus();
          //  console.log("It's a draw!");
            disableAllButtons(); 
        }
    });
}

function checkWinner(){
    for(let i = 0; i<winningCombination.length; i++){
       const[a,b,c] = winningCombination[i];
       if(AllBtn[a].innerText===AllBtn[b].innerText && AllBtn[b].innerText===AllBtn[c].innerText){
        return AllBtn[a].innerText;
       } 
    }
    return null;
}
function isDraw() {
    for (let i = 0; i < AllBtn.length; i++) {
        if (!AllBtn[i].disabled) {
            return false; // If any button is not disabled, the game is not a draw
        }
    }
    return true; // All buttons are disabled, indicating a draw
}

function disableAllButtons() {
    for (let i = 0; i < AllBtn.length; i++) {
        AllBtn[i].disabled = true;
    }
}
function showStatus() {
    document.getElementById('status').style.display = 'block';
}

function Reset(){
    // let reset = document.querySelector('#Reset .btn-primary');
    
        for(let i = 0; i<AllBtn.length; i++){
            AllBtn[i].innerText = "";
            AllBtn[i].disabled=false;
            
        }
        turn = true;
        document.getElementById('status').style.display = 'none';
    }
    