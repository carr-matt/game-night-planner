from fastapi import APIRouter, Depends
import requests
import json
import os

BGA_ID = os.environ["BGA_ID"]

router = APIRouter()


class BgaApi:
    async def call_bga_api(self, params):
        return requests.get(
            "https://api.boardgameatlas.com/api/search",
            params=params,
        )

    async def call_reviews(self, params):
        return requests.get(
            "https://api.boardgameatlas.com/api/reviews",
            params=params,
        )


def get_random_game():
    params = {
        "random": "true",
        "pretty": "true",
        "fields": "name,id,url,image_url,description",
        "client_id": BGA_ID,
    }
    url = "https://api.boardgameatlas.com/api/search"
    response = requests.get(url, params=params)
    content = json.loads(response.content)
    return content


def get_popular():
    params = {
        # "order_by": "rank",
        "order_by": "reddit_week_count",
        "pretty": "true",
        "fields": "name,id,url,image_url,description",
        "limit": 5,
        "client_id": BGA_ID,
    }
    url = "https://api.boardgameatlas.com/api/search"
    response = requests.get(url, params=params)
    content = json.loads(response.content)
    return content


def get_game_mechanics():
    params = {
        "pretty": "true",
        "client_id": BGA_ID,
    }
    url = "https://api.boardgameatlas.com/api/game/mechanics"
    response = requests.get(url, params=params)
    content = json.loads(response.content)
    return content


def get_game_categories():
    params = {
        "pretty": "true",
        "client_id": BGA_ID,
    }
    url = "https://api.boardgameatlas.com/api/game/categories"
    response = requests.get(url, params=params)
    content = json.loads(response.content)
    return content


@router.get("/bga/get_games_by_name", tags=["Board Game Atlas"])
async def name_search(name: str, bga_api: BgaApi = Depends()):
    params = {
        "name": name,
        "limit": 10,
        "pretty": "true",
        "fuzzy_match": "true",
        "order_by": "rank",
        "fields": "name,min_players,max_players,min_age,image_url,description",
        "client_id": BGA_ID,
    }
    response = await bga_api.call_bga_api(params)
    bga_json = response.json()
    try:
        return bga_json
    except IndexError:
        return "Invalid Parameters"


@router.get("/bga/get_reviews")
async def game_reviews(game_id: str, bga_api: BgaApi = Depends()):
    params = {
        "game_id": game_id,
        "pretty": "true",
        "client_id": BGA_ID,
    }
    response = await bga_api.call_reviews(params)
    bga_json = response.json()
    try:
        return bga_json
    except IndexError:
        return "Invalid Parameters"


@router.get("/bga/game_detail")
async def game_details(ids: str, bga_api: BgaApi = Depends()):
    params = {
        "ids": ids,
        "pretty": "true",
        # "fields": "name,min_players,max_players,min_age,image_url,description",
        "client_id": BGA_ID,
    }
    response = await bga_api.call_bga_api(params)
    bga_json = response.json()
    try:
        return bga_json
    except IndexError:
        return "Invalid Parameters"


@router.get("/bga/random_game")
def random_game():
    data = get_random_game()
    return data


@router.get("/bga/popular_games")
def popular_games():
    data = get_popular()
    return data


@router.get("/bga/game_mechanics_list")
def game_mechanics():
    data = get_game_mechanics()
    return data


@router.get("/bga/game_categories_list")
def game_categories():
    data = get_game_categories()
    return data


@router.get("/bga/money_maker")
async def money_maker(
    min_players: int | None = None,
    max_players: int | None = None,
    min_age: int | None = None,
    max_playtime: int | None = None,
    mechanics: str | None = None,
    categories: str | None = None,
    bga_api: BgaApi = Depends(),
):
    params = {
        "min_players": min_players,
        "max_players": max_players,
        "min_age": min_age,
        "max_playtime": max_playtime,
        "limit": 10,
        "pretty": "true",
        "mechanics": mechanics,
        "categories": categories,
        "order_by": "rank",
        "fields": "name,id,url,min_players,max_players,min_age,min_playtime,max_playtime,image_url,description",
        "client_id": BGA_ID,
    }
    response = await bga_api.call_bga_api(params)
    bga_json = response.json()
    try:
        return bga_json
    except IndexError:
        return "Invalid Parameters"
