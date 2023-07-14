import './App.css';
import React from 'react';
import TournamentsPage from "./pages/Tournaments/TournamentsPage";
import TournamentsByGamertagPage from "./pages/Tournaments/TournamentsByGamertagPage";
import Header from "./components/general/Header";
import PageNotFound from "./components/general/PageNotFound";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import PlayersPage from "./pages/Players/PlayersPage";
import Example from "./components/Example";

function App() {

    return (
        <Router>
            <div className="App">
                <Header/>

                <Switch>
                    <Route exact path="/" component={TournamentsPage}/>
                    <Route path="/players" component={PlayersPage}/>
                    <Route path="/gamertag/:gamertag" children={<TournamentsByGamertagPage/>}/>
                    <Route path="/example" children={Example}/>
                    <Route path='*' exact={true} component={PageNotFound}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;