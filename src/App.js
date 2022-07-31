
import React, { useState } from "react";
import "./styles.css";
const App = () => {
  const [users, setUser] = useState([]);
  const loadUsers = async () => {
    const response = await fetch("https://api.github.com/users");
    const jsonResponse = await response.json();
    setUser(jsonResponse);
  };

  return (
    <div className="App">
      <h1>Hello, Fetch Users</h1>
      <button onClick={loadUsers}>Fetch data </button>
      <table class="table">
        {users.map(({ id, login, avatar_url }) => (
          <><thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Avatar</th>
            </tr>
          </thead><tbody>
              <tr>
                <th scope="row" key={id} >1</th>
                <td>{login}</td>
                <td>{avatar_url}</td>
              </tr>
            </tbody></>
        ))}
      </table>
    </div>
  );
};
export default App;

