# Luke Taaffe Assignment

Lepaya Application chosen Option A - Service Provider App

## Description of Solution architecture

This is a NodeJS simple backend written in Typescript and expressJs, with static data output via a REST API

The front-end is a VueJS SPA with default HTML for the 3 part Form, using Bootstrap 4 for basic HTML styling

It is written in an OO MVC manner in ES6, the express server is routing the request via the companies controller which is outputting the request body to the API.

The skills are currently driven with a static piece of data, in the second part of the form, and these are passed to the end point which is currently generating a simple set of 5 offers which related to the skills passed in. 

## Instructions

1. run `git clone` on the repository
2. run `npm install` to install all dependencies
4. run `npm run start` on the root directory to run the NodeJS backend
5. run `cd frontend && npm install` for installing the Vue SPA
5. run `npm run serve` to serve the front-end website
6. visit `http://localhost:8080` to view in the browser
  
## Libraries Used

VueJS 3.0 - Used due to the relevance of job description, SPA works nicely for separating the backend / frontend

ExpressJs - Used due to being able to write a nodeJS backend quickly and using typescript

Bootstrap 4 - Used for quick easy HTML styling

Moment - For easy formatting of dates

word-ext - Random words generation

## What I would have done differently

I would have added an accept / reject offer end point which would perform a kind of refetching of up-to-date offers. 

With the backend having knowledge over which offers have already been declined or accepted, the front-end could easily determine whether the user is allowed to accept the offer with the same date.
Additionally, the backend could provide offers which are sorted by date, rather than sending a random list of offers.

Currently the disabled state is a simple SCSS styling implementation, this could also have been driven by the data, as the end point would show whether the offer has been accepted / rejected already. 

Also I would have moved to VueX as the state becomes to get messy when more functionality is added and passed between components.

