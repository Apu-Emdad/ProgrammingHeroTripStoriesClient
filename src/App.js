import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import AuthProvider from "./Components/Context/AuthProvider";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import ExploreItems from "./Components/Explore/ExploreItems/ExploreItems";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home/Home";
import ServiceDetail from "./Components/Home/ServiceDetail/ServiceDetail";
import Login from "./Components/Login/Login/Login";
import Notfound from "./Components/Notfound/Notfound";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Purchase from "./Components/Purchase/Purchase";
import Register from "./Components/Register/Register";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/explore">
              <ExploreItems></ExploreItems>
            </Route>
            <Route path="/services/:serviceId">
              <ServiceDetail></ServiceDetail>
            </Route>

            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/purchase/:purchaseId">
              <Purchase></Purchase>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
