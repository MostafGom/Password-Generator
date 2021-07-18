// const empty=''
const alphaUpper = "abcdefghijklmnopqrstuvwxyz"
const alphaLower = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers = "0123456789"
const symbols = "!@#$%^&*_"

const passLength = document.getElementById("pass_length")

const passUpper = document.getElementById("pass_upper")

const passLower = document.getElementById("pass_lower")

const passNumber = document.getElementById("pass_number")

const passSymbol = document.getElementById("pass_symbol")


const copy = document.getElementById("copy")
copy.addEventListener('click',()=>{
  if(password.value == ''){
    alert("Please generate password")
  }else{
    password.select();
    document.execCommand("copy")
    alert("Copied to Clipboard")
  }
})

const submit = document.getElementById("submit")
const password = document.getElementById("password")
const warning = document.getElementById("warning")

// password Gen button
submit.addEventListener('click',() => {
  if(passLength.value>30){
    alert("Max possible length is 30")
    passLength.value=30;
  }

  let initialPass = '';
  (passUpper.checked) ? initialPass += alphaUpper : '';

  (passLower.checked) ? initialPass += alphaLower : '';

  (passNumber.checked) ? initialPass += numbers : '';

  (passSymbol.checked) ? initialPass += symbols : '';

  password.value = generatePassword(passLength.value,initialPass)
}
)

function generatePassword(pass_length, initial_pass){
  let randomPass = ''
  for(let i = 0 ; i < pass_length ; i++){
    let randomIndex = Math.floor(Math.random() * initial_pass.length)
    randomPass += initial_pass.charAt(randomIndex)
  }
  return randomPass
}





