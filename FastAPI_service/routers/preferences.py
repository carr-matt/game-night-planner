from fastapi import (
    Depends,
    HTTPException,
    status,
    Response,
    APIRouter,
    Request,
)
from queries.preferences import (
    FavoriteIn,
    OwnedIn,
    PreferenceQueries,
)
from pydantic import BaseModel
from .auth import authenticator
from typing import Optional

router = APIRouter()


class PreferenceOut(BaseModel):
    success: bool


@router.post("/favorite", response_model=PreferenceOut)
async def add_favorite(
    favorite: FavoriteIn,
    preferences: PreferenceQueries = Depends(),
    account_data: Optional[dict] = Depends(
        authenticator.try_get_current_account_data
    ),
):
    preferences.add_to_favorite(favorite, account_data["email"])
    return PreferenceOut(success=True)


@router.post("/owned", response_model=PreferenceOut)
async def add_owned(
    owned: OwnedIn,
    preferences: PreferenceQueries = Depends(),
    account_data: Optional[dict] = Depends(
        authenticator.try_get_current_account_data
    ),
):
    preferences.add_to_owned(owned, account_data["email"])
    return PreferenceOut(success=True)


@router.get("/get_owned")
async def get_owned(
    preferences: PreferenceQueries = Depends(),
    account_data: Optional[dict] = Depends(
        authenticator.try_get_current_account_data
    ),
):
    return preferences.get_user_owned(account_data["email"])


@router.get("/get_favorites")
async def get_favorites(
    preferences: PreferenceQueries = Depends(),
    account_data: Optional[dict] = Depends(
        authenticator.try_get_current_account_data
    ),
):
    return preferences.get_user_favorites(account_data["email"])
