GRANT ALL PRIVILEGES ON DATABASE esportsdb TO databaseuser;



-- creates table called tournaments with values and types
CREATE SEQUENCE tournaments_id_seq;
CREATE TABLE tournaments (
                             tournamentID integer NOT NULL DEFAULT nextval('tournaments_id_seq') PRIMARY KEY,
                             Name varchar(255),
                             Organisation varchar(255),
                             OrganisationLink varchar(255),
                             Date date,
                             PrizePool varchar(255),
                             Location varchar(255),
                             Stream varchar(255),
                             FormatName varchar(255),
                             FormatLink varchar(255)
);
ALTER SEQUENCE tournaments_id_seq OWNED BY tournaments.tournamentID;

-- inserts into tournaments (must give value for each field)
insert into tournaments values (DEFAULT,
                                'Twitch Rivals',
                                'Twitch',
                                'https://twitch.com/about',
                                '08-20-2022',
                                '$100k',
                                'London, Oxford Street',
                                'https://twitch.tv/twitch_rivals',
                                '2v2',
                                'https://twitch.com/tournaments/rivals/2v2/rules');
insert into tournaments values (DEFAULT,
                                'HP Omen',
                                'HP',
                                'https://hp.com/about',
                                '08-21-2022',
                                '$200k',
                                'Stockholm',
                                'https://twitch.tv/hp_omen',
                                'Custom Quads',
                                'https://hpomen.com/warzone/rules');
insert into tournaments values (DEFAULT,
                                'Faze',
                                'faze',
                                'https://faze.com/about',
                                '09-23-2022',
                                '$100k',
                                'London, Oxford Street',
                                'https://faze.tv/faze_rivals',
                                '2v2',
                                'https://faze.com/tournaments/rivals/2v2/rules');
insert into tournaments values (DEFAULT,
                                'Optic Showdown',
                                'optic',
                                'https://optic.com/about',
                                '09-24-2022',
                                '$100k',
                                'London, Oxford Street',
                                'https://optic.tv/optic_rivals',
                                '2v2',
                                'https://optic.com/tournaments/rivals/2v2/rules');

insert into tournaments values (DEFAULT,
                                'T0BYC Invitational',
                                'Twitch',
                                'https://twitch.com/t0byc',
                                '10-20-2022',
                                '$500k',
                                'London, The Music Box',
                                'https://twitch.tv/twitch_rivals',
                                '2v2 Kill Race',
                                'https://twitch.com/tournaments/rivals/2v2/rules');
insert into tournaments values (DEFAULT,
                                'Huskkers $100k',
                                'Huskkers',
                                'https://twitch.com/about',
                                '11-22-2022',
                                '$50k',
                                'London, Oxford Street',
                                'https://twitch.tv/huskkers',
                                '2v2',
                                'https://huskkers.com/tournaments/rivals/2v2/rules');




CREATE SEQUENCE players_id_seq;
CREATE TABLE players
(
    playerID          integer NOT NULL DEFAULT nextval('players_id_seq') PRIMARY KEY,
    FirstName         varchar(255),
    Surname         varchar(255),
    GamerTag         varchar(255),
    DOB              date,
    Organisation     varchar(255),
    OrganisationLink varchar(255),
    Stream           varchar(255),
    Image            varchar(255),
    Earnings         varchar(255)
);
ALTER SEQUENCE players_id_seq OWNED BY players.playerID;

INSERT INTO players
VALUES (DEFAULT,
        'Tom',
        'Smith',
        'Aydan',
        '05-25-1999',
        'Faze',
        'https://faze.com',
        'https://twitch.tv/aydan',
        'https://scheduler/images/1.jpg',
        '$138k');
INSERT INTO players
VALUES (DEFAULT,
        'Will',
        'Jordan',
        'Rated',
        '03-25-1999',
        '100 Thieves',
        'https://100t.com',
        'https://twitch.tv/rated',
        'https://scheduler/images/2.jpg',
        '$101k');
INSERT INTO players
VALUES (DEFAULT,
        'James',
        'Field',
        'FoolishProphet',
        '06-25-1997',
        'Faze',
        'https://faze.com',
        'https://twitch.tv/aydan',
        'https://scheduler/images/3.jpg',
        '$0k');
INSERT INTO players
VALUES (DEFAULT,
        'Toby',
        'Courtis',
        'TOBYC',
        '04-25-1997',
        'Faze',
        'https://faze.com',
        'https://twitch.tv/aydan',
        'https://www.tobycourtis.com/wp-content/uploads/2020/02/Picture-Circle.png',
        '$1k');






CREATE SEQUENCE player_tournaments_id_seq;
CREATE TABLE player_tournaments
(
    ID               integer NOT NULL DEFAULT nextval('player_tournaments_id_seq') PRIMARY KEY,
    playerID         integer REFERENCES players (playerID) ON DELETE CASCADE,
    tournamentID     integer REFERENCES tournaments (tournamentID) ON DELETE CASCADE
);
ALTER SEQUENCE player_tournaments_id_seq OWNED BY player_tournaments.ID;

insert into player_tournaments values (
                                          DEFAULT,
                                          1,
                                          1
                                      );

insert into player_tournaments values (
                                          DEFAULT,
                                          1,
                                          2
                                      );

insert into player_tournaments values (
                                          DEFAULT,
                                          2,
                                          1
                                      );

insert into player_tournaments values (
                                          DEFAULT,
                                          3,
                                          3
                                      );

insert into player_tournaments values (
                                          DEFAULT,
                                          4,
                                          1
                                      );

insert into player_tournaments values (
                                          DEFAULT,
                                          4,
                                          2
                                      );

insert into player_tournaments values (
                                          DEFAULT,
                                          4,
                                          4
                                      );

insert into player_tournaments values (
                                          DEFAULT,
                                          4,
                                          5
                                      );

insert into player_tournaments values (
                                          DEFAULT,
                                          4,
                                          6
                                      );
