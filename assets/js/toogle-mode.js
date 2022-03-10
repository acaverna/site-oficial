const checkbox = document.getElementById("checkbox")
const nav = document.querySelector(".navegacaoInterna")
const header = document.getElementById("sobre")
const footer = document.querySelector("footer")

AtivarLightMode()
function AtivarLightMode() {
    const lightMode = localStorage.getItem('lightMode')
    if(JSON.parse(lightMode))
    {
        checkbox.checked = lightMode
        AlterarClassesLight()
    }
}

checkbox.addEventListener("change", () => {
    localStorage.setItem('lightMode', checkbox.checked)
    AlterarClassesLight()
})

function AlterarClassesLight(){
    document.body.classList.toggle("light")
    footer.classList.toggle("light")
    header.classList.toggle("light")
    nav.classList.toggle("light")
}