import TournamentsTable from "../components/Tournaments/TournamentsTable";
import {GetTournaments} from "../services/TournamentsClient";
import {ITournament} from '../types/TournamentTypes';
import {useEffect, useState} from "react";

function TournamentsPage() {

    const [tournaments, setTournaments] = useState<ITournament[]>([]);

    useEffect(() => {
        async function fetchTournaments() {
            let response = await GetTournaments()
            setTournaments(response)
        }

        fetchTournaments();
    }, [setTournaments]);

    return tournaments ? <TournamentsTable tournaments={tournaments}/> : null
}

export default TournamentsPage;