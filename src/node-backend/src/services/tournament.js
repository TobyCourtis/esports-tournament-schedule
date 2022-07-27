export default class Tournament {
    constructor (tournamentData) {
        this.ID = tournamentData.tournamentid
        this.Name = tournamentData.name
        this.Organisation = tournamentData.organisation
        this.OrganisationLink = tournamentData.organisationlink
        this.Date = tournamentData.date
        this.PrizePool = tournamentData.prizepool
        this.Location = tournamentData.location
        this.Stream = tournamentData.stream
        this.FormatName = tournamentData.formatname
        this.FormatLink = tournamentData.formatlink
    }
}