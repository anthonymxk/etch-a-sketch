//total amount of squares in the div
let grid = document.querySelector('#grid')

//clear button & size input
clear = document.querySelector('#clear')
inputSize = document.querySelector('#inputSize')
inputSubmit = document.querySelector('#inputSubmit')

//event listeners
clear.addEventListener('click', clearScreen)
inputSubmit.addEventListener('click', generateGrid)

//clear the screen, hide the clear button, and ask for size input
function generateGrid() {
    let size = (document.querySelector('input').value);
    for (let i = 0; i < (size*size); i++) {
        gridBlock = document.createElement('div');
        gridBlock.className = 'gridBlock'
        grid.append(gridBlock)
        gridBlock.style.width = `${500/(size)}px`
        gridBlock.style.height = `${500/(size)}px`
    }
    clear.removeAttribute('hidden')
    inputSize.setAttribute('hidden', 'hidden')
}

function clearScreen() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    clear.setAttribute('hidden', 'hidden')
    inputSize.removeAttribute('hidden')
}
