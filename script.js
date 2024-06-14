const project = document.querySelector('.project');

const grid = {rows:16, cols:16};

const totCells = grid.rows * grid.cols;

createGrid(totCells)

function createGrid(totCells) {
    for (let i = 0; i < totCells; i++) {
        const cell = document.createElement("div");
        project.append(cell);
        
        cell.classList.add("box"+`${i+1}`)
        cell.setAttribute("id", "unclicked")
        cell.addEventListener("click", colorChange)
    }
    project.style.setProperty(`grid-template-columns`, `repeat(${grid.cols}, 1fr)`)

}

function colorChange() {
    const newCell = event.target
    newCell.setAttribute("id", "clicked")
}