// INCREMENT BTN STARTS
let incrementBtn = document.querySelector(`#counter .incrementBtn`)
let input = document.querySelector(`#counter input`)
const increment = () => {
    let newValue = Number(input.value) + 1;
    input.value = newValue;
}
incrementBtn.addEventListener(`click` , increment)
// INCREMENT BTN ENDS



// DECREMENT BTN STARTS
let decrementBtn = document.querySelector(`#counter .decrementBtn`)
const decrement = () => {
    let newValue = Number(input.value) - 1
    input.value = newValue
    if (newValue < 0){
        input.value = 0;
    }
}
decrementBtn.addEventListener(`click` , decrement)
// DECREMENT BTN ENDS


// IF INPUT VALUES GOES BELOW 0 , IT WILL BE SET TO 0

input .addEventListener(`keyup` , () => {
    if(input.value < 0) {
        input.value = 0
    }
})

// IF INPUT VALUES GOES BELOW 0 , IT WILL BE SET TO 0