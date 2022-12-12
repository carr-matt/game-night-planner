from fastapi.testclient import TestClient
from main import app
from queries.favorites import FavoritesQueries

client = TestClient(app)  # replacing swagger in code


class MockFavsRepository:
    def get_all(self):
        return []


def test_get_all_favs():

    # Arrange
    app.dependency_overrides[FavoritesQueries] = MockFavsRepository

    # Act
    response = client.get("/get_all_favs")

    # Assert
    assert response.status_code == 200
    assert response.json() == []

    # Clean up
    app.dependency_overrides = {}
