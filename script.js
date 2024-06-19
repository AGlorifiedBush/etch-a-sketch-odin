const project = document.querySelector('.project');

const changeBtn = document.getElementById("change");
changeBtn.addEventListener("click", changeGrid);

let grid = {rows: 0 , cols: 0} ;

let totCells = grid.rows * grid.cols;

//createGrid(totCells);

function createGrid(totCells) {
    for (let i = 0; i < totCells; i++) {
        const cell = document.createElement("div");
        project.append(cell);
        cell.addEventListener("mouseenter", hoverColor);
        cell.addEventListener("mouseleave", setToBox);
        cell.classList.add("unclicked");
        
        cell.addEventListener("click", colorChange);
    }
    project.style.setProperty(`grid-template-columns`, `repeat(${grid.cols}, 1fr)`);

}

function colorChange() {
    const newCell = event.target;
    if (newCell.id === "clicked") {
        newCell.removeAttribute("id")
    } else{
        newCell.setAttribute("id", "clicked");
    }
    
    
}

function hoverColor() {
    const hoverCell = event.target;
    hoverCell.classList.add("hover");
    hoverCell.classList.toggle("unclicked");
}

function setToBox() {
    const cell = event.target;
    cell.classList.remove("hover");
    cell.classList.toggle("unclicked");
}

function changeGrid() {
    let row = parseInt(prompt("How many rows?"));
    let col = parseInt(prompt("How many columns?"));
    while (row > 100 ) {
       row = parseInt(prompt("Too many rows... overloaded"));
       
    }
    while (col > 100) {
        col = parseInt(prompt("Too many columns... oh noooo!"));
        
    }
    console.log(row)
    console.log(col)
    grid.rows = row;
    grid.cols = col;
    
    totCells = row * col

    createGrid(totCells);
}