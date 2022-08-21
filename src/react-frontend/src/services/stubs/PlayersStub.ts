import {IPlayer} from "../../types/PlayerTypes";

const playerList: IPlayer[] = [
{
    "DOB": new Date("Wed, 25 Jun 1997 00:00:00 GMT"),
    "Earnings": "$0k",
    "FirstName": "James",
    "GamerTag": "FoolishProphet",
    "ID": 3,
    "Image": "",
    "Organisation": "Faze",
    "OrganisationLink": "https://faze.com",
    "Stream": "https://twitch.tv/aydan",
    "Surname": "Field"
},
{
    "DOB": new Date("Fri, 25 Apr 1997 00:00:00 GMT"),
    "Earnings": "$1k",
    "FirstName": "Toby",
    "GamerTag": "TOBYC",
    "ID": 4,
    "Image": "",
    "Organisation": "Faze",
    "OrganisationLink": "https://faze.com",
    "Stream": "https://twitch.tv/aydan",
    "Surname": "Courtis"
},
{
    "DOB": new Date("Fri, 25 Apr 1997 00:00:00 GMT"),
    "Earnings": "$1k",
    "FirstName": "Dan",
    "GamerTag": "Dan",
    "ID": 5,
    "Image": "",
    "Organisation": "Faze",
    "OrganisationLink": "https://faze.com",
    "Stream": "https://twitch.tv/aydan",
    "Surname": "Clough"
},
{
    "DOB": new Date("Fri, 25 Apr 1997 00:00:00 GMT"),
    "Earnings": "$1k",
    "FirstName": "Rahat",
    "GamerTag": "Rahat",
    "ID": 6,
    "Image": "",
    "Organisation": "Faze",
    "OrganisationLink": "https://faze.com",
    "Stream": "https://twitch.tv/aydan",
    "Surname": "Choudhury"
},
{
    "DOB": new Date("Tue, 25 May 1999 00:00:00 GMT"),
    "Earnings": "$138k",
    "FirstName": "Tom",
    "GamerTag": "Aydan",
    "ID": 1,
    "Image": "https://static.wikia.nocookie.net/cod_esports_gamepedia_en/images/d/d2/NYSL_Aydan.png",
    "Organisation": "Faze",
    "OrganisationLink": "https://faze.com",
    "Stream": "https://twitch.tv/aydan",
    "Surname": "Smith"
}, {
    "DOB": new Date("Thu, 25 Mar 1999 00:00:00 GMT"),
    "Earnings": "$101k",
    "FirstName": "Will",
    "GamerTag": "Rated",
    "ID": 2,
    "Image": "https://static.wikia.nocookie.net/cod_esports_gamepedia_en/images/7/7e/100T_Rated.png",
    "Organisation": "100 Thieves",
    "OrganisationLink": "https://100t.com",
    "Stream": "https://twitch.tv/rated",
    "Surname": "Jordan"
},
{
    "DOB": new Date("Fri, 25 Apr 1997 00:00:00 GMT"),
    "Earnings": "$1k",
    "FirstName": "Phil",
    "GamerTag": "Phil",
    "ID": 7,
    "Image": "",
    "Organisation": "Faze",
    "OrganisationLink": "https://faze.com",
    "Stream": "https://twitch.tv/aydan",
    "Surname": "Hodgson"
},
{
    "DOB": new Date("Fri, 25 Apr 1997 00:00:00 GMT"),
    "Earnings": "$1k",
    "FirstName": "John",
    "GamerTag": "John",
    "ID": 7,
    "Image": "",
    "Organisation": "Faze",
    "OrganisationLink": "https://faze.com",
    "Stream": "https://twitch.tv/aydan",
    "Surname": "Hodgson"
},
{
    "DOB": new Date("Fri, 25 Apr 1997 00:00:00 GMT"),
    "Earnings": "$1k",
    "FirstName": "Nigel",
    "GamerTag": "Nigel",
    "ID": 7,
    "Image": "",
    "Organisation": "Faze",
    "OrganisationLink": "https://faze.com",
    "Stream": "https://twitch.tv/aydan",
    "Surname": "Hodgson"
},
{
    "DOB": new Date("Fri, 25 Apr 1997 00:00:00 GMT"),
    "Earnings": "$1k",
    "FirstName": "Tristan",
    "GamerTag": "Tristan",
    "ID": 7,
    "Image": "",
    "Organisation": "Faze",
    "OrganisationLink": "https://faze.com",
    "Stream": "https://twitch.tv/aydan",
    "Surname": "Hodgson"
},
{
    "DOB": new Date("Fri, 25 Apr 1997 00:00:00 GMT"),
    "Earnings": "$1k",
    "FirstName": "Tim",
    "GamerTag": "Tim",
    "ID": 7,
    "Image": "",
    "Organisation": "Faze",
    "OrganisationLink": "https://faze.com",
    "Stream": "https://twitch.tv/aydan",
    "Surname": "Hodgson"
},
{
    "DOB": new Date("Fri, 25 Apr 1997 00:00:00 GMT"),
    "Earnings": "$1k",
    "FirstName": "Max",
    "GamerTag": "Mzizli",
    "ID": 7,
    "Image": "",
    "Organisation": "Faze",
    "OrganisationLink": "https://faze.com",
    "Stream": "https://twitch.tv/aydan",
    "Surname": "Courtis"
},
{
    "DOB": new Date("Fri, 25 Apr 1997 00:00:00 GMT"),
    "Earnings": "$1k",
    "FirstName": "Tom",
    "GamerTag": "Chargey4",
    "ID": 7,
    "Image": "",
    "Organisation": "Faze",
    "OrganisationLink": "https://faze.com",
    "Stream": "https://twitch.tv/aydan",
    "Surname": "Charge"
},
{
    "DOB": new Date("Fri, 25 Apr 1997 00:00:00 GMT"),
    "Earnings": "$1k",
    "FirstName": "Tom",
    "GamerTag": "Tommey",
    "ID": 7,
    "Image": "https://static.wikia.nocookie.net/cod_esports_gamepedia_en/images/c/c4/Tommey_CDL_2020.png",
    "Organisation": "Faze",
    "OrganisationLink": "https://faze.com",
    "Stream": "https://twitch.tv/aydan",
    "Surname": "Trewren"
}];


function createBlob(input: any) {
    return new Blob([JSON.stringify(input, null, 2)], {type: 'application/json'});
}

function createStatus(code: number, text: string) {
    return {"status": code, "statusText": text};
}


export function mockGetPlayerByGamertag(gamertag: string): Response {
    // case insensitive gamertag match
    let player = playerList.find(player => player.GamerTag.toUpperCase() === gamertag.toUpperCase())
    if (player) {
        return new Response(createBlob(player), createStatus(200, 'success'))
    }
    return new Response(createBlob(null), createStatus(400, 'Could not find gamertag'))
}

export const mockedPlayersEndpointResponse: Response = new Response(createBlob(playerList),
    createStatus(200, 'success'))