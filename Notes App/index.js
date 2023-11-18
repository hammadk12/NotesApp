
let btn1 = document.getElementById("btn")
const list1 = document.getElementById("list")
const listItems = document.getElementById("list-item")
let input1 = document.getElementById("inputField")

btn1.addEventListener("click", function() {
    let inputValue = input1.value
    list1.innerHTML += `<li>${inputValue}</li>`
    input1.value = ""
})


