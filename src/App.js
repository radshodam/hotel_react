import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes";
import {Navbar} from "./components/Navbar";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        {/* <Route exact path={"/"} component={Home} /> */}

        {routes.map(({ containerPath, name, path }) => (
          <Route key={name} exact path={path}>
            {(props) => {
              let Container = require(`${containerPath}`).default;
              return (
                <>
                  <div>
                    <Container {...props} />
                  </div>
                </>
              );
            }}
          </Route>
        ))}
      </Switch>
    </Router>
  );
};

export default App;
