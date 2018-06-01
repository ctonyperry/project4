# User Admin and User Portal

This is a basic implementation of a User API, and a front-end to manage those users. There is also a rudimentary "login" that displays a user home page, with basic API search functionality from the NYC City Record Online site. 

#### Users API Service
* /users-api
* Unit tests available in users-api/src/test/java/com/example/usersapi/

#### Angular Front End
* /users-ui
* Front-end testing application is a selenide app in /UI-FunctionalTests

#### NYC Open Data Tickets API
* Users can add a license plate number to their profile page
wherein a list of tickets associated with that vehicle will be display.
* API endpoint https://data.cityofnewyork.us/resource/uvbq-3m68.json
