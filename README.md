# Ticket Notification Service and User Portal

This is an implementation of a User API, and a front-end to manage those users. This application also provides a service that allows users to view parking and traffic citations from NYC that are attached to any particular license plate number. 

#### Users API Service
* /users-api
* Unit tests available in users-api/src/test/java/com/example/usersapi/

#### Angular Front End
* /users-ui
* Front-end testing application is a selenide app in /UI-FunctionalTests

#### NYC Open Data Tickets API
* Users can add a license plate number to their profile page
wherein a list of tickets associated with that vehicle will be displayed.
* API endpoint https://data.cityofnewyork.us/resource/uvbq-3m68.json

#### Trello Board
https://trello.com/b/J21KFMXG/project-4-board

#### Presentation Slide Deck
Included in ./proposal-slide-deck

#### Tests

* API tests can be run with ./gradelw test in ./api
* Functional tests available in ./test-functional
* Minimal karma/jasmine tests available by running ng test in ./ui