from bson.objectid import ObjectId
from pydantic import BaseModel
from typing import List


class PydanticObjectId(ObjectId):
    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, value: ObjectId | str) -> ObjectId:
        if value:
            try:
                ObjectId(value)
            except:
                raise ValueError(f"Not a valid object id: {value}")
        return value


class AccountIn(BaseModel):
    email: str
    password: str
    # full_name: str


class Account(AccountIn):
    id: PydanticObjectId
    # roles: List[str]


class AccountOut(BaseModel):
    id: str
    email: str
    # full_name: str
    # roles: List[str]


# class LoanIn(BaseModel):
#     account_id: str
#     book_id: str


# class Loan(LoanIn):
#     id: PydanticObjectId


# class LoanOut(LoanIn):
#     id: str


class Game(BaseModel):
    name: str
    price: str
    min_players: int
    max_players: int
    min_age: int
    min_playtime: int
    max_playtime: int
    description: str
    image_url: str
    mechanics: List[str]
    category: List[str]

class GameOut(BaseModel):
    name: str
    image_url: str
    description: str

# class Book(BookIn):
#     id: PydanticObjectId


# class BookOut(BookIn):
#     id: str
#     loans: List[str]


# class BookList(BaseModel):
#     books: List[BookOut]
