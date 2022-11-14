

//scroll box
const boxes = document.querySelectorAll("[data-content]")
const animate = "animate"

function scrollBoxes() {

    const pageTop = window.pageYOffset + ((window.innerHeight * 3) / 4)

    boxes.forEach(function(e) {

        if ((pageTop) > e.offsetTop) {
            e.classList.add(animate)
        }else{
            e.classList.remove(animate)
        }

    })

}

document.addEventListener("scroll", function(e) {
    scrollBoxes()
})


// letreiro h1
const el = document.querySelector(".text-banner")
const text = "Survival Sland";

const interval = 200;

function showText(el, text, interval){
    const char = text.split("").reverse();

    const typer = setInterval(() => {

        if (!char.length) {
            return clearInterval(typer)
        }

        const next = char.pop()

        el.innerHTML += next;

    }, interval)
}


showText(el, text, interval)


//letreiro p
const elP = document.querySelector(".text-p-banner")
const textP = "Jogue agora mesmo";

const intervalP = 300;

function showText(elP, textP, intervalP){
    const char = textP.split("").reverse();
    const typer = setInterval(() => {

        if (!char.length) {
            return clearInterval(typer)
        }

        const next = char.pop()

        elP.innerHTML += next;

    }, intervalP)
}

showText(elP, textP, intervalP)


// dawnload and login

let formLogin = document.querySelector(".form-login")

let formName = document.querySelector(".form-name")
let formAge = document.querySelector(".form-age")
let nameUser = document.querySelector(".name-user")
let infoVerify = document.querySelector(".info-verify")
const cardgame = document.querySelector(".card-game")


formLogin.addEventListener("submit", function(e) {
    e.preventDefault()

    let namevalue = formName.value;
    const agevalue = formAge.value;

    if (agevalue != 17) {
        infoVerify.style.color = "red"
        infoVerify.innerHTML = `ops! ${namevalue}, responda a questão corretamente`
    }else{
        console.log("sucesso")
    formLogin.style.display = "none"
    cardgame.style.display = "flex"
    nameUser.innerHTML = `Pronto pra fazer historia?`
    }

})
/*mud color */

const content = document.querySelector(".content")
const textB8 = document.querySelector(".form-login-h1")
const info1p = document.querySelector(".box1-info-p")
const infoh1 = document.querySelector(".box1-info-h1")
const footer = document.querySelector(".footer")
const liLink = document.querySelector(".li-link")

document.querySelector('.ball').addEventListener('click', (e) => {
    e.target.classList.toggle('ball-move')
    content.classList.toggle('dark')
    info1p.classList.toggle('white')
    infoh1.classList.toggle('white')
    textB8.classList.toggle('whit')
    footer.classList.toggle('footer-black')
    liLink.classList.toggle('li-link-black')
})

const buttonUp = document.querySelector(".button-up")

function scrollMenu() {
    const pageTop = window.pageYOffset;

    console.log(pageTop)
    
    if ((pageTop) > 5000) {
        buttonUp.style.opacity = "1"
    }else{
        buttonUp.style.opacity = "0"
    }
}

window.addEventListener("scroll", function() {
    scrollMenu()
})