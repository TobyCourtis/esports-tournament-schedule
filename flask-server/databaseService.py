import psycopg2


def get_tournament_by_id(id):
    conn = psycopg2.connect(host="localhost", port=5432, database="esportsdb", user="postgres", password="password")

    cur = conn.cursor()
    query = """SELECT * FROM tournaments WHERE tournamentID = {0};""".format(id)
    cur.execute(query)
    query_results = cur.fetchall()

    results_dict = tournament_to_json(query_results)
    cur.close()
    conn.close()
    return results_dict


def get_tournaments():
    conn = psycopg2.connect(host="localhost", port=5432, database="esportsdb", user="postgres", password="password")

    cur = conn.cursor()

    cur.execute("""SELECT * FROM tournaments;""")
    query_results = cur.fetchall()

    results_dict = tournament_to_json(query_results)
    cur.close()
    conn.close()
    return results_dict


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


def get_players():
    conn = psycopg2.connect(host="localhost", port=5432, database="esportsdb", user="postgres", password="password")
    cur = conn.cursor()

    cur.execute("""SELECT * FROM players;""")
    query_results = cur.fetchall()

    # tuple to dictionary
    results_dict = player_to_json(query_results)
    cur.close()
    conn.close()
    return results_dict

def get_player_by_id(id):
    conn = psycopg2.connect(host="localhost", port=5432, database="esportsdb", user="postgres", password="password")
    cur = conn.cursor()

    query = """SELECT * FROM players WHERE playerID = {0};""".format(id)
    cur.execute(query)
    query_results = cur.fetchall()

    # tuple to dictionary
    results_dict = player_to_json(query_results)
    cur.close()
    conn.close()
    return results_dict


if __name__ == '__main__':
    print(get_player_by_id(4))
