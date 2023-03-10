from .client import Queries
from models import Account, AccountIn, AccountOut
from pymongo.errors import DuplicateKeyError


class DuplicateAccountError(ValueError):
    pass


class AccountQueries(Queries):
    DB_NAME = "game_night"
    COLLECTION = "accounts"

    def get(self, username: str) -> Account:
        props = self.collection.find_one({"username": username})
        if not props:
            return None
        props["id"] = str(props["_id"])
        return Account(**props)

    def create(self, info: AccountIn, hashed_password: str) -> Account:
        self.collection.create_index("username", unique=True)
        props = info.dict()
        props["password"] = hashed_password
        try:
            self.collection.insert_one(props)
        except DuplicateKeyError:
            raise DuplicateAccountError()
        props["id"] = str(props["_id"])
        return Account(**props)

    def get_all(self) -> list[AccountOut]:
        db = self.collection.find()
        account_usernames = []
        for document in db:
            document["id"] = str(document["_id"])
            account_usernames.append(AccountOut(**document))
        return account_usernames
