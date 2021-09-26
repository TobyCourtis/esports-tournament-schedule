import './App.css';
import React from 'react';
import TournamentsPage from "./pages/TournamentsPage";
import TournamentsByGamertagPage from "./pages/TournamentsByGamertagPage";
import Header from "./components/general/Header";
import PageNotFound from "./components/general/PageNotFound";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {

    return (
        <Router>
            <div className="App">
                {/*TODO add Link(s) to header*/}
                <Header/>


                <Switch>
                    <Route exact path="/" component={TournamentsPage}/>
                    <Route path="/:gamertag" children={<TournamentsByGamertagPage/>}/>
                    <Route path='*' exact={true} component={PageNotFound}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;