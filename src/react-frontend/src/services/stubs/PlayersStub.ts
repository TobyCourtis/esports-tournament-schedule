import {IPlayer} from "../../types/PlayerTypes";

const playerList: IPlayer[] = [
    {
        "ID": 1,
        "FirstName": "Liam",
        "Surname": "James",
        "GamerTag": "Jukeyz",
        "DOB": new Date("07 Feb 2000 00:00:00 GMT"),
        "teamID": 6,
        "Stream": "https://www.twitch.tv/jukeyz",
        "Image": "https://static.wikia.nocookie.net/cod_esports_gamepedia_en/images/5/56/Jukeyz_2020.png",
        "Earnings": "$215k",
        "Country": "England"
    },
    {
        "ID": 2,
        "DOB": new Date("23 Sep 2001 00:00:00 GMT"),
        "Earnings": "$201k",
        "FirstName": "Ethan",
        "GamerTag": "Fifakill",
        "Surname": "Pink",
        "Image": "https://static.wikia.nocookie.net/cod_esports_gamepedia_en/images/7/78/Fifakill.png",
        "teamID": 7,
        "Stream": "https://www.twitch.tv/fifakillvizualz",
        "Country": "England"
    },
    {
        "DOB": new Date("23 Dec 1997 00:00:00 GMT"),
        "Earnings": "$173k",
        "FirstName": "Zack",
        "GamerTag": "ZLaner",
        "ID": 3,
        "Image": "https://static.wikia.nocookie.net/cod_esports_gamepedia_en/images/1/1a/ZLaner.png",
        "teamID": 5,
        "Stream": "https://www.facebook.com/ZLaner",
        "Surname": "Lane",
        "Country": "Canada"
    },
    {
        "ID": 4,
        "DOB": new Date("04 Oct 1995 00:00:00 GMT"),
        "Earnings": "$389k",
        "FirstName": "Jordan",
        "GamerTag": "HusKerrs",
        "Surname": "Thomas",
        "Image": "https://static.wikia.nocookie.net/cod_esports_gamepedia_en/images/d/d5/HusKerrs_NRG_2020.png",
        "teamID": null,
        "Stream": "https://www.twitch.tv/huskerrs",
        "Country": "United States"
    },
    {
        "DOB": new Date("22 Oct 2002 00:00:00 GMT"),
        "Earnings": "$235k",
        "FirstName": "Diaz",
        "GamerTag": "Biffle",
        "ID": 5,
        "Image": "",
        "teamID": 3,
        "Stream": "https://twitch.tv/diazbiffle",
        "Surname": "Biffle",
        "Country": "United States"
    },
    {
        "DOB": new Date("25 Apr 1999 00:00:00 GMT"),
        "Earnings": "$563k",
        "FirstName": "Aydan",
        "GamerTag": "Aydan",
        "ID": 6,
        "Image": "https://static.wikia.nocookie.net/cod_esports_gamepedia_en/images/d/d2/NYSL_Aydan.png",
        "teamID": 2,
        "Stream": "https://twitch.tv/aydan",
        "Surname": "Conrad",
        "Country": "United Kingdom"
    },
    {
        "DOB": new Date("Fri, 25 Apr 1997 00:00:00 GMT"),
        "Earnings": "$500",
        "FirstName": "Toby",
        "GamerTag": "TOBYC",
        "ID": 7,
        "Image": "",
        "teamID": null,
        "Stream": "https://twitch.tv/t0byc",
        "Surname": "Courtis",
        "Country": "England"
    },
    {
        "DOB": new Date("8 Nov 1995 00:00:00 GMT"),
        "Earnings": "$498k",
        "FirstName": "Rhys",
        "GamerTag": "Rated",
        "ID": 8,
        "Image": "https://static.wikia.nocookie.net/cod_esports_gamepedia_en/images/7/7e/100T_Rated.png",
        "teamID": 4,
        "Stream": "https://twitch.tv/rated",
        "Surname": "Price",
        "Country": "Wales"
    },
    {
        "DOB": new Date("15 Oct 1999 00:00:00 GMT"),
        "Earnings": "$500",
        "FirstName": "Max",
        "GamerTag": "Mzizli",
        "ID": 9,
        "Image": "",
        "teamID": null,
        "Stream": "https://twitch.tv/aydan",
        "Surname": "Courtis",
        "Country": "England"
    },
    {
        "DOB": new Date("25 Apr 2000 00:00:00 GMT"),
        "Earnings": "$500",
        "FirstName": "Tom",
        "GamerTag": "Chargey4",
        "ID": 10,
        "Image": "",
        "teamID": null,
        "Stream": "https://twitch.tv/aydan",
        "Surname": "Charge",
        "Country": "England"
    },
    {
        "DOB": new Date("07 Sep 1992 00:00:00 GMT"),
        "Earnings": "$579k",
        "FirstName": "Thomas",
        "GamerTag": "Tommey",
        "ID": 11,
        "Image": "https://static.wikia.nocookie.net/cod_esports_gamepedia_en/images/c/c4/Tommey_CDL_2020.png",
        "teamID": 4,
        "Stream": "https://twitch.tv/tommey",
        "Surname": "Trewren",
        "Country": "England"
    },
    {
        "DOB": new Date("26 Dec 1994 00:00:00 GMT"),
        "Earnings": "$457k",
        "FirstName": "Dennis",
        "GamerTag": "Cloakzy",
        "Surname": "Lepore",
        "ID": 12,
        "Image": "https://static.wikia.nocookie.net/cod_esports_gamepedia_en/images/8/8e/Cloakzy.png",
        "teamID": 3,
        "Stream": "https://twitch.tv/cloakzy",
        "Country": "United States"
    },
    {
        "DOB": new Date("26 Dec 1994 00:00:00 GMT"),
        "Earnings": "$294k",
        "FirstName": "Evan",
        "GamerTag": "SuperEvan",
        "Surname": "Moore",
        "ID": 13,
        "Image": "https://static.wikia.nocookie.net/cod_esports_gamepedia_en/images/8/83/SuperEvan.png",
        "teamID": 8,
        "Stream": "https://twitch.tv/superevan",
        "Country": "United States"
    },
    {
        "DOB": new Date("27 Aug 1999 00:00:00 GMT"),
        "Earnings": "$99k",
        "FirstName": "Ean",
        "GamerTag": "Booya",
        "Surname": "Chase",
        "ID": 14,
        "Image": "https://static.wikia.nocookie.net/cod_esports_gamepedia_en/images/2/27/Booya.png",
        "teamID": 1,
        "Stream": "https://twitch.tv/gd_booya",
        "Country": "United States"
    },
    {
        "DOB": new Date("30 Jun 1995 00:00:00 GMT"),
        "Earnings": "$1.2M",
        "FirstName": "Seth",
        "GamerTag": "Scump",
        "Surname": "Abner",
        "ID": 15,
        "Image": "https://static.wikia.nocookie.net/cod_esports_gamepedia_en/images/5/55/Scump_CDL_2021.png",
        "teamID": 5,
        "Stream": "https://twitch.tv/scump",
        "Country": "United States"
    },
    {
        "DOB": new Date("21 Nov 1990 00:00:00 GMT"),
        "Earnings": "$188k",
        "FirstName": "Nick",
        "GamerTag": "Nickmercs",
        "Surname": "Kolcheff",
        "ID": 16,
        "Image": "https://static.wikia.nocookie.net/cod_esports_gamepedia_en/images/3/35/NICKMERCS_FaZe.png",
        "teamID": 1,
        "Stream": "https://twitch.tv/nickmercs",
        "Country": "United States"
    },
    {
        "DOB": new Date("08 Apr 1990 00:00:00 GMT"),
        "Earnings": "$56k",
        "FirstName": "Tim",
        "GamerTag": "TimTheTatman",
        "Surname": "Betar",
        "ID": 17,
        "Image": "https://static.wikia.nocookie.net/cod_esports_gamepedia_en/images/7/76/CoL_TimTheTatman_2021.png",
        "teamID": 3,
        "Stream": "https://www.youtube.com/user/timthetatman",
        "Country": "United States"
    },
    {
        "DOB": new Date("16 Oct 1997 00:00:00 GMT"),
        "Earnings": "$148k",
        "FirstName": "Joseph",
        "GamerTag": "JoeWo",
        "Surname": "Wohala",
        "ID": 18,
        "Image": "https://static.wikia.nocookie.net/cod_esports_gamepedia_en/images/9/99/JoeWo.png",
        "teamID": null,
        "Stream": "https://twitch.tv/joewo",
        "Country": "United States"
    },
    {
        "DOB": new Date("21 Dec 1999 00:00:00 GMT"),
        "Earnings": "$270k",
        "FirstName": "Mason",
        "GamerTag": "Symfuhny",
        "Surname": "Lanier",
        "ID": 19,
        "Image": "https://static.wikia.nocookie.net/cod_esports_gamepedia_en/images/d/d0/Symfuhny_ProAm_2019.png",
        "teamID": null,
        "Stream": "https://twitch.tv/symfuhny",
        "Country": "United States"
    },
    {
        "DOB": new Date("21 Dec 1999 00:00:00 GMT"),
        "Earnings": "$270k",
        "FirstName": "Dario",
        "GamerTag": "Moonryde",
        "Surname": "Ferracci",
        "ID": 20,
        "Image": "",
        "teamID": null,
        "Stream": "https://twitch.tv/moonryde",
        "Country": "Italy"
    }];


function createBlob(input: any) {
    return new Blob([JSON.stringify(input, null, 2)], {type: 'application/json'});
}

function createStatus(code: number, text: string) {
    return {"status": code, "statusText": text};
}


export function mockGetPlayerByGamertag(gamertag: string): Response {
    // case-insensitive gamertag match
    let player = playerList.find(player => player.GamerTag.toUpperCase() === gamertag.toUpperCase())
    if (player) {
        return new Response(createBlob(player), createStatus(200, 'success'))
    }
    return new Response(createBlob(null), createStatus(400, 'Could not find gamertag'))
}

export const mockedPlayersEndpointResponse: Response = new Response(createBlob(playerList),
    createStatus(200, 'success'))