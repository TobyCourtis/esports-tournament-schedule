import {queryToTournaments} from './mapper.js'
import Tournament from "./tournament.js";


function mockQueryResponse() {
    return {
        "rowCount": 2,
        "fieldWeDoNotCareAbout": "here",
        "oid": null,
        "rows": [{
            tournamentid: 5,
            name: 'T0BYC Invitational',
            organisation: 'Twitch',
            organisationlink: 'https://twitch.com/t0byc',
            date: "2022-10-19T23:00:00.000Z",
            prizepool: '$500k',
            location: 'London, The Music Box',
            stream: 'https://twitch.tv/twitch_rivals',
            formatname: '2v2 Kill Race',
            formatlink: 'https://twitch.com/tournaments/rivals/2v2/rules'
        }]
    }
}


it('Transforms query response from postgres into tournament type', async () => {
    const postgresResponse = mockQueryResponse()

    const actualOutput = queryToTournaments(postgresResponse)

    expect(actualOutput[0]).toEqual(new Tournament(mockQueryResponse().rows[0]))
    expect(actualOutput[0]).toBeInstanceOf(Tournament)
})

it('Transforms query with no rows attribute to empty list', async () => {
    const postgresResponse = {noRowsAttribute: "nothing"}

    const actualOutput = queryToTournaments(postgresResponse)

    expect(actualOutput).toEqual([])
})