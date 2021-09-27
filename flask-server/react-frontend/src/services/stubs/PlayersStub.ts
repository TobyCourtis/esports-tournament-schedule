import {IPlayer} from "../../types/PlayerTypes";

const playerList: IPlayer[] = [{
    "DOB": new Date("Tue, 25 May 1999 00:00:00 GMT"),
    "Earnings": "$138k",
    "FirstName": "Tom",
    "GamerTag": "Aydan",
    "ID": 1,
    "Image": "https://scheduler/images/1.jpg",
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
    "Image": "https://scheduler/images/2.jpg",
    "Organisation": "100 Thieves",
    "OrganisationLink": "https://100t.com",
    "Stream": "https://twitch.tv/rated",
    "Surname": "Jordan"
}, {
    "DOB": new Date("Wed, 25 Jun 1997 00:00:00 GMT"),
    "Earnings": "$0k",
    "FirstName": "James",
    "GamerTag": "FoolishProphet",
    "ID": 3,
    "Image": "https://scheduler/images/3.jpg",
    "Organisation": "Faze",
    "OrganisationLink": "https://faze.com",
    "Stream": "https://twitch.tv/aydan",
    "Surname": "Field"
}, {
    "DOB": new Date("Fri, 25 Apr 1997 00:00:00 GMT"),
    "Earnings": "$1k",
    "FirstName": "Toby",
    "GamerTag": "TOBYC",
    "ID": 4,
    "Image": "https://www.tobycourtis.com/wp-content/uploads/2020/02/Picture-Circle.png",
    "Organisation": "Faze",
    "OrganisationLink": "https://faze.com",
    "Stream": "https://twitch.tv/aydan",
    "Surname": "Courtis"
}];
const blob = new Blob([JSON.stringify(playerList, null, 2)], {type: 'application/json'});
const init = {"status": 200, "statusText": "Success"};
export const mockedPlayersEndpointResponse: Response = new Response(blob, init)