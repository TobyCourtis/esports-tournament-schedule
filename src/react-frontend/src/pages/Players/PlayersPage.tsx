import {GetPlayers} from "../../services/PlayersClient";
import {useEffect, useState} from "react";
import {IPlayer} from "../../types/PlayerTypes";
import PlayersTable from "../../components/players/PlayersTable";

function PlayersPage() {

    const [players, setPlayers] = useState<IPlayer[]>([]);

    useEffect(() => {
        async function fetchTournaments() {
            let response = await GetPlayers()
            setPlayers(response)
        }

        fetchTournaments();
    }, [setPlayers]);

    return players.length > 0 ?
        <PlayersTable players={players}/> : <p>No players found</p>
}

export default PlayersPage;