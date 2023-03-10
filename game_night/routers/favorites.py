from fastapi import (
    Depends,
    HTTPException,
    status,
    APIRouter,
)
from queries.favorites import (
    FavoriteIn,
    Favorite,
    Favorites,
    FavoritesQueries,
    DuplicateFavoriteError,
)
from pydantic import BaseModel
from .auth import authenticator
from typing import Optional

router = APIRouter(tags=["Favorites"])


class FavoriteOut(BaseModel):
    success: bool


@router.post("/favorite", response_model=FavoriteOut)
async def add_favorite(
    favorite: FavoriteIn,
    repo: FavoritesQueries = Depends(),
):
    try:
        repo.add_to_favorite(favorite)
    except DuplicateFavoriteError:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="This game is already on your favorites list",
        )
    return FavoriteOut(success=True)


@router.delete("/favorite/{favorite_id}", response_model=bool)
async def delete_favorite(
    favorite_id: str,
    repo: FavoritesQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    repo.delete_favorite(favorite_id)
    return True


@router.get("/get_favorites", response_model=Favorites)
async def get_favorites(
    repo: FavoritesQueries = Depends(),
    account_data: Optional[dict] = Depends(
        authenticator.try_get_current_account_data
    ),
):
    return repo.get_user_favorites(account_data["username"])


@router.get("/get_all_favs", response_model=list[Favorite])
async def get_all_favs(repo: FavoritesQueries = Depends()):
    return repo.get_all()
