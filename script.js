const container = document.querySelector('#container')
console.log(container)




// Add a prompt for user size input
let userSize = 12



function rowsAndColumns(numBoxes) {
    for (let b = 0; b < (numBoxes * numBoxes); b++) {
        const box = document.createElement('div')

        let calc1 = (100 / numBoxes) + "%";
        let calc2 = (100 / numBoxes) + "%";

        console.log(calc1, calc2)

        box.setAttribute('style', `height:${calc1};width:${calc2}`)
        container.appendChild(box)
        
        box.addEventListener('mousedown', e => {
            box.setAttribute('class', 'filled')
        })

    } 

}




rowsAndColumns(userSize)
