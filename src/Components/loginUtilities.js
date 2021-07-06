export const validateForm = () => {
  let isValidForm = true;
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
  return isValidForm;
};

export const isValidUser = (username, password) => {
  const inputUsername = document.getElementById("username").value;
  const inputPassword = document.getElementById("password").value;
  let isValid = false;
  if (inputUsername === username && inputPassword === password) {
    isValid = true;
  }
  return isValid;
};

export const loginFailError = () => {
  let loginElement = document.querySelector(".loginError");
  loginElement.innerHTML = "Login failed!";
  loginElement.classList.remove("d-none");
  setTimeout(function () {
    loginElement.classList.add("d-none");
  }, 6000);
};

export const removeErrorMessage = (e) => {
  const divClassName = e.target.getAttribute("id") + "-div";
  document.querySelector("." + divClassName + " .error").innerHTML = "";
};
