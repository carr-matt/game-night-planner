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


class OwnedIn(BaseModel):
    bgaID: str
    name: str


class Owned(BaseModel):
    email: str
    bgaID: str
    name: str
    _id: PydanticObjectId


class OwnedList(BaseModel):
    owned_list: List[Owned]


class PreferenceQueries(Queries):
    DB_NAME = "dashboard-data"
    COLLECTION = "owned"

    def add_to_owned(self, owned: OwnedIn, email: str) -> bool:
        props = owned.dict()
        props["email"] = email
        try:
            self.collection.insert_one(props)
        except DuplicateKeyError:
            raise DuplicatePreferenceError()

    def get_user_owned(self, email: str) -> Owned:
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
        ownedPropsList = list(props)
        return OwnedList(owned_list=ownedPropsList)