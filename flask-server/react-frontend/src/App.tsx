import './App.css';
import React from 'react';
import TournamentsPage from "./pages/TournamentsPage";
import Header from "./components/general/Header";
import PageNotFound from "./components/general/PageNotFound";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {

    return (
        <Router>
            <div className="App">
                <Header/>


                <Switch>
                    <Route exact path="/" component={TournamentsPage}/>
                    <Route path="/gamertag">
                        <p className={'test-div'}>WIP Player information here</p>
                    </Route>
                    <Route path='*' exact={true} component={PageNotFound}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;