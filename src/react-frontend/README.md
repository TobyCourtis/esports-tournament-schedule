# React Frontend

### Development mode

If you mock the API response then change REACT_APP_STUBBED_RESPONSE to true in the .env file

---

### Production mode 

In the ./build folder the REACT_APP_STUBBED_RESPONSE variable is set in the .env.production file



---

## Endpoints
Have you forgotten what the frontend offers?! Look no further

- `/`  Default endpoint showing all tournaments grouped by month
- `/gamertag/{gamertag_here}` Specific player endpoint showing tournaments for specific player
  - If player not found "Oops no tournaments for that player" is shown
- `/players` Page listing all players