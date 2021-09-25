def tournament_to_json(tournament_results):
    out = []
    for i in tournament_results:
        out.append({
            'ID': i[0],
            'Name': i[1],
            'Organisation': i[2],
            'OrganisationLink': i[3],
            'Date': i[4],
            'PrizePool': i[5],
            'Location': i[6],
            'Stream': i[7],
            'FormatName': i[8],
            'FormatLink': i[9]
        })
    return out


def player_to_json(player_results):
    out = []
    for i in player_results:
        out.append({
            'ID': i[0],
            'FirstName': i[1],
            'Surname': i[2],
            'GamerTag': i[3],
            'Age': i[4],
            'Organisation': i[5],
            'OrganisationLink': i[6],
            'Stream': i[7],
            'Image': i[8],
            'Earnings': i[9]
        })
    return out
