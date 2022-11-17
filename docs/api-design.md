### Log in

* Endpoint path: /token
* Endpoint method: POST

* Request shape (form):
  * username: string
  * password: string

* Response: Account information and a token
* Response shape (JSON):
    ```json
    {
      "account": {
        «key»: type»,
      },
      "token": string
    }
    ```



### Log out

* Endpoint path: /token
* Endpoint method: DELETE

* Headers:
  * Authorization: Bearer token

* Response: Always true
* Response shape (JSON):
    ```json
    true
    ```



### Get a list of Games

* Endpoint path: /games
* Endpoint method: GET
* Query parameters:
  * q: the word(s) to search for

* Headers:
  * Authorization: Bearer token

* Response: A list of Games
* Response shape:
    ```json
    {
      "games": [
        {
          "name": string,
          "price": string,
          "min_players": number,
          "max_players": number,
          "min_age": number,
          "min_playtime": number,
          "max_playtime": number,
          "description": string,
          "image_url": string,
          "mechanics": [

          ],
          "category": [

          ],

        }
      ]
    }
    ```


### Get a list of Categories

* Endpoint path: game/categories
* Endpoint method: GET

* Headers:
  * Authorization: Bearer token

* Response: A list of all game categories
* Response shape:
    ```json
    {
	"categories": [
		{
			"id": string,
			"name": string,
			"url": string,
		},
    ]
    }
    ```


### Get a list of Mechanics

* Endpoint path: game/mechanics
* Endpoint method: GET

* Headers:
  * Authorization: Bearer token

* Response: A list of all game mechanic types
* Response shape:
    ```json
    {
	"mechanics": [
		{
			"id": string,
			"name": string,
			"url": string,
		},
    ]
    }
    ```

### «Human-readable description of the endpoint»
## Mandatory fields:
    * Endpoint path
    * Endpoint method
    * Response
    * Response shape

* Endpoint path: «path to use»
* Endpoint method: «HTTP method»
* Query parameters:
  * «name»: «purpose»

* Headers:
  * Authorization: Bearer token

* Request shape (JSON):
    ```json
    «JSON-looking thing that has the
    keys and types in it»
    ```

* Response: «Human-readable description
            of response»
* Response shape (JSON):
    ```json
    «JSON-looking thing that has the
    keys and types in it»
    ```