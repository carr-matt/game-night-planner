from fastapi import (
    Depends,
    HTTPException,
    status,
    Response,
    APIRouter,
    Request,
)
from queries.favorites import (
    FavoriteIn,
    Favorites,
    FavoritesQueries,
)
from pydantic import BaseModel
from .auth import authenticator
from typing import Optional

router = APIRouter(tags=["Favorites"])


class PreferenceOut(BaseModel):
    success: bool


@router.post("/favorite", response_model=PreferenceOut)
async def add_favorite(
    favorite: FavoriteIn,
    preferences: FavoritesQueries = Depends(),
    account_data: Optional[dict] = Depends(
        authenticator.try_get_current_account_data
    ),
):
    preferences.add_to_favorite(favorite, account_data["email"])
    return PreferenceOut(success=True)


@router.delete("/favorite/{favorite_id}", response_model=bool)
async def delete_favorite(
    favorite_id: str,
    preferences: FavoritesQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    preferences.delete_favorite(favorite_id)
    return True


@router.get("/get_favorites", response_model=Favorites)
async def get_favorites(
    preferences: FavoritesQueries = Depends(),
    account_data: Optional[dict] = Depends(
        authenticator.try_get_current_account_data
    ),
):
    return preferences.get_user_favorites(account_data["email"])
