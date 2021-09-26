import {ITournament} from '../types/TournamentTypes';
import {mockedTournamentEndpointResponse} from './stubs/TournamentsStub'

export const GetTournaments = async (): Promise<ITournament[]> => {
    var data: Response | null;
    if (process.env.REACT_APP_STUBBED_RESPONSE === 'true') {
        console.log('Mocking /tournaments endpoint response')
        data = mockedTournamentEndpointResponse
    } else {
        data = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/tournaments`)
    }

    const dataJson: ITournament[] = await data.json()
    return dataJson
};

export const GetTournamentsByGamertag = async (gamertag: string): Promise<ITournament[]> => {
    var data: Response | null;
    if (process.env.REACT_APP_STUBBED_RESPONSE === 'true') {
        console.log('Mocking /tournaments/:gamertag endpoint response')
        data = mockedTournamentEndpointResponse
    } else {
        data = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/tournaments/${gamertag}`)
    }

    const dataJson: ITournament[] = await data.json()
    return dataJson
};
