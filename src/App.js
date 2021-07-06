import "./styles.css";
import { Header, Register, Login, Home, Search } from "./Components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

export default function App() {
  const [loginSuccess, setLoginSuccess] = useState(false);
  const onLoginStatusChange = (booleanValue) => setLoginSuccess(booleanValue);
  if (loginSuccess) {
    return (
      <Router>
        <div className="App">
          <Header loginSuccess={loginSuccess} />
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route path="/search" component={Search} />
          </Switch>
        </div>
      </Router>
    );
  } else {
    return (
      <Router>
        <div className="App">
          <Header loginSuccess={loginSuccess} />
          <Switch>
            <Route exact path="/">
              <Register />
            </Route>
            <Route path="/login">
              <Login loginStatusChange={onLoginStatusChange} />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
