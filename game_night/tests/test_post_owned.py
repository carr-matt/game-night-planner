from fastapi.testclient import TestClient
from queries.preferences import PreferenceQueries
from main import app
from routers.auth import authenticator

client = TestClient(app)

mockAccount = {"email": "email"}

mockOwned = {
    "owned": "string",
}

mockOwnedStatus = {"success": True}


class mockOwnedQuery:
    def add_to_owned(self, item1, item2):
        pass


async def account_out_override():
    return mockAccount


def test_preference_post():
    # Arrange
    app.dependency_overrides[PreferenceQueries] = mockOwnedQuery
    app.dependency_overrides[
        authenticator.try_get_current_account_data
    ] = account_out_override

    # Act
    response = client.post("/owned", json=mockOwned)

    # Assert
    assert response.status_code == 200
    assert response.json() == mockOwnedStatus

    # Clean up
    app.dependency_overrides = {}
