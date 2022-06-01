const moviesRouter = require('./movies');
const usersRouter = require('./users');
const authRouter = require('./auth');

const setupRoutes = (app) => {
  // Movie routes
  app.use('/api/movies', moviesRouter);
  // User routes
  app.use('/api/auth', authRouter);
  app.use('/api/users', usersRouter);
};

module.exports = {
  setupRoutes,
};
