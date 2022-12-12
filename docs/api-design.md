## Log in

- Endpoint path: /token
- Endpoint method: POST

- Request shape (form):

  - username: string
  - password: string

- Response: Account information and a token
- Response shape (JSON):
  ```json
  {
    "account": {
      «key»: type»,
    },
    "token": string
  }
  ```

## Log out

- Endpoint path: /token
- Endpoint method: DELETE

- Headers:

  - Authorization: Bearer token

- Response: Always true
- Response shape (JSON):
    ```json
    true
    ```

## Create an Account / Signup

 - Endpoint path: /account
 - Endpoint method: POST

- Headers:
  - Authorization: Bearer token

 - Response: An auth token + account id and username.
 - Response shape (JSON):
    ```json
    {
      "access_token": string,
      "token_type": "Bearer",
      "account": {
        "id": string,
        "username": string
      }
    }
    ```

## List of active accounts

 - Endpoint path: /accounts
 - Endpoint method: GET

 - Response: A list of all accounts.
 - Response shape (JSON):
    ```json
    [
      {
        "id": string,
        "username": string
      }
    ]
    ```

## Random Game

- Endpoint path: /bga/random_game
- Endpoint method: GET

- Response: A random game object from our external API
- Response shape (JSON):
```json
{
  "games": [
    {
      "id": string,
      "url": string,
      "name": string,
      "description": string,
      "image_url": string
    }
  ],
  "count": integer
}
  ```

## Popular Games/Trending Games for Carousel

- Endpoint path: /bga/popular_games
- Endpoint method: GET

- Response: A list of 5 game objects ordered by weekly mentions on reddit
- Response shape (JSON):
  ```json
  {
    "games": [
      {
        "id": string,
        "url": string,
        "name": string,
        "description": string,
        "image_url": string
      },
      {
        ...
      }
    ],
    "count": integer
  }
  ```

## Game Mechanics List

- Endpoint path: /bga/game_mechanics_list
- Endpoint method: GET

- Response: A list of all the types of mechanics Board Game Atlas attributes to the games in the DB. The id string for a mechanic can be used as a search parameter in our main search form.
- Response shape (JSON):
  ```json
  {
    "mechanics": [
      {
        "id": string,
        "name": string,
        "url": string
      },
      {
        ...
      }
    ]
  }
  ```

## Game Categories List

- Endpoint path: /bga/game_categories_list
- Endpoint method: GET

- Response: A list of all the categories on Board Game Atlas. The id string for a category can be used as a search parameter in our main search form.
- Response shape (JSON):
  ```json
  {
    "categories": [
      {
        "id": string,
        "name": string,
        "url": string
      },
      {
        ...
      }
    ]
  }
  ```


## "Money Maker" Endpoint for submitting a Game Search

- Endpoint path: /bga/money_maker
- Endpoint method: GET
- Query parameters (all optional, all integers):

  - gt_min_players
  - lt_max_players
  - gt_min_age
  - lt_max_playtime

- Response: A list of 10 Game Objects that fit the search criteria, ordered by their rank on BGA.
- Response shape (JSON):
  ```json
  {
    "games": [
      {
        "id": string,
        "url": string,
        "name": string,
        "min_players": integer,
        "max_players": integer,
        "min_playtime": integer,
        "max_playtime": integer,
        "min_age": integer,
        "description": string,
        "image_url": string,
        "description_preview": string
      },
      {
        ...
      }
    ],
    "count": integer
  }
  ```

## Game Detail

- Endpoint path: /bga/game_detail
- Endpoint method: GET
- Query parameters:

  - ids: the id string used to identify the game (or games) on BGA

- Headers:

  - Authorization: Bearer token

- Response: The entire unfiltered game object from BGA.
- Response shape (JSON):
  ```json
  {
    "games": [
      {
        "id": string,
        "handle": string,
        "url": string,
        "edit_url": string,
        "name": string,
        "price": string,
        "price_ca": string,
        "price_uk": string,
        "price_au": string,
        "msrp": float,
        "msrps": [
          {
            "country": string,
            "price": float
          },
        ],
        "discount": string,
        "year_published": integer,
        "min_players": integer,
        "max_players": integer,
        "player_counts": [
          integer,
          integer,
          integer,
        ],
        "min_playtime": integer,
        "max_playtime": integer,
        "min_age": integer,
        "description": string,
        "commentary": string,
        "faq": string,
        "thumb_url": string,
        "image_url": string,
        "matches_specs": bool,
        "specs": [],
        "mechanics": [
          {
            "id": string,
            "url": string,
          },
        ],
        "categories": [],
        "publishers": [
          {
            "id": string,
            "num_games": integer,
            "score": integer,
            "game": {},
            "url": string,
            "images": {
              "thumb": string,
              "small": string,
              "medium": string,
              "large": string,
              "original": string,
            }
          }
        ],
        "designers": [
          {
            "id": string,
            "num_games": integer,
            "score": integer,
            "game": {},
            "url": string,
            "images": {
              "thumb": string,
              "small": string,
              "medium": string,
              "large": string,
              "original": string
            }
          }
        ],
        "primary_publisher": {
          "id": string,
          "name": string,
          "url": string,
        "primary_designer": {
          "id": string,
          "name": string,
          "url": string,
        },
        "developers": [],
        "related_to": [],
        "related_as": [],
        "artists": [
          string,
        ],
        "names": [],
        "rules_url": string,
        "official_url": string,
        "sell_sheet_url": string,
        "store_images_url": string,
        "comment_count": integer,
        "num_user_ratings": integer,
        "average_user_rating": float,
        "historical_low_prices": [
          {
            "country": string,
            "date": string,
            "price": float,
            "isLow": bool
          },
        ],
        "active": bool,
        "num_user_complexity_votes": integer,
        "average_learning_complexity": integer,
        "average_strategy_complexity": integer,
        "visits": integer,
        "lists": integer,
        "mentions": integer,
        "links": integer,
        "plays": integer,
        "rank": integer,
        "type": string,
        "num_distributors": integer,
        "trending_rank": integer,
        "listing_clicks": integer,
        "is_historical_low": bool,
        "skus": [
          string,
        ],
        "sku_objects": [
          {
            "name": string,
            "sku": string
          },
        ],
        "players": string,
        "playtime": string,
        "msrp_text": string,
        "price_text": string,
        "tags": [
        ],
        "images": {
          "thumb": string,
          "small": string,
          "medium": string,
          "large": string,
          "original": string
        },
        "description_preview": string
      }
    ],
    "count": 1
  }
  ```

## Add a game to an Owned List

- Endpoint path: /owned
- Endpoint method: POST
- Headers:
  - Authorization: Bearer token

- Request shape (form):
  - username: string
  - bgaID: string
  - name: string

- Response: A boolean confirmation.
- Response shape (JSON):
  ```json
  {
    "success": true
  }
  ```

## Delete a game from an Owned List

- Endpoint path: /owned/{owned_id}
- Endpoint method: DELETE
- Headers:
  - Authorization: Bearer token

- Request shape (form):
  - owned_id: string

- Response: A boolean confirmation.
- Response shape (JSON):
  ```json
  {
    "success": true
  }
  ```

## Retrieve a User's List of Owned Games
- Endpoint path: /owned/{owned_id}
- Endpoint method: GET
- Headers:
  - Authorization: Bearer token

- Response: A list of Owned objects
- Response shape (JSON):
  ```json
  {
    "owned_list": [
      {
        "username": "string",
        "bgaID": "string",
        "name": "string",
        "id": "string"
      }
    ]
  }
  ```

## Retrieve ALL Owned Game Records from the DB for dashboard stats
- Endpoint path: /get_all_owned
- Endpoint method: GET

- Response: A list of all records in the "owned" db.
- Response shape (JSON):
  ```json
  [
    {
      "username": string,
      "bgaID": string,
      "name": string,
      "id": string,
    }
  ]
  ```

## Add a game to a Favorites List

- Endpoint path: /favorite
- Endpoint method: POST
- Headers:
  - Authorization: Bearer token

- Request shape (form):
  - username: string
  - bgaID: string
  - name: string

- Response: A boolean confirmation.
- Response shape (JSON):
  ```json
  {
    "success": true
  }
  ```

## Delete a game from an Favorites List

- Endpoint path: /favorite/{owned_id}
- Endpoint method: DELETE
- Headers:
  - Authorization: Bearer token

- Request shape (form):
  - favorite_id: string

- Response: A boolean confirmation.
- Response shape (JSON):
  ```json
  {
    "success": true
  }
  ```

## Retrieve a User's List of Favorite Games
- Endpoint path: /owned/{owned_id}
- Endpoint method: GET
- Headers:
  - Authorization: Bearer token

- Response: A list of Favorite objects
- Response shape (JSON):
  ```json
  {
    "favorites": [
      {
        "username": "string",
        "bgaID": "string",
        "name": "string",
        "id": "string"
      }
    ]
  }
  ```

## Retrieve ALL Favorite Game Records from the DB for dashboard stats
- Endpoint path: /get_all_favs
- Endpoint method: GET

- Response: A list of all records in the "favorites" db.
- Response shape (JSON):
  ```json
  [
    {
      "username": string,
      "bgaID": string,
      "name": string,
      "id": string,
    }
  ]
  ```
