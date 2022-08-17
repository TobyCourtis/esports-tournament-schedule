import pkg from 'pg';

const {Pool, Client} = pkg;
import Tournament from './tournament.js'
import {queryToTournaments} from "./mapper.js";

const credentials = {
    user: "databaseuser",
    host: "localhost",
    database: "esportsdb",
    password: "password",
    port: 5432,
};

const pool = new Pool(credentials)
console.log('\nNew pool created\n')


export async function getTournaments() {
    const queryResult = await pool.query("SELECT * FROM tournaments;");
    return queryToTournaments(queryResult)
}