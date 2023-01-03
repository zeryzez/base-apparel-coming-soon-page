const alerte = document.querySelector(".alert")
const subit = document.querySelector(".button")
const input = document.querySelector(".input")


alerte.addEventListener("click",() =>{
    alerte.style.visibility = "visible"
    input.style.borderColor = "red"
})