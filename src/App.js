import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddTutorial from "./components/add-tutorial.components";
import Tutorial from "./components/tutorial.components";
import TutorialsList from "./components/tutorial-list.components";

class App extends Component {
  render() {
    return (
     // <img src={https://www.google.com/search?q=ibm+logo&rlz=1C1RXQR_enIN967IN967&sxsrf=AOaemvIRt2ju15Ga2i7t4dhQcgwpgIy-Dw:1636366851637&tbm=isch&source=iu&ictx=1&fir=BFmIEYEEvaWx6M%252CT7BWyri1TsTuCM%252C_%253BFF0QaoCtdbbwLM%252Ccz89lLU9HDLmpM%252C_%253Btnho-_LQiyamdM%252CGdggJAa_uauH6M%252C_%253BZecjD05wHOIVeM%252C8yoF70g1WsTlNM%252C_%253BfCDsJTF8K32LBM%252CQlA1zF35VPN_lM%252C_%253B_FUcaYvBzSen2M%252C8yoF70g1WsTlNM%252C_%253B8a694NAy-XZkCM%252C8yoF70g1WsTlNM%252C_%253BtuKU5ucJPET4SM%252COqnVfJk9HkRprM%252C_%253B9nO_xzmOaNgZ4M%252CRnPvBhiOXJzsZM%252C_%253BPd-JuAxOjX40VM%252C8yoF70g1WsTlNM%252C_%253BbKyylfMGbwZDOM%252C8yoF70g1WsTlNM%252C_%253B7wbT-0A4jWTwoM%252Ccz89lLU9HDLmpM%252C_%253BrVZ_JlVYlPYS3M%252CHzlVUYfLvIZwJM%252C_%253BGwfVoHReCWWynM%252Cx8hY6suJ132C1M%252C_&vet=1&usg=AI4_-kQjphIPtbQmFvFAhVeih0HsZtos6A&sa=X&ved=2ahUKEwi_v6fHxYj0AhWnILcAHfYsBN0Q9QF6BAgBEAE#imgrc=BFmIEYEEvaWx6M} alt="Logo" />;
        <Router>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <Link to={"/tutorials"} className="navbar-brand">
              IBM
            </Link>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/tutorials"} className="nav-link">
                  Tutorials
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/add"} className="nav-link">
                  Add
                </Link>
              </li>
            </div>
          </nav>

          <div className="container mt-3">
            <Switch>
              <Route exact path={["/", "/tutorials"]} component={TutorialsList} />
              <Route exact path="/add" component={AddTutorial} />
              <Route path="/tutorials/:id" component={Tutorial} />
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
