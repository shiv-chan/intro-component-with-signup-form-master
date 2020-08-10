const button = document.querySelector("button");
const message = document.getElementsByClassName("message");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.querySelector("form");
const banner = document.querySelector("p.banner");
const input = document.getElementsByTagName("input");


function setError(input){
  input.parentElement.classList.add("error");
}

function removeError(input){
  input.parentElement.classList.remove("error");
}


form.addEventListener("focusout", function(){
  checkInputs();
  errorCheck();
});


function checkInputs(){
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  
  //first name check
  if(firstNameValue === ""){
    setError(firstName);
  } else {
    removeError(firstName);
  }
  
  //last name check
  if(lastNameValue === ""){
    setError(lastName);
  } else {
    removeError(lastName);
  }
  
  //email check
  if(emailValue === ""){
    //add error class and set the message text
    setError(email);
    email.parentElement.querySelector(".message").innerHTML = "Email cannot be empty.";
  } else if(email.validity.patternMismatch){
    setError(email);
    email.parentElement.querySelector(".message").innerHTML = "Looks like this is not an email.";
  } else {
    removeError(email);
  }
  
  //password check
  if(passwordValue === ""){
    setError(password);
  } else {
    removeError(password);
  }
}

//change form size when any errors occur
function errorCheck(){
  const arr = [firstName, lastName, email, password];
  for(let i = 0; i < arr.length; i++){
    if(arr[i].parentElement.getAttribute("class").indexOf("error") !== -1){
      form.classList.add("error");
      banner.classList.add("error");
      break;
    } else {
      form.classList.remove("error");
      banner.classList.remove("error");
    }
  }
}