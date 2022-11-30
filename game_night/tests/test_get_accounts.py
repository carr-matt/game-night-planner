from fastapi.testclient import TestClient
from main import app
from queries.accounts import AccountQueries

client = TestClient(app)


class MockAccountRepository:
    def get_all(self):
        return []


def test_get_all_accounts():

    # Arrange
    app.dependency_overrides[AccountQueries] = MockAccountRepository

    # Act
    response = client.get("/api/accounts/")

    # Assert
    assert response.status_code == 200
    assert response.json() == []

    # Clean up
    app.dependency_overrides = {}


# import json
# from fastapi.testclient import TestClient
# from main import app
# from db import TruckQueries

# client = TestClient(app) # replacing swagger in code

# class TruckQueriesMock:
#     def get_trucks(self):
#         return []

#     def create_truck(self, truck):
#         response = {
#             "id": 1337,
#             "owner": {
#                 'id': 42,
#                 'first': 'Foo',
#                 'last': 'Bar',
#                 'avatar': 'https://some-img.png',
#                 'email': 'foo@bar.com',
#                 'username': 'foobar',
#             }
#         }
#         response.update(truck)
#         return response

# def test_get_trucks():
#     # arrange
#     app.dependency_overrides[TruckQueries] = TruckQueriesMock

#     # act
#     response = client.get('/api/trucks')

#     # assert
#     # 1. get a 200
#     assert response.status_code == 200
#     # 2. should *call* queries.get_trucks()
#     assert response.json() == {"trucks": []}

#     # cleanup
#     app.dependency_overrides = {}

# def test_create_truck():
#     # arrange
#     app.dependency_overrides[TruckQueries] = TruckQueriesMock
#     truck = {
#         'name': 'Truckin food',
#         'website': 'https://website.com',
#         'category': 'Italian',
#         'vegetarian_friendly': True,
#         'owner_id': 42,
#     }

#     # Act
#     response = client.post('/api/trucks', json.dumps(truck))

#     # Assert
#     assert response.status_code == 200
#     assert response.json()['name'] == 'Truckin food'
