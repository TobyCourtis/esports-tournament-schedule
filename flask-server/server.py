import os

from flask import Flask, json, Response, send_from_directory
from flask_cors import CORS  # TODO comment this on production deployment

from services import database as dbservice

app = Flask(__name__, static_folder='./react-frontend/build', static_url_path='/')
CORS(app)


@app.route('/favicon.ico')
def favicon():
    return send_from_directory(
        os.path.join(app.root_path, 'static'),
        'tth-cal-logo.ico',
        mimetype='image/vnd.microsoft.icon')


# API routes
@app.route("/api/tournaments")
def tournaments():
    data = dbservice.get_tournaments()
    response = app.response_class(
        response=json.dumps(data),
        status=200,
        mimetype='application/json'
    )
    return response


@app.route("/api/tournament/<id_str>")
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


@app.route("/api/players")
def players():
    data = dbservice.get_players()
    response = app.response_class(
        response=json.dumps(data),
        status=200,
        mimetype='application/json'
    )
    return response


@app.route("/api/player/<id_str>")
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


@app.route("/api/tournaments/<gamertag_str>")
def tournament_by_gamertag(gamertag_str):
    data = dbservice.get_tournaments_for_gamertag(gamertag_str)

    return app.response_class(
        response=json.dumps(data),
        status=200,
        mimetype='application/json'
    )


@app.errorhandler(404)
def catch_all_routes(e):
    return app.send_static_file('index.html')


@app.route('/')
def index():
    return app.send_static_file('index.html')


if __name__ == '__main__':
    app.run("127.0.0.1", 5000)
