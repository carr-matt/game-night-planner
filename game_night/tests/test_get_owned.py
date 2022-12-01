from fastapi.testclient import TestClient
from main import app
from queries.owned import PreferenceQueries
from routers.auth import authenticator

client = TestClient(app)  # replacing swagger in code

mockAccount = {"email": "email"}


async def account_out_override():
    return mockAccount


class PrefQueriesMock:
    def get_user_owned(self):
        return []


def test_get_owned():
    # arrange
    app.dependency_overrides[PrefQueriesMock] = PreferenceQueries
    app.dependency_overrides[
        authenticator.try_get_current_account_data
    ] = account_out_override

    # act
    response = client.get("/get_owned")

    # assert
    assert response.status_code == 200
    assert response.json() == {"owned_list": []}

    # cleanup
    app.dependency_overrides = {}
