import psycopg2
from .utils.parsers import tournaments_to_json, players_to_json

# TODO refactor the database service into a class DatabaseService
postgresDBInfo = {'host': "localhost", 'port': 5432, 'database': "esportsdb", 'user': "postgres",
                  'password': "password"}


# tournaments
def get_tournament_by_id(id):
    conn = psycopg2.connect(**postgresDBInfo)

    cur = conn.cursor()
    query = """SELECT * FROM tournaments WHERE tournamentID = {0};""".format(id)
    cur.execute(query)
    query_results = cur.fetchall()

    results_dict = tournaments_to_json(query_results)
    cur.close()
    conn.close()
    return results_dict


def get_tournaments():
    conn = psycopg2.connect(**postgresDBInfo)

    cur = conn.cursor()

    cur.execute("""SELECT * FROM tournaments;""")
    query_results = cur.fetchall()

    results_dict = tournaments_to_json(query_results)
    cur.close()
    conn.close()
    return results_dict


# players
def get_players():
    conn = psycopg2.connect(**postgresDBInfo)
    cur = conn.cursor()

    cur.execute("""SELECT * FROM players;""")
    query_results = cur.fetchall()

    # tuple to dictionary
    results_dict = players_to_json(query_results)
    cur.close()
    conn.close()
    return results_dict


def get_player_by_id(id):
    conn = psycopg2.connect(**postgresDBInfo)
    cur = conn.cursor()

    query = """SELECT * FROM players WHERE playerID = {0};""".format(id)
    cur.execute(query)
    query_results = cur.fetchall()

    # tuple to dictionary
    results_dict = players_to_json(query_results)
    cur.close()
    conn.close()
    return results_dict

def get_player_by_gamertag(gamertag):
    conn = psycopg2.connect(**postgresDBInfo)
    cur = conn.cursor()

    query = """SELECT * FROM players WHERE gamertag iLIKE '%{0}%';""".format(gamertag)
    cur.execute(query)
    query_results = cur.fetchall()

    # tuple to dictionary
    results_dict = players_to_json(query_results)
    cur.close()
    conn.close()
    return results_dict


# tournaments matching gamertag

def get_tournaments_for_gamertag(gamertag):
    conn = psycopg2.connect(**postgresDBInfo)

    cur = conn.cursor()
    query = """
        select * from tournaments t
        join player_tournaments pt on pt.tournamentID = t.tournamentID
        join players p on p.playerID = pt.playerID
        where p.gamertag = '{0}';
            """.format(gamertag)

    cur.execute(query)
    query_results = cur.fetchall()

    results_dict = tournaments_to_json(query_results)
    cur.close()
    conn.close()
    return results_dict


if __name__ == '__main__':
    print(get_tournaments_for_gamertag('yeet'))
