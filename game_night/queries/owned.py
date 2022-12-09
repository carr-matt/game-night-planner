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


class DuplicateOwnedError(ValueError):
    pass


class OwnedIn(BaseModel):
    bgaID: str
    name: str


class Owned(OwnedIn):
    username: str
    bgaID: str
    name: str
    id: str


class OwnedList(BaseModel):
    owned_list: list[Owned]


class OwnedQueries(Queries):
    DB_NAME = "game_night"
    COLLECTION = "owned"

    def add_to_owned(self, owned: OwnedIn, username: str) -> bool:
        props = owned.dict()
        props["username"] = username
        data = self.collection.find(
            {"username": username, "bgaID": owned.bgaID}
        )
        docs = []
        for doc in data:
            docs.append(doc)
        if len(docs) == 0:
            self.collection.insert_one(props)
        else:
            raise DuplicateOwnedError()

    def delete_owned(self, owned_id: str) -> bool:
        self.collection.delete_one({"_id": ObjectId(f"{owned_id}")})

    def get_user_owned(self, username: str) -> OwnedList:
        props = []
        data = self.collection.find({"username": username})
        for doc in data:
            doc["id"] = str(doc["_id"])
            props.append(doc)
        if len(props) == 0:
            print("Not a known username or no owned games")
        return OwnedList(owned_list=props)
