from fastapi import APIRouter, Depends
import requests
import os


BGA_ID = os.environ["BGA_ID"]

router = APIRouter()


class BgaApi:
    async def call_bga_api(self, params):
        return requests.get(
            "https://api.boardgameatlas.com/api/search",
            params=params,
        )


@router.get("/api/bga-test")
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
