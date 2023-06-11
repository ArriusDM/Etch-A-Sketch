const container = document.querySelector('#container')
const resetButton = document.querySelector('#resetbtn')
const toggleBorder = document.querySelector('#border-btn')



let userSize = document.getElementById("numberInput").value
console.log(userSize)

let box;

// Nest rowsAndColumns function inside an if statement (to better use buttons?)

let gridSizeCalc = (100 / userSize) + "%";
console.log(gridSizeCalc)

function rowsAndColumns(userSize) {

    for (let b = 0; b < (userSize * userSize); b++) {

        box = document.createElement('div')
        box.setAttribute('style', `height:${gridSizeCalc};width:${gridSizeCalc}`)

        container.appendChild(box)

        // Couldn't manage to get working properly, remnants of borders stayed. Scrapped
        // toggleBorder.addEventListener('click', function () {
        //     if (box.classList.contains('noborder')) {
        //         box.removeAttribute('class', 'noborder')
        //         box.setAttribute('class', 'border')
        //         toggleBorder.innerHTML = 'Borders : ON'
        //         reset()
        //         console.log('border on')

        //     } else {
        //         box.removeAttribute('class', 'filled')
        //         box.setAttribute('class', 'noborder')
        //         toggleBorder.innerHTML = 'Borders : OFF'
        //         console.log('border off')
        //     }
        // })
        resetButton.addEventListener('click', e => {
            box.removeAttribute('class', 'filled')

        })


        box.addEventListener('mouseenter', e => {
            box.setAttribute('class', 'filled')

        })

    }

}
rowsAndColumns(userSize)



document.getElementById("numberInput").addEventListener('change', e => {
    userSize = document.getElementById("numberInput").value
    container.removeChild(box)
    rowsAndColumns(userSize)
    reset()
})


function reset() {
    resetButton.addEventListener('click', function () {
        box.removeAttribute('class', 'filled')
})
}

// function clickPlacement() {
//     box.addEventListener('click', e => {
//         box.setAttribute('class', 'filled')
//     })
// }
// function snakePlacement() {
//     box.addEventListener('mouseenter', e => {
//         box.setAttribute('class', 'filled')
//     })
// }

