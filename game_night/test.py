from fastapi.testclient import TestClient
from fastapi import status
from game_night.routers.preferences import router
from game_night import queries


client = TestClient(app=router)


def test_index_returns_correct():
    response = client.get("/")
    assert response.status_code == status.HTTP_200_OK
    assert response.json() == {
        "message": "Oh yeah, everything's coming together"
    }
