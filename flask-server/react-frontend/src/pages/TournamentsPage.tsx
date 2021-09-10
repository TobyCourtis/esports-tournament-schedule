import TournamentsTable from "../components/TournamentsTable";
import {GetTournaments} from "../services/tournamentsClient";
import {ITournament} from '../types/TournamentTypes';
import {useEffect, useState} from "react";

function TournamentsPage() {

    const [tournaments, setTournaments] = useState<ITournament[]>([]);

    useEffect(() => {
        async function fetchMyAPI() {
            let response = await GetTournaments()
            setTournaments(response)
        }

        fetchMyAPI();
    }, [setTournaments]);

    return tournaments ? <TournamentsTable tournaments={tournaments}/> : null
}

export default TournamentsPage;