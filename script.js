const container = document.querySelector('#container')
const resetButton = document.querySelector('#resetbtn')



// Add a prompt for user size input
let userSize = 16


function rowsAndColumns(numBoxes) {
    for (let b = 0; b < (numBoxes * numBoxes); b++) {
        const box = document.createElement('div')

        let calc1 = (100 / numBoxes) + "%";
        let calc2 = (100 / numBoxes) + "%";

        console.log(calc1, calc2)

        box.setAttribute('style', `height:${calc1};width:${calc2}`)
        container.appendChild(box)
        
        box.addEventListener('mouseenter', e => {
            box.setAttribute('class', 'filled')
        })
        resetButton.addEventListener('click',function() {
            box.removeAttribute('class', 'filled')
        })


    } 

}


// function reset() {
//     resetButton.addEventListener('click', e=> {
//         box.styl
//     })
// }


function clickPlacement() {
    box.addEventListener('mousedown', e => {
        box.setAttribute('class', 'filled')
    })
}
function snakePlacement() {
    box.addEventListener('mouseenter', e => {
        box.setAttribute('class', 'filled')
    })
}

rowsAndColumns(userSize)
