function printError(id, msg) {
  document.getElementById(id).innerHTML = msg;
}

export const validateForm = (userData) => {
  let regex = null;
  const {
    name,
    username,
    password,
    dob,
    email,
    gender,
    phone,
    address,
    country,
    hobbies
  } = userData;
  let isValidForm = true;
  regex = /^[a-zA-Z\s]+$/;
  if (regex.test(name) === false) {
    printError("nameError", "Invalid name");
    isValidForm = false;
  }
  if (name === "") {
    printError("nameError", "name can't be empty");
    isValidForm = false;
  }
  if (username === "") {
    printError("usernameError", "username can't be empty");
    isValidForm = false;
  }
  if (password === "") {
    printError("passwordError", "password can't be empty");
    isValidForm = false;
  }
  if (dob === "") {
    printError("dobError", "Date of birth can't be empty");
    isValidForm = false;
  }
  regex = /^\S+@\S+$/;
  if (!regex.test(email)) {
    printError("emailError", "Invalid email");
    isValidForm = false;
  }
  if (email === "") {
    printError("emailError", "email can't be empty");
    isValidForm = false;
  }
  if (gender === "") {
    printError("genderError", "please select gender");
    isValidForm = false;
  }
  if (phone === "") {
    printError("phoneError", "phone number can't be empty");
    isValidForm = false;
  } else {
    regex = /^\d{10}$/;
    if (!regex.test(phone)) {
      printError("phoneError", "Invalid number");
      isValidForm = false;
    }
  }
  if (address === "") {
    printError("addressError", "address can't be empty");
    isValidForm = false;
  }
  return isValidForm;
};

export const RegisterSuccess = () => {
  let registerElement = document.querySelector(".registerStatus");
  registerElement.innerHTML = "Registration Success! Go to login page!";
  registerElement.classList.remove("d-none");
  setTimeout(function () {
    registerElement.classList.add("d-none");
  }, 15000);
};

export const removeErrorMessage = (e) => {
  const divClassName = e.target.getAttribute("name") + "-div";
  document.querySelector("." + divClassName + " .error").innerHTML = "";
};
