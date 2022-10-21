const appRoute = require('express').Router()

const { auth, requiresAuth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER_BASE_URL
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
appRoute.use(auth(config));

appRoute.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

// req.isAuthenticated is provided from the auth router
appRoute.get('/login', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

appRoute.get('/profile', requiresAuth(), (req, res) => {
  res.json(req.oidc.user);
});

module.exports = {
  appRoute
}

const rand = require("randomstring");

console.log(rand.generate(50));