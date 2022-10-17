## Recommending locations

- Users can create and share lists of places to visit
- Features
  - A user can sign up with social auth / login / logout
  - A user can CRUD lists
  - A user can add a specific Point of Interest to the list
  - A user can add a comment / more info on a given POI
  - A user can share this list with anyone

- Backend framework
  - [Deno + Fresh] (https://fresh.deno.dev/)
    * Installing dependencies - deno task start 
  - [Preact] (https://preactjs.com/)
- ORM - Object Relational Mapper
  - [DenoDB] (https://eveningkid.com/denodb-docs/)
- Auth
  - [DenoAuth] (https://www.denoauth.org/docs)

- Database
  - If using Docker, run:
   * docker-compose start

- Environment variables
  - Copy the .env.sample file into .env


## TODO 

* Day 1
  - [x] Generate Fresh project
  - [x] Familiarize with Fresh
  - [X] Setup Deno Linter
  - [X] Setup the database
    - [X] Docker PostgreSQL
  - [X] Create a users table
  - [X] 1 route that returns data from DB

* Day 2
  - [ ] Use dotenv from standard library
    * https://deno.land/std@0.150.0/dotenv
  - [ ] Explore DenoAuth
  - [ ] Define our models
    * User
    * Social profile
    * Spot list
    * Spot comments
  - [ ] Show a map on the home page
  - [ ] Allow users to login and logout