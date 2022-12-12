# Game Night Planner

- Cedric "Jazz" Stewart
- Joe Monaghan
- Joshua Clay
- Margaret Ketchum
- Matt Carr

Game Night Planner – choose your next board game adventure!

## Design

- [API design](docs/api-design.md)
- [Integrations](docs/integrations.md)

## Intended market

We seek to help board game enthusiasts find the perfect game for their next game night.

## Functionality

- A user is able to sign up to create an account
- A user is able to login to their account
- A user is able to see a randomly generated game on the main page
- A user is able to make a custom search for a game that fits their needs
- A user is able to see the trending games of the week
- A user is able to click any image of any game in the application and be brought to it's detail page
- A user is able to add a game from the detail page to their owned games or favorite games
- A user is able to access their user dashboard and view their favorite games and owned games
- A user is able to log out of their account

## Project Initialization

Follow these steps to run this application on your local machine:

1. Clone the repository down to your local machine
2. CD into the new project directory
3. Follow the directions within the example.env
4. Run `docker volume create mongo-data`
5. Run `docker compose build`
6. Run `docker compose up`
7. Visit [localhost:3000](localhost:3000/) in your browser. Happy gaming, friends!



## Unit Tests

- Get all accounts - Matt
- Get all favorite games - Cedric
- Get all owned games - Joshua
- Add a game to favorites list - Joe
- Add a game to owned list - Margaret






#### Your GitLab pages URL

You can't find this in GitLab until after you've done a deploy
but you can figure it out yourself from your GitLab project URL.

If this is your project URL

https://gitlab.com/GROUP_NAME/PROJECT_NAME

then your GitLab pages URL will be

https://GROUP_NAME.gitlab.io/PROJECT_NAME

### Create render.com account and application

* create account on render.com
* one person create a group and invite all other members
* create a new "Web Service"
  * authenticate with GitLab and choose your project
  * Enter fields:
    * Name: name of your service
    * Root Directory: the directory of your service in your git repo.
      For this example use "sample_service".
    * Environment: Docker
    * Plan Type: Free
  * click the "Create Web Service" button to create it
  * the build will succeed and it will look like the server is running,
    most likely, in 6-10 minutes, it will fail.
  * click "Manual Deploy" -> "Deploy latest commit" and the service
    should deploy successfully.

### Update GitLab CI/CD variables

Copy the service URL for your new render.com service and then paste
that into the value for the SAMPLE_SERVICE_API_HOST CI/CD variable
in GitLab.

### Deploy it

Merge a change into main to kick off the initial deploy. Once the build pipeline
finishes you should be able to see an "under construction" page on your GitLab
pages site.
