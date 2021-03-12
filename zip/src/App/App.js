import React from "react";
import { Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { history } from "../_helpers";
import { alertActions } from "../_actions";
import { PrivateRoute } from "../_components";
import { HomePage } from "../Pages/HomePage";
import { LoginPage } from "../Pages/LoginPage";
import { ProfessionalForm } from "../Pages/ProfessionalForm/ProfessionalForm";
import "antd/dist/antd.css";
import "./App.css";

 
 
class App extends React.Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }
  render() {
    const { alert ,authentication} = this.props;
    //console.log(authentication)
    return (
      <Router history={history}>
        <div>
          <PrivateRoute exact path="/" component={authentication && authentication.user && authentication.user.role ==='2'?ProfessionalForm:HomePage} />
          <PrivateRoute exact path="/ProfessionalForm" component={ProfessionalForm} />
          <Route path="/login" component={LoginPage} />
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  const { alert,authentication } = state;
  return {
    alert,
    authentication
  };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
