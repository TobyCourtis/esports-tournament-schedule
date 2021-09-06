import psycopg2


def get_tournament_by_id(id):
    conn = psycopg2.connect(host="localhost", port=5432, database="test", user="postgres", password="password")

    cur = conn.cursor()
    query = """SELECT * FROM Tournaments WHERE id = {0};""".format(id)
    cur.execute(query)
    query_results = cur.fetchall()

    results_dict = tournament_to_json(query_results)
    cur.close()
    conn.close()
    return results_dict


def get_tournaments():
    conn = psycopg2.connect(host="localhost", port=5432, database="test", user="postgres", password="password")

    cur = conn.cursor()

    cur.execute("""SELECT * FROM Tournaments WHERE ;""")
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
            'Players': i[6],
            'Location': i[7],
            'Stream': i[8],
            'FormatName': i[9],
            'FormatLink': i[10]
        })
    return out


def player_to_json(player_results):
    out = []
    for i in player_results:
        out.append({
            'ID': i[0],
            'Name': i[1],
            'GamerTag': i[2],
            'Age': i[3],
            'Organisation': i[4],
            'OrganisationLink': i[5],
            'Stream': i[6],
            'Image': i[7],
            'Earnings': i[8]
        })
    return out


def get_players():
    conn = psycopg2.connect(host="localhost", port=5432, database="test", user="postgres", password="password")
    cur = conn.cursor()

    cur.execute("""SELECT * FROM Players;""")
    query_results = cur.fetchall()

    # tuple to dictionary
    results_dict = player_to_json(query_results)
    cur.close()
    conn.close()
    return results_dict

def get_player_by_id(id):
    conn = psycopg2.connect(host="localhost", port=5432, database="test", user="postgres", password="password")
    cur = conn.cursor()

    query = """SELECT * FROM Players WHERE id = {0};""".format(id)
    cur.execute(query)
    query_results = cur.fetchall()

    # tuple to dictionary
    results_dict = player_to_json(query_results)
    cur.close()
    conn.close()
    return results_dict


if __name__ == '__main__':
    print(get_player_by_id(4))
