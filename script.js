const project = document.querySelector('.project');

let grid = {rows:0 , cols: 0} ;

const totCells = grid.rows * grid.cols;

const changeBtn = document.getElementById("change");
changeBtn.addEventListener("click", changeGrid);

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
    newCell.setAttribute("id", "clicked");
    
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
    const rows = parseInt(prompt("How many rows?"));
    const cols = parseInt(prompt("How many columns?"));
    while (rows > 100 ) {
       rows = prompt("Too many rows... overloaded")
    }
    while (cols > 100) {
        cols = prompt("Too many columns... oh noooo!")
    }
    grid.rows += rows;
    grid.cols += cols;
    
    createGrid(totCells);
}