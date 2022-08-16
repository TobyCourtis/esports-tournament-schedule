# The Tourney Hub (TTH)

**Description**

Repo for TTH containing backend server(s) Node/Flask and React/Node/TypeScript Frontend

---

## Flask Server

Located in flask-server/server.py

### How to run

To listen on port 5000

```python3 server.py```

---

## React Frontend

Located in flask-server/react-frontend

### How to run

```
cd flask-server/react-frontend

npm start # hosts on localhost:3000

npm run build # creates the static './build' dir 
```

### How to run like production

```
cd flask-server/react-frontend

npm run build # creates the static './build' dir

serve -l 3000 # serves directory as Apache server would on port 3000 
```

---

### Docker Postgres DB


`cd postgres-docker-db && docker-compose up -d`

---

### TODO
 
- Serve React/TypeScript frontend from Flask server not the node server
