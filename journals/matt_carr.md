## December 5, 2022

* One week til project submission. Let's goooo!
* Made some really good progress on the detail page with Joe!! Using the params hook to pass the BgaId needed for the GET request to grab the actual game object. Woohoooo!

## December 4, 2022

* FINALLY figured out how to stop the creation of duplicate user accounts and properly raise the DuplicateAccountError.
* Also figured out how to prevent dupes of favs/owned games after a ton of trial & error.
* Renamed & organized all our collections into a single database. Removed lots of unused and unnecessary imports. General code cleanup.

## December 3, 2022

* Wrote a popular/trending games endpoint for populating our main page carousel.
* Did some major sprucing up of the swagger docs page.
* Spent way too much time reading Pydantic and Pymongo docs.

## December 2, 2022

* Broke all the tests and fixed them again lol.
* Spent most of the afternoon investigating different front-end styling approaches we might take.

## December 1, 2022

* Split favs & owned into their own collections.

## November 30, 2022

* More work on unit tests with Jazz & Josh joining on a live share coding session.

## November 29, 2022

* Worked thru the CD cookbook and signed up on Mongo Atlas for our eventual deployment.
* Started work on unit tests.

## November 28, 2022

* Fixed a bug in account creation.
* fastapi_service is now game_night! Woohoo!

## November 21, 2022

* Very productive day! Momentum on api work carried on throughout the afternoon. Through a live share session, Josh, Jazz, and I together knocked out nearly all of our external api endpoints. Also consolidated them all in a boardgame.py file.
* Joe made an instant classic help-me-understand post.

## November 20, 2022

* Stayed up too late working on external api GET requests for our app but finally got 2 requests working.

## November 17, 2022

* Group worked together this morning to get Mongo Express added & working. Afternoon, Jazz, Josh, and I did a live share coding session to kick off our backend work. Some code clean-up was done, but we all feel we need to do more research about how to properly structure things within our FastAPI service before going much further. Riley gave us some good advice for next steps.
* Updated project documentation.
* Spending the remainder of my night learning more about FastAPI.

## November 16, 2022

* Today was mostly about authentication. Via VS Code Live Share and pair programming, we all struggled and stumbled our way to-- by the end of the day-- being able to create user accounts, log them in, and log them out. Woohoo!! Super proud of our group.
* Our docker-compose and requirements.txt are in a good place now. All our members can successfully build and run all containers.
* Tonight, I worked thru the MongoDB exploration in preparation for tomorrow's lecture.


## November 14, 2022

* Created project & web service on render.com. Updated gitlab CI/CD SAMPLE_SERVICE_API_HOST accordingly.
* Group talked through & updated wireframes to prep for presentation.


## November 10, 2022

* Created client id/secret keys with boardgameatlas.com and tested the API in Insomnia.
* Began fleshing out our api-design.md file.