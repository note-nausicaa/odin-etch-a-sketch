const container = document.querySelector(".container");

function createGrid(x){
    for (let i = 0; i < x; i++ ) {
        const row = document.createElement('div')
        row.classList.add('row')        
        for (let j =0; j < x; j++) {
            const square = document.createElement('div')
            square.classList.add('square')
            row.appendChild(square)
        }
        container.appendChild(row);
        console.log("SQUARE :)")
    };
}

const confirmButton = document.getElementById("confirm");

confirmButton.addEventListener('click', () => {
    const input = document.getElementById("number");
    const userNumber = input.value;
    input.value = '';

    if (userNumber < 100){
        createGrid(userNumber);
        const square = document.querySelectorAll(".square");
        square.forEach((square) => {square.addEventListener("mouseover", () => {
            square.classList.add("hover");
        });

        square.addEventListener("mouseout", () => {
        square.classList.remove("hover");
        });

        square.addEventListener("click", () => {
        square.classList.add("show");
        });
    });
        }
    });

const resetButton = document.getElementById("reset")

resetButton.addEventListener('click', () => {
    const square = document.querySelectorAll(".square");
    square.forEach((square) => {square.classList.remove("show")});
});

const chooseColour = document.getElementById("checkbox");

chooseColour.addEventListener("click", () => {
    const square = document.querySelectorAll(".square");
    square.forEach((square) => {square.addEventListener("mouseover", ()=> {
        square.style.backgroundColor = randomColor();
        });

        square.addEventListener("click", () => {
            square.style.backgroundColor = randomColor();
        });
    });
})

function randomColor(){
    rc = "#";
    for(i=0;i<6;i++){
        rc += Math.floor(Math.random()*16).toString(16);
    }
    return rc;
}