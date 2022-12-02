gitfrom .client import Queries
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


class Favorite(FavoriteIn):
    email: str
    bgaID: str
    name: str
    id: str


class Favorites(BaseModel):
    favorites: List[Favorite]


class FavoritesQueries(Queries):
    DB_NAME = "dashboard-data"
    COLLECTION = "favorites"

    def add_to_favorite(self, favorite: FavoriteIn, email: str) -> bool:
        props = favorite.dict()
        props["email"] = email
        print(props)
        try:
            self.collection.insert_one(props)
        except DuplicateKeyError:
            raise DuplicatePreferenceError()

    def delete_favorite(self, favorite_id: str) -> bool:
        self.collection.delete_one({"_id": ObjectId(f"{favorite_id}")})

    def get_user_favorites(self, email: str) -> Favorites:
        props = []
        data = self.collection.find({"email": email})
        for doc in data:
            doc["id"] = str(doc["_id"])
            props.append(doc)
        if not props:
            print("Not a known email")
        return Favorites(favorites=props)
