import TournamentsTable from "../../components/tournaments/TournamentsTable";
import {GetTournamentsByGamertag} from "../../services/TournamentsClient";
import {ITournament} from '../../types/TournamentTypes';
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {IPlayer} from "../../types/PlayerTypes";
import {GetPlayerByGamertag} from "../../services/PlayersClient";
import './TournamentsByGamertagPage.css'


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
            let playerResponse = await GetPlayerByGamertag(gamertag)
            setPlayer(playerResponse)

            if (playerResponse) {
                fetchTournaments()
            }
        }

        fetchPlayer();
    }, [gamertag, setTournaments]);

    return (
        <div>
            {player ?
                <div className={'player-info-div'}>
                    {player.Image ? <img src={player.Image} className={'player-image'} alt={'player-img'}/> : null}
                    <h1 className={'player-gamertag-heading'}>{player.GamerTag}</h1>
                </div> : null
            }
            {
                tournaments.length > 0 && player ? <TournamentsTable tournaments={tournaments}/> :
                    <p>Oops, no tournaments found for that user!</p>
            }
        </div>
    )
}

export default TournamentsByGamertagPage;