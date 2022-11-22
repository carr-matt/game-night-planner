from .client import Queries
from pydantic import BaseModel
from pymongo.errors import DuplicateKeyError
from typing import List
from bson.objectid import ObjectId


class PydanticObjectId(ObjectId):
    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, value: ObjectId | str) -> ObjectId:
        if value:
            try:
                ObjectId(value)
            except ValueError:
                raise ValueError(f"Not a valid object id: {value}")
        return value


class DuplicatePreferenceError(ValueError):
    pass


class LikeIn(BaseModel):
    Like: str


class Like(BaseModel):
    username: str
    like: str
    _id: PydanticObjectId


class Likes(BaseModel):
    likes: List[Like]


class AccountDataQueries(Queries):
    DB_NAME = "mongo-data-account"
    COLLECTION = "account-data"

    def add_to_like(self, Like: LikeIn, username: str) -> bool:
        props = Like.dict()
        props["username"] = username
        try:
            self.collection.insert_one(props)
        except DuplicateKeyError:
            raise DuplicatePreferenceError()

    def get_user_likes(self, username: str) -> Likes:
        props = self.collection.aggregate(
            [
                {
                    "$match": {
                        "$and": [
                            {"username": username},
                            {"Like": {"$exists": True}},
                        ]
                    }
                }
            ]
        )
        if not props:
            print("Not a known username")
        LikesPropsList = list(props)
        return Likes(Likes=LikesPropsList)
