import { useState } from "react";
import { USERS } from "../MockData/users";

export const Search = () => {
  const [userData, setUserData] = useState([]);
  
  const handleSearch = (e) => {
    const inputText = e.target.value.trim();
    if (inputText === "") {
      setUserData([]);
    } else {
      setUserData(
        USERS.filter((user) =>
          user.first_name.toLowerCase().startsWith(inputText.toLowerCase())
        )
      );
    }
  };
  return (
    <>
      <div className="container mt-3 text-center">
        <input
          type="search"
          className="form-control"
          placeholder="Search names here..."
          onChange={handleSearch}
        />
      </div>
      <div className="mt-4">
        <ol>
          {userData.map((user, key) => (
            <li key={key}>
              {user.first_name} {user.last_name}
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};
