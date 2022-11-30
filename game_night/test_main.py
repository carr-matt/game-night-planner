from fastapi.testclient import TestClient
from fastapi import status
from game_night import router

client=TestClient(app=router)

def test_index_returns_correct():
    response = client.get("/get_owned")
    assert response.status_code == status.HTTP_200_OK
    assert response.json() == {"message": "Oh yeah, everything's coming together"}
