//total amount of squares in the div
let size = 16
let grid = document.querySelector('#grid')

for (let i = 0; i < size; i++) {
    gridBlock = document.createElement('div');
    gridBlock.className = 'gridBlock'
    grid.append(gridBlock)
    gridBlock.style.width = `${500/Math.sqrt(size)}px`
    gridBlock.style.height = `${500/Math.sqrt(size)}px`
}

//clear button & size input
clear = document.querySelector('#clear')
clear.addEventListener('click', clearScreen)
inputSize = document.querySelector('#inputSize')

//clear the screen, hide the clear button, and ask for size input

function clearScreen() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    clear.setAttribute('hidden', 'hidden')
    inputSize.removeAttribute('hidden')
}

