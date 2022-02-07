// TODO: Declare any global variables we need
let numberOfHeadFlips = 0
let numberOfTailFlips = 0
let percentHeads = 0
let percentTails = 0
const flipBtn = document.querySelector('#flip')
const pennyImg = document.querySelector('#coinImage')
const message = document.querySelector('#message')
const heads = document.querySelector('#heads')
const tails = document.querySelector('#tails')
const headsPercent = document.querySelector('#heads-percent')
const tailsPercent = document.querySelector('#tails-percent')

document.addEventListener('DOMContentLoaded', function () {

    // TODO: Add event listener and handler for flip and clear buttons

    // Flip Button Click Handler
    flipBtn.addEventListener('click', function(){
        let flippedHeads = Math.random() < 0.5

        
        // TODO: Update image and status message in the DOM
        // TODO: Determine flip outcome
        
        if(flippedHeads){
            pennyImg.setAttribute('src', 'assets/images/penny-heads.jpg')
            message.textContent = 'You flipped heads!'
            numberOfHeadFlips++
        } else {
            pennyImg.setAttribute('src', 'assets/images/penny-tails.jpg')
            message.textContent = 'You flipped tails!'
            numberOfTailFlips++
        }

        let total = numberOfHeadFlips + numberOfTailFlips


        if (total > 0) {
            percentHeads = Math.round((numberOfHeadFlips/total) * 100)
            percentTails = Math.round((numberOfTailFlips/total) * 100)
        }

        // Update the scoreboard
        updateScoreBoard()
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell
    })
    
function updateScoreBoard() {
    heads.textContent = numberOfHeadFlips
    tails.textContent = numberOfTailFlips
    headsPercent.textContent = percentHeads
    tailsPercent.textContent = percentTails
}


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})