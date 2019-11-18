import React, { Component } from 'react';
import {BrowserRouter as Router ,Route, Switch,Link} from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import App from "./App";
import Login from "./Login/index";

class Page extends Component{

    render() {
        return (
            <div>

              <Router>
                  <Switch>
                      {/*<Route exact path="/"  component={Login} />*/}
                      <Route  path="/login"  component={Login} />
                      <PrivateRoute path="/" >
                          <App />
                      </PrivateRoute>
                  </Switch>
              </Router>
            </div>
        );
    }
}

export default Page;
