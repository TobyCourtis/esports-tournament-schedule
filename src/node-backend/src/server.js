import express from 'express';
import bodyParser from 'body-parser'
import {getTournaments} from './services/databaseService.js';

const app = express()
const port = 3000
app.use(bodyParser.json())


app.get('/tournaments', getTournamentData)


async function getTournamentData(req, res) {
    const tournaments = await getTournaments()
    console.log(tournaments)
    res.send(tournaments)
}

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
