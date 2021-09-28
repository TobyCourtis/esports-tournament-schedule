import {mockedPlayersEndpointResponse, mockGetPlayerByGamertag} from "./stubs/PlayersStub";
import {IPlayer} from "../types/PlayerTypes";

export const GetPlayers = async (): Promise<IPlayer[]> => {
    var data: Response | null;
    if (process.env.REACT_APP_STUBBED_RESPONSE === 'true') {
        console.log('Mocking /players endpoint response')
        data = mockedPlayersEndpointResponse
    } else {
        data = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/players`)
    }

    const dataJson: IPlayer[] = await data.json()
    return dataJson
};

export const GetPlayerByGamertag = async (gamertag: string): Promise<IPlayer | null> => {
    var data: Response | null;
    if (process.env.REACT_APP_STUBBED_RESPONSE === 'true') {
        console.log('Mocking /players endpoint response')
        data = mockGetPlayerByGamertag(gamertag)
    } else {
        data = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/players/${gamertag}`)
    }

    if (data.status === 400) {
        return null
    }
    const dataJson: IPlayer = await data.json()
    return dataJson
};