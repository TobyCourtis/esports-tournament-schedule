import {mockedPlayersEndpointResponse} from "./stubs/PlayersStub";
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