from flask import Flask, render_template, json, Response, send_from_directory
from flask_cors import CORS  # comment this on deployment
from services import database as dbservice

app = Flask(__name__, static_url_path='', static_folder='react-frontend/build')
CORS(app)


# HTML Route
@app.route("/")
def render_index():
    return render_template("index.html")


@app.route("/react", defaults={'path': ''})
def render_react_index(path):
    return send_from_directory(app.static_folder, 'index.html')


# API routes
@app.route("/tournaments")
def tournaments():
    data = dbservice.get_tournaments()
    response = app.response_class(
        response=json.dumps(data),
        status=200,
        mimetype='application/json'
    )
    return response


@app.route("/tournament/<id_str>")
def tournament(id_str):
    try:
        id = int(id_str)
    except ValueError as e:
        return Response(
            "Invalid URL, tournament search must use type Integer",
            status=400,
        )
    data = dbservice.get_tournament_by_id(id)
    response = app.response_class(
        response=json.dumps(data),
        status=200,
        mimetype='application/json'
    )
    return response


@app.route("/players")
def players():
    data = dbservice.get_players()
    response = app.response_class(
        response=json.dumps(data),
        status=200,
        mimetype='application/json'
    )
    return response


@app.route("/player/<id_str>")
def player(id_str):
    try:
        id = int(id_str)
    except ValueError as e:
        return Response(
            "Invalid URL, tournament search must use type Integer",
            status=400,
        )
    data = dbservice.get_player_by_id(id)
    response = app.response_class(
        response=json.dumps(data),
        status=200,
        mimetype='application/json'
    )
    return response


@app.route("/tournaments/<gamertag_str>")
def tournament_by_gamertag(gamertag_str):
    data = dbservice.get_tournaments_for_gamertag(gamertag_str)

    if len(data) == 0:
        return Response(
            f"Gamertag {gamertag_str} does not exist, please view a list of verified players here",
            status=400,
        )

    return app.response_class(
        response=json.dumps(data),
        status=200,
        mimetype='application/json'
    )

if __name__ == '__main__':
    app.run("127.0.0.1", "5000")
