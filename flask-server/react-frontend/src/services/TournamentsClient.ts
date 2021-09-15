import {ITournament} from '../types/TournamentTypes';

export const GetTournaments = async (): Promise<ITournament[]> => {
    const data = await fetch('http://localhost:5000/tournaments')
    const dataJson: ITournament[] = await data.json();
    return dataJson
};