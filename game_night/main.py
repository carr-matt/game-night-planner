from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
<<<<<<< HEAD
from game_night import routers
=======
from routers.auth import authenticator
import os
>>>>>>> main


# from routers import account_data
from game_night.routers import auth
from routers import accounts
from routers import sockets
from routers import boardgame
from routers import preferences

app = FastAPI()

origins = [
    "https://localhost:3000",
    "http://localhost:3000",
    os.environ.get("CORS_HOST", None),
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
app.include_router(preferences.router)
