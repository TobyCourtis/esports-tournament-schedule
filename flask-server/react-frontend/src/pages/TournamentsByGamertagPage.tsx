import TournamentsTable from "../components/tournaments/TournamentsTable";
import {GetTournamentsByGamertag} from "../services/TournamentsClient";
import {ITournament} from '../types/TournamentTypes';
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";


interface IParamTypes {
    gamertag: string
}


function TournamentsByGamertagPage() {

    const [tournaments, setTournaments] = useState<ITournament[]>([]);
    const {gamertag} = useParams<IParamTypes>()


    useEffect(() => {
        async function fetchTournaments() {
            let response = await GetTournamentsByGamertag(gamertag)
            setTournaments(response)
        }

        fetchTournaments();
    }, [gamertag, setTournaments]);

    return (
        <div>
            <h1 className={'gamertag-heading'}>{gamertag}</h1>
            {
                tournaments.length > 0 ? <TournamentsTable tournaments={tournaments}/> :
                    <p>Oops, no tournaments found for that user!</p>
            }
        </div>
    )
}

export default TournamentsByGamertagPage;