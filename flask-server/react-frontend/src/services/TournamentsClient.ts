import {ITournament} from '../types/TournamentTypes';

export const GetTournaments = async (): Promise<ITournament[]> => {
    var data: Response | null;
    if (process.env.REACT_APP_STUBBED_RESPONSE === 'true') {
        console.log('Mocking /tournaments endpoint response')
        data = mockedTournamentEndpointResponse
    } else {
        data = await fetch('http://localhost:5000/tournaments')
    }

    const dataJson: ITournament[] = await data.json()
    return dataJson
};


const tournamentsList: ITournament[] = [
    {
        "Date": new Date("Mon, 20 Sep 2021 00:00:00 GMT"),
        "FormatLink": "https://twitch.com/tournaments/rivals/2v2/rules",
        "FormatName": "2v2",
        "ID": 1,
        "Location": "London, Oxford Street",
        "Name": "Twitch Rivals",
        "Organisation": "Twitch",
        "OrganisationLink": "https://twitch.com/about",
        "PrizePool": "$100k",
        "Stream": "https://twitch.tv/twitch_rivals"
    }, {
        "Date": new Date("Tue, 21 Sep 2021 00:00:00 GMT"),
        "FormatLink": "https://hpomen.com/warzone/rules",
        "FormatName": "Custom Quads",
        "ID": 2,
        "Location": "Stockholm",
        "Name": "HP Omen",
        "Organisation": "HP",
        "OrganisationLink": "https://hp.com/about",
        "PrizePool": "$200k",
        "Stream": "https://twitch.tv/hp_omen"
    }, {
        "Date": new Date("Mon, 23 Aug 2021 00:00:00 GMT"),
        "FormatLink": "https://faze.com/tournaments/rivals/2v2/rules",
        "FormatName": "2v2",
        "ID": 4,
        "Location": "London, Oxford Street",
        "Name": "Faze",
        "Organisation": "faze",
        "OrganisationLink": "https://faze.com/about",
        "PrizePool": "$100k",
        "Stream": "https://faze.tv/faze_rivals"
    }, {
        "Date": new Date("Tue, 24 Aug 2021 00:00:00 GMT"),
        "FormatLink": "https://optic.com/tournaments/rivals/2v2/rules",
        "FormatName": "2v2",
        "ID": 5,
        "Location": "London, Oxford Street",
        "Name": "Optic Showdown",
        "Organisation": "optic",
        "OrganisationLink": "https://optic.com/about",
        "PrizePool": "$100k",
        "Stream": "https://optic.tv/optic_rivals"
    }, {
        "Date": new Date("Wed, 20 Oct 2021 00:00:00 GMT"),
        "FormatLink": "https://twitch.com/tournaments/rivals/2v2/rules",
        "FormatName": "2v2 Kill Race",
        "ID": 6,
        "Location": "London, The Music Box",
        "Name": "T0BYC Invitational",
        "Organisation": "Twitch",
        "OrganisationLink": "https://twitch.com/t0byc",
        "PrizePool": "$500k",
        "Stream": "https://twitch.tv/twitch_rivals"
    }, {
        "Date": new Date("Wed, 22 Sep 2021 00:00:00 GMT"),
        "FormatLink": "https://huskkers.com/tournaments/rivals/2v2/rules",
        "FormatName": "2v2",
        "ID": 3,
        "Location": "London, Oxford Street",
        "Name": "Huskkers $50k",
        "Organisation": "Huskkers",
        "OrganisationLink": "https://twitch.com/about",
        "PrizePool": "$50k",
        "Stream": "https://twitch.tv/huskkers"
    }
];
const blob = new Blob([JSON.stringify(tournamentsList, null, 2)], {type: 'application/json'});
const init = {"status": 200, "statusText": "SuperSmashingGreat!"};
const mockedTournamentEndpointResponse: Response = new Response(blob, init)