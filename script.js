//scroll box
const boxes = document.querySelectorAll("[data-anim]")

function scroll() {

    const pageTop = window.pageYOffset + ((window.innerHeight * 3.2 / 4))

    boxes.forEach(function(e) {

        if((pageTop) > e.offsetTop) {
            e.classList.add('animate')
        }else {
            e.classList.remove('animate')
        }

    })

}

document.addEventListener("scroll", function(e)  {
    e.preventDefault()
    scroll()
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
/*mud color */

const content = document.querySelector(".content")
const textB8 = document.querySelector(".form-login-h1")
const info1p = document.querySelector(".box1-info-p")
const infoh1 = document.querySelector(".box1-info-h1")
const footer = document.querySelector(".footer")
const liLink = document.querySelector(".li-link")

document.querySelector('.ball').addEventListener('click', (e) => {
    e.target.classList.toggle('ball-move')
})


const buttonUp = document.querySelector(".button-up")

function scrollMenu() {
    const pageTop = window.pageYOffset;
    
    if ((pageTop) > 3500) {
        buttonUp.style.opacity = "1"

    }else{
        buttonUp.style.opacity = "0"
    }
}

window.addEventListener("scroll", function() {
    scrollMenu()
})



  