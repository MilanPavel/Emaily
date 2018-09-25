# Emaily
This is an application for sending email surveys and collecting responses. It is a full stack application for education purposes.
The idea and initial version of the application is based on the course from Stephen Grider from Udemy.com. 

Here is a running [demo](https://stormy-reaches-19231.herokuapp.com/) on Heroku.

Following technologies are used:
#### Client
* React
* Redux (state management)
* [React Router](https://github.com/ReactTraining/react-router) (request routing)
* [ReduxForm](https://redux-form.com/) (form validation, fields persistence in store)
* [Axios](https://github.com/axios/axios) (http client)
* [materializecss](https://materializecss.com/) (styles)
* create-react-app

#### Server
* Nodejs
* Express
* [Passportjs](http://www.passportjs.org/) (OAuth2 authentication)
* [Stripe](https://stripe.com/) (Payments)
* [Mongoose](https://mongoosejs.com/) (MongoDB persistence)
* [Sendgrid](https://sendgrid.com/) (Sending mails, webhooks for survey answers)

#### Services used
* [mLab](https://mlab.com/) (hosting MongoDB instances)
* Sendgrid
* Stripe


# Build
* Clone the repository
* Cd root directory and perform `npm install`
* Cd client directory and perform `npm install`
* Create config/dev.js file with all necessary keys for local version
