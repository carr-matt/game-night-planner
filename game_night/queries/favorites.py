from .client import Queries
from pydantic import BaseModel
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


class DuplicateFavoriteError(ValueError):
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
    favorites: list[Favorite]


class FavoritesQueries(Queries):
    DB_NAME = "game_night"
    COLLECTION = "favorites"

    def add_to_favorite(self, favorite: FavoriteIn, email: str) -> bool:
        props = favorite.dict()
        props["email"] = email
        data = self.collection.find({"email": email, "bgaID": favorite.bgaID})
        docs = []
        for doc in data:
            docs.append(doc)
        if len(docs) == 0:
            self.collection.insert_one(props)
        else:
            raise DuplicateFavoriteError()

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
