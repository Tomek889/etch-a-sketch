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


const container = document.querySelector(".container")


container.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("square")) {
        event.target.style.background = getRandomColor();
    }
});


createGrid(10);
