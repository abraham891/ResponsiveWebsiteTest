import { useState } from "react";
import { useDispatch } from "react-redux";
import "../css/register.css";
import { registerUser } from "../Redux/actions";

import {
  validateForm,
  RegisterSuccess,
  removeErrorMessage,
  psdOnFocus,
  successfulPswd,
  pswOnBlur
} from "./registerUtilities";

export const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    username: "",
    password: "",
    dob: "",
    email: "",
    gender: "",
    phone: "",
    address: "",
    country: "",
    hobbies: ""
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm(userData)) {
      dispatch(registerUser(userData));
      RegisterSuccess();
      e.target.reset();
    }
  };

  const handlePsdChange = (e) => {
    const pswdText = e.target.value;
    successfulPswd(pswdText);
    setUserData({ ...userData, password: e.target.value });
  };

  const handleGender = (e) => {
    setUserData({ ...userData, gender: e.target.value });
    removeErrorMessage(e);
  };

  return (
    <div className="container">
      <h1 className="m-3 text-center">Register Page</h1>
      <div
        className="bg-light w-0 border border-2 p-2 m-auto"
        style={{ maxWidth: "400px", borderRadius: "25px" }}
      >
        <form onSubmit={handleSubmit}>
          <div className="registerStatus m-2 p-1 d-none text-center rounded-3"></div>
          <div className="name-div m-2">
            <label>Name</label>
            <br />
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              placeholder="Enter name"
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
              onFocus={removeErrorMessage}
            />
            <span className="error text-danger" id="nameError"></span>
          </div>
          <div className="username-div m-2">
            <label>Username</label>
            <br />
            <input
              type="text"
              className="form-control"
              name="username"
              id="username"
              placeholder="Enter username"
              onChange={(e) =>
                setUserData({ ...userData, username: e.target.value })
              }
              onFocus={removeErrorMessage}
            />
            <span className="error text-danger" id="usernameError"></span>
          </div>
          <div className="password-div m-2">
            <label>Password</label>
            <br />
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              autoComplete="false"
              placeholder="Enter password"
              onChange={handlePsdChange}
              onFocus={psdOnFocus}
              onBlur={pswOnBlur}
            />
            <span className="error text-danger" id="passwordError"></span>
            <div className="pswdValidateContainer d-none text-danger">
              <span id="pswdUpperCase" className="pswdFactor">
                Atleast 1 UpperCase
              </span>
              <br />
              <span id="pswdLowerCase" className="pswdFactor">
                Atleast 1 LowerCase
              </span>
              <br />
              <span id="pswdNumber" className="pswdFactor">
                Atleast 1 Number
              </span>
              <br />
              <span id="pswdSpecialChar" className="pswdFactor">
                Atleast 1 Special character
              </span>
              <br />
              <span id="pswdMinChar" className="pswdFactor">
                Minimum 8 characters
              </span>
            </div>
          </div>
          <div className="dob-div m-2">
            <label>Date of Birth</label>
            <br />
            <input
              type="date"
              className="form-control"
              name="dob"
              id="dob"
              placeholder="Enter dob"
              onChange={(e) =>
                setUserData({ ...userData, dob: e.target.value })
              }
              onFocus={removeErrorMessage}
            />
            <span className="error text-danger" id="dobError"></span>
          </div>
          <div className="email-div m-2">
            <label>email</label>
            <br />
            <input
              type="text"
              className="form-control"
              name="email"
              id="email"
              placeholder="Enter email"
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
              onFocus={removeErrorMessage}
            />
            <span className="error text-danger" id="emailError"></span>
          </div>
          <div className="gender-div m-2">
            <label>Gender</label>
            <br />
            <input
              className="form-check-input"
              id="genderMale"
              type="radio"
              value="Male"
              name="gender"
              onClick={handleGender}
            />
            <label htmlFor="genderMale" className="ms-1">
              Male
            </label>
            &nbsp; &nbsp; &nbsp;
            <input
              className="form-check-input"
              id="genderFemale"
              type="radio"
              value="Female"
              name="gender"
              onClick={handleGender}
            />
            <label htmlFor="genderFemale" className="ms-1">
              Female
            </label>
            <br />
            <span className="error text-danger" id="genderError"></span>
          </div>
          <div className="phone-div m-2">
            <label>Phone Number(10 digits)</label>
            <br />
            <input
              type="text"
              className="form-control"
              name="phone"
              id="phone"
              placeholder="Enter phone number"
              onChange={(e) =>
                setUserData({ ...userData, phone: e.target.value })
              }
              onFocus={removeErrorMessage}
            />
            <span className="error text-danger" id="phoneError"></span>
          </div>
          <div className="address-div m-2">
            <label>Address</label>
            <br />
            <textarea
              rows="4"
              className="form-control"
              name="address"
              id="address"
              placeholder="Enter address"
              onChange={(e) =>
                setUserData({ ...userData, address: e.target.value })
              }
              onFocus={removeErrorMessage}
            />
            <span className="error text-danger" id="addressError"></span>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
