from .client import Queries
from models import Account, AccountIn, AccountOut
from pymongo.errors import DuplicateKeyError


class DuplicateAccountError(ValueError):
    pass


class AccountQueries(Queries):
    DB_NAME = "mongo-data"
    COLLECTION = "accounts"

    def get(self, email: str) -> Account:
        props = self.collection.find_one({"email": email})
        if not props:
            return None
        props["id"] = str(props["_id"])
        return Account(**props)

    def create(self, info: AccountIn, hashed_password: str) -> Account:
        props = info.dict()
        props["password"] = hashed_password
        # props["roles"] = roles
        try:
            self.collection.insert_one(props)
        except DuplicateKeyError:
            raise DuplicateAccountError()
        props["id"] = str(props["_id"])
        return Account(**props)

    def get_all(self) -> list[AccountOut]:
        db = self.collection.find()
        account_emails = []
        for document in db:
            document["id"] = str(document["_id"])
            account_emails.append(AccountOut(**document))
        return account_emails
