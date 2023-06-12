const container = document.querySelector('#container')
const resetButton = document.querySelector('#resetbtn')
const toggleBorder = document.querySelector('#border-btn')



let userSize = document.getElementById("numberInput").value
console.log(userSize)


// Nest rowsAndColumns function inside an if statement (to better use buttons?)



function rowsAndColumns(userSize) {
    let gridSizeCalc = (100 / userSize) + "%";
    console.log(gridSizeCalc)
    for (let b = 0; b < (userSize * userSize); b++) {
        const box = document.createElement('div')
        // box = document.createElement('div')
        container.appendChild(box)
        box.setAttribute('style', `height:${gridSizeCalc};width:${gridSizeCalc}`)
        
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

// resetButton.addEventListener('click', e => {
//     box.removeAttribute('class', 'filled')

// })

// box.addEventListener('mouseenter', e => {
//     box.setAttribute('class', 'filled')

// })

// Change grid size based on user input, deletes all then invoked rowsAndColumns
document.getElementById("numberInput").addEventListener('change', e => {
    userSize = document.getElementById("numberInput").value
    
    container.textContent = '';

    rowsAndColumns(userSize)
    
})


// function reset() {
//     resetButton.addEventListener('click', function () {

//         box.removeAttribute('class', 'filled')
        
// })
// }

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

