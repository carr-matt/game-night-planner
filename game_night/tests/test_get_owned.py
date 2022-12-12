from fastapi.testclient import TestClient
from main import app
from queries.owned import OwnedQueries

client = TestClient(app)  # replacing swagger in code


class MockOwnedRepository:
    def get_all(self):
        return []


def test_get_all_owned():

    # Arrange
    app.dependency_overrides[OwnedQueries] = MockOwnedRepository

    # Act
    response = client.get("/get_all_owned")

    # Assert
    assert response.status_code == 200
    assert response.json() == []

    # Clean up
    app.dependency_overrides = {}
