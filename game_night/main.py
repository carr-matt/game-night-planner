from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os


from routers import auth
from routers import accounts
from routers import sockets
from routers import boardgame
from routers import owned
from routers import favorites

description = """
This is the API for 🎲 **Game Night Planner** 🎲

a web app for planning game nights with friends.

"""

tags_metadata = [
    {
        "name": "Accounts",
        "description": "Create and manage user accounts.",
    },
    {
        "name": "Board Game Atlas",
        "description": "Search for board games.",
        "externalDocs": {
            "description": "Requests to the Board Game Atlas API.",
            "url": "https://www.boardgameatlas.com/api/docs",
        },
    },
]

app = FastAPI(
    title="Game Night Planner",
    description=description,
    version="0.0.1",
    openapi_tags=tags_metadata,
)

origins = [
    "*",  # Allow all origins
    # "https://localhost:3000",
    # "http://localhost:3000",
    # os.environ.get("CORS_HOST", None),
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(
    auth.authenticator.router,
    tags=["Accounts"],
)
app.include_router(accounts.router)
app.include_router(sockets.router)
app.include_router(
    boardgame.router,
    tags=["Board Game Atlas"],
)
app.include_router(owned.router)
app.include_router(favorites.router)
