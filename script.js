const container = document.querySelector('#container')
const resetButton = document.querySelector('#resetbtn')
const toggleBorder = document.querySelector('#border-btn')
let userSize = document.getElementById("numberInput").value
console.log(userSize)

let userColor = '';
let rainbow = `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`


let drawingStyle;

function rowsAndColumns(userSize) {

    let gridSizeCalc = (100 / userSize) + "%";
    console.log(gridSizeCalc)
    for (let b = 0; b < (userSize * userSize); b++) {

        const box = document.createElement('div')
        container.appendChild(box)
        box.setAttribute('style', `height:${gridSizeCalc};width:${gridSizeCalc}`)

        resetButton.addEventListener('click', e => {
            box.removeAttribute('class', 'filled')
            console.log('reset')
        })

        function clickFill() {
            box.setAttribute('class', 'filled')
            console.log('click')
        }
        function snakeFill() {
            box.setAttribute('class', 'filled')
            console.log('snake')

        }
        function clickPlacement() {
            box.addEventListener('click', clickFill)
        }
        function snakePlacement() {
            box.addEventListener('mouseenter', snakeFill)
        }
        document.querySelector('#drawing-style-snake').addEventListener('click', e => {
            snakePlacement()
            box.removeEventListener('click', clickFill)

        })

        document.querySelector('#drawing-style-click').addEventListener('click', e => {
            clickPlacement()
            box.removeEventListener('mouseenter', snakeFill)
        })
    }

}




// Changes grid size based on user input, deletes all then invokes rowsAndColumns
document.getElementById("numberInput").addEventListener('change', e => {
    userSize = document.getElementById("numberInput").value
    container.textContent = '';
    rowsAndColumns(userSize)
})








rowsAndColumns(16)
