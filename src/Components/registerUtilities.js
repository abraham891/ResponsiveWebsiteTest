export const validateForm = () => {
  let isValidForm = true;
  if (document.getElementById("name").value === "") {
    document.getElementById("nameError").innerHTML =
      "name can't be empty";
    isValidForm = false;
  }
  if (document.getElementById("username").value === "") {
    document.getElementById("usernameError").innerHTML =
      "username can't be empty";
    isValidForm = false;
  }
  if (document.getElementById("password").value === "") {
    document.getElementById("passwordError").innerHTML =
      "password can't be empty";
    isValidForm = false;
  }
  if (document.getElementById("email").value === "") {
    document.getElementById("emailError").innerHTML =
      "email can't be empty";
    isValidForm = false;
  }
  if (document.getElementById("phone").value === "") {
    document.getElementById("phoneError").innerHTML =
      "phone can't be empty";
    isValidForm = false;
  }
  return isValidForm;
}

export const RegisterSuccess = () => {
  let registerElement = document.querySelector(".registerStatus");
  registerElement.innerHTML = "Registration Success! Go to login page!";
  registerElement.classList.remove("d-none");
  setTimeout(function () {
    registerElement.classList.add("d-none");
  }, 15000);
};

export const removeErrorMessage = (e) => {
  const divClassName = e.target.getAttribute("id") + "-div";
  document.querySelector("." + divClassName + " .error").innerHTML = "";
};