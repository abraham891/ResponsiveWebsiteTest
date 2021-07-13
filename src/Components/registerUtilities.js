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
  regex = /^[a-zA-Z][a-zA-Z0-9]+$/;
  if (!regex.test(username)) {
    printError("usernameError", "Invalid username");
    isValidForm = false;
  }
  if (username === "") {
    printError("usernameError", "username can't be empty");
    isValidForm = false;
  }
  if (password === "") {
    printError("passwordError", "password can't be empty");
    isValidForm = false;
  } else {
    if (!successfulPswd(password)) {
      printError("passwordError", "Invalid Password");
      isValidForm = false;
    }
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
    regex = /^[6789]\d{9}$/;
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
  registerElement.classList.remove("d-none");
  let count = 5;
  var countInterval = setInterval(function () {
    registerElement.innerHTML =
      "Registration Success! You will be redirected to login page in " +
      count +
      " seconds";
    count -= 1;
    if (count < 0) {
      clearInterval(countInterval);
    }
  }, 1000);
  registerElement.classList.remove("d-none");
};

export const removeErrorMessage = (e) => {
  const divClassName = e.target.getAttribute("name") + "-div";
  document.querySelector("." + divClassName + " .error").innerHTML = "";
};

export const psdOnFocus = (e) => {
  removeErrorMessage(e);
  document.querySelector(".pswdValidateContainer").classList.remove("d-none");
};

export const successfulPswd = (pswdText) => {
  let isPasswordRight = true;
  let regex = /.*[A-Z].*/;
  if (regex.test(pswdText)) {
    document.querySelector("#pswdUpperCase").classList.add("text-success");
  } else {
    document.querySelector("#pswdUpperCase").classList.remove("text-success");
    isPasswordRight = false;
  }
  regex = /.*[a-z].*/;
  if (regex.test(pswdText)) {
    document.querySelector("#pswdLowerCase").classList.add("text-success");
  } else {
    document.querySelector("#pswdLowerCase").classList.remove("text-success");
    isPasswordRight = false;
  }
  regex = /.*[0-9].*/;
  if (regex.test(pswdText)) {
    document.querySelector("#pswdNumber").classList.add("text-success");
  } else {
    document.querySelector("#pswdNumber").classList.remove("text-success");
    isPasswordRight = false;
  }
  regex = /.*[!@#$%^&*()_+].*/;
  if (regex.test(pswdText)) {
    document.querySelector("#pswdSpecialChar").classList.add("text-success");
  } else {
    document.querySelector("#pswdSpecialChar").classList.remove("text-success");
    isPasswordRight = false;
  }
  if (pswdText.length >= 8) {
    document.querySelector("#pswdMinChar").classList.add("text-success");
  } else {
    document.querySelector("#pswdMinChar").classList.remove("text-success");
    isPasswordRight = false;
  }
  return isPasswordRight;
};

export const pswOnBlur = () => {
  document.querySelector(".pswdValidateContainer").classList.add("d-none");
};
