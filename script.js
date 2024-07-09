function createGrid(){
    const container = document.querySelector("container");

    for (let i = 0; i > 16; i++ ) {
        const square = document.createElement("div");
    }
    const squares = document.querySelectorAll("squares");
    container.appendChild(squares);
}

createGrid();