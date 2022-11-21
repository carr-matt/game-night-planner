from fastapi import APIRouter, Depends
import requests, json
import os
from typing import Union


BGA_ID = os.environ["BGA_ID"]

router = APIRouter()


class BgaApi:
    async def call_bga_api(self, params):
        return requests.get(
            "https://api.boardgameatlas.com/api/search",
            params=params,
        )

def get_random_game():
    params = {
        "random": "true",
        "pretty": "true",
        "fields": "name,url,image_url,url,description",
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

@router.get("/api/get_games_by_name")
async def name_search(name: str, bga_api: BgaApi = Depends()):
    params = {
        "name": name,
        "limit": 10,
        "pretty": "true",
        "fuzzy_match": "true",
        "order_by": "rank",
        "fields": "name,price,min_players,max_players,min_age,image_url,description",
        "client_id": BGA_ID,
    }
    response = await bga_api.call_bga_api(params)
    bga_json = response.json()
    try:
        return bga_json
    except IndexError:
        return "Invalid Parameters"

@router.get("/api/random_game")
def random_game():
    data = get_random_game()
    return data

@router.get("/api/game_mechanics_list")
def game_mechanics():
    data = get_game_mechanics()
    return data

@router.get("/api/game_categories_list")
def game_categories():
    data = get_game_categories()
    return data

@router.get("/api/money_maker")
async def money_maker(
    min_players: int | None = None,
    max_players: int | None = None,
    min_age: int | None = None,
    lt_msrp: float | None = None,
    max_playtime: int | None = None,
    mechanics: str | None = None,
    categories: str | None = None,
    bga_api: BgaApi = Depends()
    ):
    params = {
        "min_players": min_players,
        "max_players": max_players,
        "min_age": min_age,
        "lt_msrp": lt_msrp,
        "max_playtime": max_playtime,
        "gt_price": "1",
        "gt_msrp": "1",
        "limit": 10,
        "pretty": "true",
        "mechanics": mechanics,
        "categories": categories,
        "order_by": "rank",
        "fields": "name,id,url,price,msrp,min_players,max_players,min_age,min_playtime,max_playtime,image_url,description",
        "client_id": BGA_ID,
    }
    response = await bga_api.call_bga_api(params)
    bga_json = response.json()
    try:
        return bga_json
    except IndexError:
        return "Invalid Parameters"
