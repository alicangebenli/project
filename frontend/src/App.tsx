import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {Login} from "./pages/Login";
import {Register} from "./pages/Register";
import {Dashboard} from "./pages/Dashboard";
import {Profile} from "./pages/Profile";
import {Students} from "./pages/Students";

function App() {
  return (
    <div className="App">
        <Router>
            <div>
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route path="/profile">
                        <Profile />
                    </Route>
                    <Route path="/students">
                        <Students />
                    </Route>
                </Switch>
            </div>
        </Router>
    </div>
  );
}

export default App;
