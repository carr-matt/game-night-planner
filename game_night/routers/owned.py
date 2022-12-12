from fastapi import (
    Depends,
    HTTPException,
    status,
    APIRouter,
)
from queries.owned import (
    OwnedIn,
    Owned,
    OwnedList,
    OwnedQueries,
    DuplicateOwnedError,
)
from pydantic import BaseModel
from .auth import authenticator
from typing import Optional

router = APIRouter(tags=["Owned"])


class OwnedOut(BaseModel):
    success: bool


@router.post("/owned", response_model=OwnedOut)
async def add_owned(
    owned: OwnedIn,
    repo: OwnedQueries = Depends(),
):
    try:
        repo.add_to_owned(owned)
    except DuplicateOwnedError:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="This game is already on your owned list",
        )
    return OwnedOut(success=True)


@router.delete("/owned/{owned_id}", response_model=bool)
async def delete_owned(
    owned_id: str,
    repo: OwnedQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    repo.delete_owned(owned_id)
    return True


@router.get("/get_owned", response_model=OwnedList)
async def get_owned(
    repo: OwnedQueries = Depends(),
    account_data: Optional[dict] = Depends(
        authenticator.try_get_current_account_data
    ),
):
    return repo.get_user_owned(account_data["username"])


@router.get("/get_all_owned", response_model=list[Owned])
async def get_all_owned(repo: OwnedQueries = Depends()):
    return repo.get_all()
