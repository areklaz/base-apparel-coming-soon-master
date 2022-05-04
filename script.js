const errorMsg = document.querySelector('.error-msg')
const sendBtn = document.querySelector('.btn')
const emailAddress = document.querySelector('.emailAddress')
const newsletter = document.querySelector('.newsletter')

const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const checkEmail = () => {
    if(emailAddress.value.match(regex)){
        errorMsg.textContent = ''
        newsletter.style.outline = ''
        newsletter.style.outlineOffset = ''
    } else {
        errorMsg.textContent = "Please provide valid email"
        newsletter.style.outline = "2px solid red"
        newsletter.style.outlineOffset = '-2px'
    }
}

sendBtn.addEventListener("click", checkEmail)