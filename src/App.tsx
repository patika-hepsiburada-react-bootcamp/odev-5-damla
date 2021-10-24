import { ReactElement } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { TodoProvider } from "./contexts/TodoContext";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";

function App(): ReactElement {
  return (
    <TodoProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="*" component={Error404} />
        </Switch>
      </Router>
    </TodoProvider>
  );
}

export default App;
