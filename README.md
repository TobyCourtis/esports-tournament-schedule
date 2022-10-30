# The Tourney Hub (TTH)


Repo for TTH containing backend server(s) Node/Flask and React/Node/TypeScript front-end

---

## Flask Backend

Located in src/python-backend/server.py

### How to run

To listen on port 5000

```python3 server.py```

---

## React front-end

Located in src/react-front-end

### How to run front-end

```
cd src/react-frontend

npm start # hosts on localhost:3000

npm run build # creates the static './build' dir 
```

---

## Running Production Env

Change stubbed response to false for front-end:

```
src/react-frontend/.env
REACT_APP_STUBBED_RESPONSE=false
```

Run backend server and react front-end:

```
python3 src/python-backend/server.py 

cd src/react-frontend
npm run build  # creates the static './build' dir

serve -l 3000  # serves directory as Apache server would on port 3000

open http://localhost:3000   # visit static front-end
```

---

### Docker Postgres DB
Executes init.db if database has not previously been initialised 

`cd postgres-docker-db && docker-compose up -d`

---