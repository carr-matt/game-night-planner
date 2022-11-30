from fastapi.testclient import TestClient
from main import app
from queries.accounts import AccountQueries

client = TestClient(app)


class emptyAccountRepository:
    def get_all(self):
        return []


def test_get_all_accounts():
    app.dependecy_overrides[AccountQueries] = emptyAccountRepository
    response = client.get("/api/accounts/")
    app.dependency_overrides = {}

    assert response.status_code == 200
    assert response.json() == {
        "message": "Oh yeah, everything's coming together"
    }
