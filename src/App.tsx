import { ReactElement } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";
// import styles from "./styles.module.scss";

function App(): ReactElement {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="*" component={Error404} />
      </Switch>
    </Router>
  );
}

export default App;
