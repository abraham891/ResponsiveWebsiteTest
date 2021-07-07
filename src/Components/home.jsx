import { useSelector } from "react-redux";
import "../css/home.css";

export const Home = () => {
  const userData = useSelector((state) => state.register.userDetails);
  const { name, username, email, phone } = userData;

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
              <th>Email ID</th>
              <td>{email}</td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>{phone}</td>
            </tr>
          </table>
        </div>
        <button className="mt-5 btn btn-success">Logout</button>
      </div>
    </>
  );
};
