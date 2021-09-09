import axios from "axios";
import {ITournament} from '../pages/TournamentsPage'

export let GetTournaments: () => ITournament[] = function (): ITournament[] {
    axios.get('http://localhost:5000/players').then(response => {
        let tournamentsRes: ITournament[] = []
        response.data.map((tournament: ITournament) => {
                console.log(tournament)
                tournamentsRes.push(tournament)
            }
        )
        console.log('tournamentsRes: ', tournamentsRes)
        return tournamentsRes
    }).catch(error => {
        console.log('error occurred parsing tournaments', error)
    })
    //error case
    return []
};