import TournamentsTable from "../../components/tournaments/TournamentsTable";
import {GetTournamentsByGamertag} from "../../services/TournamentsClient";
import {ITournament} from '../../types/TournamentTypes';
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {IPlayer} from "../../types/PlayerTypes";
import {GetPlayerByGamertag} from "../../services/PlayersClient";


interface IParamTypes {
    gamertag: string
}


function TournamentsByGamertagPage() {

    const [tournaments, setTournaments] = useState<ITournament[]>([]);
    const [player, setPlayer] = useState<IPlayer | null>(null);
    const {gamertag} = useParams<IParamTypes>()


    useEffect(() => {
        async function fetchTournaments() {
            console.log('Fetching tournaments for: ' + gamertag)
            let response = await GetTournamentsByGamertag(gamertag)
            setTournaments(response)
        }

        async function fetchPlayer() {
            console.log('Fetching player information for: ' + gamertag)
            let playerResponse = await GetPlayerByGamertag(gamertag)
            setPlayer(playerResponse)
        }

        fetchTournaments();
        fetchPlayer();
    }, [gamertag, setTournaments]);

    return (
        <div>
            <h1 className={'gamertag-heading'}>{player ? player.GamerTag : gamertag}</h1>
            {
                tournaments.length > 0 ? <TournamentsTable tournaments={tournaments}/> :
                    <p>Oops, no tournaments found for that user!</p>
            }
        </div>
    )
}

export default TournamentsByGamertagPage;