import {GetPlayers} from "../../services/PlayersClient";
import {useEffect, useState} from "react";
import {IPlayer} from "../../types/PlayerTypes";
import PlayersGrid from "../../components/players/PlayersGrid";

function PlayersPage() {

    const [players, setPlayers] = useState<IPlayer[]>([]);

    useEffect(() => {
        async function fetchPlayers() {
            let response = await GetPlayers()
            setPlayers(response)
        }

        fetchPlayers();
    }, [setPlayers]);

    return players.length > 0 ?
        <PlayersGrid players={players}/> : <p>No players found</p>
}

export default PlayersPage;