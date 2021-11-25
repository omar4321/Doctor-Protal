import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './page/homes/home/Home';
import Appointment from './page/Apointment/Apointment/Appointment.js';
import Login from './page/Login/login/Login';
import Register from './page/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './page/Login/PrivateRoute/PrivateRoute';
import Dashboard from './page/Dashboard/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <PrivateRoute exact path="/appointment">
              <Appointment> </Appointment>
            </PrivateRoute>
            <PrivateRoute exact path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route exact path="/login">
              <Login> </Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
