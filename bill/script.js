const billInput = document.querySelector("#bill-box-input")
const peopleInput = document.querySelector(".people")
const generateBillBtn = document.querySelector(".generate-bill-btn")
const eachPersonOutput = document.querySelector(".each-person-bill span")
const totalOutput = document.querySelector(".total span")
const tipAmountOutput = document.querySelector(".tip-amount span")
const customTip = document.querySelector(".custom")
const tipContainer = document.querySelector(".tip-container")
const resetBtn = document.querySelector(".reset-btn")

let tipPercentage = 0;

generateBillBtn.addEventListener('click',()=>{
  const billAmount  = parseInt(billInput.value)
  const eachPeople = parseInt(peopleInput.value)
  const billDivide = billAmount/eachPeople
  const customTips = parseInt(customTip.value)
  tipAmountOutput.innerText = `₹${billAmount*(tipPercentage/100)}`
  totalOutput.innerText = `₹${billAmount * ((tipPercentage+100)/100)}`
  eachPersonOutput.innerText = `₹${billDivide}`
})

tipContainer.addEventListener('click',(e)=>{
  if(e.target!=tipContainer)
  {
    [...tipContainer.children].forEach((tip)=>
      tip.classList.remove('selected')
    )
    e.target.classList.add('selected')
    tipPercentage = parseInt(e.target.innerText)
    customTip.value = ""
  }
  if (peopleInput.value && tipPercentage) {
    generateBillBtn.disabled = false
  } else {
    generateBillBtn.disabled = true
  }
})

customTip.addEventListener('input',()=>{
  tipPercentage = parseInt(customTip.value)
  ;[...tipContainer.children].forEach((tip)=>
    tip.classList.remove('selected')
  )
  if (peopleInput.value && tipPercentage) {
    generateBillBtn.disabled = false
  } else {
    generateBillBtn.disabled = true
  }

})

resetBtn.addEventListener('click',()=>{
  billInput.value = ""
  peopleInput.value = ""
  tipAmountOutput.innerText = ""
  totalOutput.innerText = ""
  eachPersonOutput.innerText = ""
  ;[...tipContainer.children].forEach((tip)=>
    tip.classList.remove('selected')
  )
  resetBtn.disabled = true
  generateBillBtn.disabled = true
})

billInput.addEventListener('input',()=>{
  if(billInput.value){
    customTip.disabled = false
    peopleInput.disabled = false
    tipContainer.classList.remove("disabled")
  }
  else{
    customTip.disabled = true
    peopleInput.disabled = true
    tipContainer.classList.add("disabled")
  }
})

peopleInput.addEventListener('input',()=>{
  if (peopleInput.value && tipPercentage) {
    generateBillBtn.disabled = false
  } else {
    generateBillBtn.disabled = true
  }
})