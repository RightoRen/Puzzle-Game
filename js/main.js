console.log("Javascript is connected");

// always organize your java as variable function and event listener
const puzzlePiecesDiv = document.querySelector(".puzzle-pieces");
const theButtons = document.querySelectorAll("#buttonHolder img"),
    puzzleBoard = document.querySelector(".puzzle-board");
    puzzlePieces = document.querySelectorAll(".puzzle-pieces img"),
    puzzlePiece = document.querySelector(".puzzle-pieces"),
    dropZones = document.querySelectorAll(".drop-zone");

    let draggedPiece;

function changeBGImage() {
    resetButton();

    puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`  
};

function resetButton() {

    dropZones.forEach(dropZone => {

    if(dropZone.children.length >= 1) {
        puzzlePiecesDiv.appendChild(dropZone.children[0])
    }
    });
}


function handleStartDrag() {
    // console.log("Started Dragging", this)
    draggedPiece = this;
}

function handleDragOver(e) {
    e.preventDefault();
    // this will prevent the default dragover behaviour e is short for event, could be e,evt as well
    console.log("dragged over me");
}

function handleDrop(e) {
    e.preventDefault();
    console.log("Item has been dropped");
    if(this.children.length>=1) {
        return;
    }

    // this line adds the puzzle piece
    this.appendChild(draggedPiece);
}



theButtons.forEach(button => button.addEventListener("click", changeBGImage));

puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));

dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));

dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));






