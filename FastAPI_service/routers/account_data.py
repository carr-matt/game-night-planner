from fastapi import (
    Depends,
    HTTPException,
    status,
    Response,
    APIRouter,
    Request,
)
from queries.account_data import (
    LikeIn,
    AccountDataQueries,
)
from pydantic import BaseModel
from .auth import authenticator
from typing import Optional

router = APIRouter()


class PreferenceOut(BaseModel):
    success: bool


@router.post("/like", response_model=PreferenceOut)
async def add_like(
    like: LikeIn,
    preferences: AccountDataQueries = Depends(),
    account_data: Optional[dict] = Depends(
        authenticator.try_get_current_account_data
    ),
):
    preferences.add_to_favorite(favorite, account_data["username"])
    return PreferenceOut(success=True)


@router.get("/getlike")
async def get_likes(
    preferences: AccountDataQueries = Depends(),
    account_data: Optional[dict] = Depends(
        authenticator.try_get_current_account_data
    ),
):
    return preferences.get_user_favorites(account_data["username"])
