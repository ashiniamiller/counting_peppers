let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let totalAll = document.getElementById("total-all")
let count = 0
let sum = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = " " + count + " + "
    saveEl.textContent  += countStr
    countEl.textContent = 0
    sum += count
    count = 0
    total()
}

function total(){
    totalAll.textContent = sum
    console.log(sum)
}