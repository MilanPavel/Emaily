# Emaily
This is an application for sending email surveys and collecting responses. It is a full stack application for education purposes.
The idea and initial version of the application is based on the course from Stephen Grider from Udemy.com. 

Here is a running [demo](https://stormy-reaches-19231.herokuapp.com/) on Heroku.

# Build
* Clone the repository
* Cd _root_ directory and perform `npm install`
* Cd _client_ directory and perform `npm install`
* Cd _root_ directory and create `config/dev.js` file with all necessary keys for local version

Example dev.js file:
```
module.exports = {
    googleClientID: '',
    googleClientSecret: '',
    mongoURI: '',
    cookieKey: '123123123',
    stripePublishableKey: '',
    stripeSecretKey: '',
    sendGridKey: '',
    redirectDomain: 'http://localhost:3000'
};
```
All keys must be correctly filled out. You need to suply following info:
* Google creds to enable Google OAuth login (only Google OAuth works for now)
* mongoURI to connect to Mongo database (use [mLab](https://mlab.com/) service for example)
* cookieKey - can be any arbitrary string
* Stripe keys - you need to have valid account on [Stripe](https://stripe.com/)
* SendGrid key - you need to have valid account on [SendGrid](https://sendgrid.com/)
* redirectDomain - used for being able run from localhost

# Run Tests
* Cd _root_ directory
* Perform `npm run test`

# Techstack
#### Client
* React
* Redux (state management)
* [React Router](https://github.com/ReactTraining/react-router) (request routing)
* [ReduxForm](https://redux-form.com/) (form validation, fields persistence in store)
* [Axios](https://github.com/axios/axios) (http client)
* [materializecss](https://materializecss.com/) (styles)
* [create-react-app](https://github.com/facebook/create-react-app)

#### Server
* Nodejs
* Express
* [Passportjs](http://www.passportjs.org/) (OAuth2 authentication)
* [Stripe](https://stripe.com/) (Payments)
* [Mongoose](https://mongoosejs.com/) (MongoDB persistence)
* [Sendgrid](https://sendgrid.com/) (Sending mails, webhooks for survey answers)

#### Testing
* [Jest](https://jestjs.io/)
* [Puppeteer](https://github.com/GoogleChrome/puppeteer)
* [Travis-ci](https://travis-ci.org/) for CI

#### Services used on production instance
* [mLab](https://mlab.com/) (hosting MongoDB instances)
* [Stripe](https://stripe.com/)
* [SendGrid](https://sendgrid.com/)
