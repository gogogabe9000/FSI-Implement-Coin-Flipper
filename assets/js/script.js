// TODO: Declare any global variables we need
let numberOfHeadRolls = 0
let numberOfTailRolls = 0
const flipBtn = document.querySelector('#flip')
const pennyImg = document.querySelector('#coinImage')


document.addEventListener('DOMContentLoaded', function () {

    // TODO: Add event listener and handler for flip and clear buttons

    // Flip Button Click Handler
    flipBtn.addEventListener('click', function(){
        let flippedHeads = Math.random() < 0.5

        
        // TODO: Update image and status message in the DOM
        if(flippedHeads){
            pennyImg.setAttribute('src', 'assets/images/penny-heads.jpg')
        } else {
            pennyImg.setAttribute('src', 'assets/images/penny-tails.jpg')
        }
    })
    
        // TODO: Determine flip outcome

        // Update the scoreboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})