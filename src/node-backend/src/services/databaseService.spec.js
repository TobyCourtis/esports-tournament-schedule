import {getTournaments} from './databaseService'
import * as pg from 'pg';
import Tournament from "./tournament.js";

const {Pool} = pg;

jest.mock('pg', () => {
    const mPool = {
        connect: jest.fn(),
        query: jest.fn(),
        end: jest.fn(),
    };
    return {Pool: jest.fn(() => mPool)};
});

function mockTournaments() {
    return [{
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
    },
        {
            tournamentid: 6,
            name: 'AYDAN Invitational',
            organisation: 'Twitch',
            organisationlink: 'https://twitch.com/aydan',
            date: "2022-10-19T23:00:00.000Z",
            prizepool: '$500k',
            location: 'London, The Music Box',
            stream: 'https://twitch.tv/twitch_rivals',
            formatname: '2v2 Kill Race',
            formatlink: 'https://twitch.com/tournaments/rivals/2v2/rules'
        }]
}

describe('Database Service Tests', () => {
    let pool;
    beforeEach(() => {
        pool = new Pool();
    });
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('queries tournaments with correct select statement', async () => {
        pool.query.mockResolvedValueOnce('any_response');

        const res = await getTournaments();

        expect(pool.query).toBeCalledWith('SELECT * FROM tournaments;');
        expect(pool.end).toBeCalledTimes(0);
    })

    it('Transforms query response into tournament type', async () => {
        pool.query.mockResolvedValueOnce({
            rows: mockTournaments(),
            anotherField: 'any data',
            fields: 'any data'
        });


        const res = await getTournaments();


        expect(pool.query).toBeCalledWith('SELECT * FROM tournaments;')
        expect(pool.end).toBeCalledTimes(0)
        // expect type to be just the tournament rows
        expect(res[0]).toBeInstanceOf(Tournament)
    })
});