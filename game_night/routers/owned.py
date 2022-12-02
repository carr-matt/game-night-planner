from fastapi import (
    Depends,
    HTTPException,
    status,
    Response,
    APIRouter,
    Request,
)
from queries.owned import (
    OwnedIn,
    OwnedList,
    OwnedQueries,
)
from pydantic import BaseModel
from .auth import authenticator
from typing import Optional

router = APIRouter(tags=["Owned"])


class PreferenceOut(BaseModel):
    success: bool


@router.post("/owned", response_model=PreferenceOut)
async def add_owned(
    owned: OwnedIn,
    preferences: OwnedQueries = Depends(),
    account_data: Optional[dict] = Depends(
        authenticator.try_get_current_account_data
    ),
):
    preferences.add_to_owned(owned, account_data["email"])
    return PreferenceOut(success=True)


@router.delete("/owned/{owned_id}", response_model=bool)
async def delete_owned(
    owned_id: str,
    preferences: OwnedQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    preferences.delete_owned(owned_id)
    return True


@router.get("/get_owned", response_model=OwnedList)
async def get_owned(
    preferences: OwnedQueries = Depends(),
    account_data: Optional[dict] = Depends(
        authenticator.try_get_current_account_data
    ),
):
    return preferences.get_user_owned(account_data["email"])
