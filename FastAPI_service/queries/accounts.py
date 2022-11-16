from pydantic import BaseModel

class DuplicateAccountError(ValueError):
    pass

class AccountIn(BaseModel):
    email: str
    password: str
    full_name: str

class AccountOut(BaseModel):
    id: str
    email: str
    full_name: str

class AccountOutWithPassword(AccountOut):
    hashed_password: str



class AccountQueries(Queries):
    def get(self, email: str) -> AccountOutWithPassword:

    def get(self, info: AccountIn, hashed_pasword: str) -> AccountOutWithPassword:

