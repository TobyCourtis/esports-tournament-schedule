import Tournament from "./tournament.js";

export function queryToTournaments(queryResponse) {
    return queryResponse.rows ? queryResponse.rows.map(
        item => new Tournament(item)
    ) : []
}