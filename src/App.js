import { useSelector } from "react-redux";
import "./styles.css";
import {
  Header,
  Register,
  Login,
  Home,
  Search,
  Downloads,
  News
} from "./Components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const loginSuccess = useSelector((state) => state.loginStatus.loginSuccess);

  if (loginSuccess) {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route path="/search" component={Search} />
            <Route path="/downloads" component={Downloads} />
            <Route path="/news" component={News} />
          </Switch>
        </div>
      </Router>
    );
  } else {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
