import './App.css';
import React from 'react';
import TournamentsPage from "./pages/TournamentsPage";
import Header from "./components/general/Header";

function App() {

    return (
        <div className="App">
            <Header />
            <TournamentsPage/>
        </div>
    );
}

export default App;