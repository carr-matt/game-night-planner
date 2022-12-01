from fastapi.testclient import TestClient
from queries.favorites import FavoritesQueries
from main import app
from routers.auth import authenticator

client = TestClient(app)

mockAccount = {"email": "email"}

mockFavorite = {
    "bgaID": "string",
    "name": "string",
}

mockFavoriteStatus = {"success": True}


class mockFavoriteQuery:
    def add_to_favorite(self, item1, item2):
        pass


async def account_out_override():
    return mockAccount


def test_preference_post():
    # Arrange
    app.dependency_overrides[FavoritesQueries] = mockFavoriteQuery
    app.dependency_overrides[
        authenticator.try_get_current_account_data
    ] = account_out_override

    # Act
    response = client.post("/favorite", json=mockFavorite)

    # Assert
    assert response.status_code == 200
    assert response.json() == mockFavoriteStatus

    # Clean up
    app.dependency_overrides = {}
