# [QuickCampaign](https://pure-spire-72385.herokuapp.com/)

The goal of QuickCampaign is to allow registered users to create Email campaigns that can be sent to many users in a time. Email responses are captured and the application provides an interface where you can visualize user responses. This is particularly useful when you are looking to get feedback on something or just need to send out a survey.

Deployed on Heroku: https://pure-spire-72385.herokuapp.com/

## Backend libraries

Backend code is located inside server/ folder

- Mongoose
- Passport
- Sendgrid
- Stripe

## Frontend libraries

Frontend code is located inside client/ folder

- React/Redux/Redux Thunk
- Redux Form
- React Stripe
- Materialize CSS

<br>

## Integrated Services

## Mongolab

There are two databases for development and production environments

## Sendgrid

#### Testing webhook in development:

`npx ngrok http <PORT>` => Forwards traffic to the given port so we can receive webhook events from Sendgrid in our development environment. You will need to add the generated address under Event Notification's HTTP POST URL field in SendGrid.

## Stripe

Stripe is being used in test mode only

<br>

## Installing and Running the application locally

```
cd client/
npm install
cd server/
npm install
npm run dev
```
