import os, json, requests
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routers import auth
from routers import accounts
from routers import sockets

# from routers import account_data
from routers import boardgame

BGA_ID = os.environ["BGA_ID"]


app = FastAPI()

origins = [
    os.environ.get("CORS_HOST", "http://localhost"),
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.authenticator.router)
app.include_router(accounts.router)
app.include_router(sockets.router)
app.include_router(boardgame.router)


def get_random_game():
    params = {
        "random": "true",
        "pretty": "true",
        "client_id": BGA_ID,
    }
    url = "https://api.boardgameatlas.com/api/search"
    response = requests.get(url, params=params)
    content = json.loads(response.content)
    return content


def get_games_by_name(name):
    params = {
        "name": name,
        "limit": 10,
        "pretty": "true",
        "fuzzy_match": "true",
        "client_id": BGA_ID,
    }
    url = "https://api.boardgameatlas.com/api/search"
    response = requests.get(url, params=params)
    content = json.loads(response.content)
    return content


@app.get("/api/random_game")
def random_game():
    data = get_random_game()
    return data


@app.get("/api/games_by_name")
def games_by_name():
    data = get_games_by_name()
    return data
