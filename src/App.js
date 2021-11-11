import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Navigation from "./Pages/Shared/Navigation/Navigation";
import AllCars from "./Pages/AllCars/AllCars";
import CarDetails from "./Pages/Shared/CarDetails/CarDetails";
import AuthProvider from "./contexts/AuthContext";
import PrivateRoute from "./PrivateRoutes/PrivateRoute/PrivateRoute";
import Dashboard from "./Pages/Dashborad/Dashboard";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
        <Navigation/>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/allcars">
              <AllCars></AllCars>
            </Route>
            <PrivateRoute path="/cardetails/:id">
              <CarDetails></CarDetails>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <SignUp></SignUp>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

// live site link: https://assingment-12.web.app/
