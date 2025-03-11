function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function createGrid(size) {
    for (let i = 0; i < size; i++) {
        const newRow = document.createElement("div");
        newRow.classList.add("grid-row");
        container.appendChild(newRow);
    
        for (let j = 0; j < size; j++) {
            const newDiv = document.createElement("div");
            newDiv.classList.add("square");
            newRow.appendChild(newDiv);
        }
    }

    document.querySelectorAll(".grid-row").forEach((square) => {
        square.style.width = `calc(100% / ${size})`;
    });

    document.querySelectorAll(".square").forEach((square) => {
        square.style.height = `calc(100% / ${size})`;
    });
}


function getGridSize() {
    let size = parseInt(prompt("Enter the number of squares per side (max. 100):"));
    if (size && size >= 1 && size <= 100) {
        return size;
    }
    return;
}


function removeGrid() {
    document.querySelectorAll(".grid-row").forEach((square) => {
        square.remove();
    });  
}


const container = document.querySelector(".container");
const createGridButton = document.querySelector(".btn");


container.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("square")) {
        event.target.style.background = getRandomColor();
    }
});

createGridButton.addEventListener("click", () => {
    const selectedGridSize = getGridSize();
    if (selectedGridSize) {
        removeGrid();
        createGrid(selectedGridSize);
    } else {
        alert("Invalid input.");
    }
});


createGrid(16);
