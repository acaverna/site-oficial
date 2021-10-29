const checkbox = document.getElementById("checkbox")
const nav = document.querySelector(".navegacaoInterna")
const header = document.getElementById("sobre")
const footer = document.querySelector("footer")

checkbox.addEventListener("change", () => {
    document.body.classList.toggle("light")
    footer.classList.toggle("light")
    header.classList.toggle("light")
    nav.classList.toggle("light")
})