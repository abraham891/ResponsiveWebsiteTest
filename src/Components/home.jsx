import { useDispatch, useSelector } from "react-redux";
import { loginStatus } from "../Redux/actions";
import "../css/home.css";
import { useHistory } from "react-router-dom";

export const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userData = useSelector((state) => state.register.userDetails);
  const { name, username, dob, email, gender, phone, address } = userData;
  const handleLogOut = () => {
    dispatch(loginStatus(false));
    history.push("/login");
  };

  return (
    <>
      <div className="container mt-5 text-center">
        <h3>
          <b>Hello {username}</b>
        </h3>
        <div className="mt-5">
          <table className="table table-striped border table-bordered text-start">
            <tr>
              <th>Name</th>
              <td>{name}</td>
            </tr>
            <tr>
              <th>Username</th>
              <td>{username}</td>
            </tr>
            <tr>
              <th>Date of Birth</th>
              <td>{dob}</td>
            </tr>
            <tr>
              <th>Email ID</th>
              <td>{email}</td>
            </tr>
            <tr>
              <th>Gender</th>
              <td>{gender}</td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>{phone}</td>
            </tr>
            <tr>
              <th>Address</th>
              <td>{address}</td>
            </tr>
          </table>
        </div>
        <button className="mt-5 btn btn-success" onClick={handleLogOut}>
          Logout
        </button>
      </div>
    </>
  );
};
