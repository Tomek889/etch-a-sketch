const container = document.querySelector("#container")

for (let i = 0; i < 16; i++) {
    const newRow = document.createElement("div");
    newRow.classList.add("grid-row")
    container.appendChild(newRow);

    for (let j = 0; j < 16; j++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("square")
        newRow.appendChild(newDiv);
    }
}