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


class Owned(OwnedIn):
    email: str
    bgaID: str
    name: str
    id: str


class OwnedList(BaseModel):
    owned_list: List[Owned]


class OwnedQueries(Queries):
    DB_NAME = "dashboard-data"
    COLLECTION = "owned"

    def add_to_owned(self, owned: OwnedIn, email: str) -> bool:
        props = owned.dict()
        props["email"] = email
        try:
            self.collection.insert_one(props)
        except DuplicateKeyError:
            raise DuplicatePreferenceError()

    def delete_owned(self, owned_id: str) -> bool:
        self.collection.delete_one({"_id": ObjectId(f"{owned_id}")})

    def get_user_owned(self, email: str) -> OwnedList:
        props = []
        data = self.collection.find({"email": email})
        for doc in data:
            doc["id"] = str(doc["_id"])
            props.append(doc)
        if not props:
            print("Not a known email")
        return OwnedList(owned_list=props)
