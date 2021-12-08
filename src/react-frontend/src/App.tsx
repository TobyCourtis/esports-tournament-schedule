import './App.css';
import React from 'react';
import TournamentsPage from "./pages/Tournaments/TournamentsPage";
import TournamentsByGamertagPage from "./pages/Tournaments/TournamentsByGamertagPage";
import Header from "./components/general/Header";
import PageNotFound from "./components/general/PageNotFound";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import PlayersPage from "./pages/Players/PlayersPage";

function App() {

    return (
        <Router>
            <div className="App">
                {/*TODO add Link(s) to header*/}
                <Header/>


                <Switch>
                    <Route exact path="/" component={TournamentsPage}/>
                    <Route path="/players" component={PlayersPage}/>
                    <Route path="/:gamertag" children={<TournamentsByGamertagPage/>}/>
                    <Route path='*' exact={true} component={PageNotFound}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;