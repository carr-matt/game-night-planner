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


class FavoriteIn(BaseModel):
    bgaID: str
    name: str


class Favorite(BaseModel):
    email: str
    bgaID: str
    name: str
    _id: PydanticObjectId


class Favorites(BaseModel):
    favorites: List[Favorite]


class FavoritesQueries(Queries):
    DB_NAME = "dashboard-data"
    COLLECTION = "favorites"

    def add_to_favorite(self, favorite: FavoriteIn, email: str) -> bool:
        props = favorite.dict()
        props["email"] = email
        try:
            self.collection.insert_one(props)
        except DuplicateKeyError:
            raise DuplicatePreferenceError()

    def delete_favorite(self, favorite_id: str) -> bool:
        self.collection.delete_one({"_id": ObjectId(f"{favorite_id}")})

    def get_user_favorites(self, email: str) -> Favorites:
        props = self.collection.aggregate(
            [
                {
                    "$match": {
                        "$and": [
                            {"email": email},
                            {"bgaID": {"$exists": True}},
                        ]
                    }
                }
            ]
        )
        if not props:
            print("Not a known email")
        favoritesPropsList = list(props)
        return Favorites(favorites=favoritesPropsList)
