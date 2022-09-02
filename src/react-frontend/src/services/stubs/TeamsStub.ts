import {ITeam} from "../../types/TeamTypes";

const teamsList: ITeam[] = [
    {
        "ID": 1,
        "name": "Faze",
        "website": "https://fazeclan.com/",
        "icon": "https://ssl.gstatic.com/onebox/media/sports/logos/esports/aZXUYsLsVgAb2NdWEESdzQ_64x64.png"
    },
    {
        "ID": 2,
        "name": "New York Subliners",
        "website": "https://subliners.callofdutyleague.com",
        "icon": ""
    },
    {
        "ID": 3,
        "name": "Complexity",
        "website": "https://complexity.gg/",
        "icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Complexity_Gaming_Logo_-_Blue.png/220px-Complexity_Gaming_Logo_-_Blue.png"
    },
    {
        "ID": 4,
        "name": "100 Thieves",
        "website": "https://100thieves.com/",
        "icon": "https://www.pngitem.com/pimgs/m/42-428595_100-thieves-logo-100-thieves-logo-png-transparent.png"
    },
    {
        "ID": 5,
        "name": "Optic Gaming",
        "website": "https://opticgaming.com/",
        "icon": "https://cdn.opticgaming.com/images/logos/optic-gaming-white.svg" // check this on white background
    },
    {
        "ID": 6,
        "name": "London Royal Ravens",
        "website": "https://royalravens.gg/",
        "icon": ""
    },
    {
        "ID": 7,
        "name": "Quadrant",
        "website": "https://quadrant.gg/",
        "icon": ""
    },
    {
        "ID": 8,
        "name": "XSET",
        "website": "https://xset.com/",
        "icon": ""
    },
    {
        "ID": 9,
        "name": "Fnatic",
        "website": "https://fnatic.com/",
        "icon": "https://upload.wikimedia.org/wikipedia/en/thumb/4/43/Esports_organization_Fnatic_logo.svg/1200px-Esports_organization_Fnatic_logo.svg.png"
    }];


function createBlob(input: any) {
    return new Blob([JSON.stringify(input, null, 2)], {type: 'application/json'});
}

function createStatus(code: number, text: string) {
    return {"status": code, "statusText": text};
}


export function mockGetTeamByName(teamName: string): Response {
    // case-insensitive team match
    let team = teamsList.find(team => team.name.toUpperCase() === teamName.toUpperCase())
    if (team) {
        return new Response(createBlob(team), createStatus(200, 'success'))
    }
    return new Response(createBlob(null), createStatus(400, 'Could not find team'))
}

export const mockedTeamsEndpointResponse: Response = new Response(createBlob(teamsList),
    createStatus(200, 'success'))