import { demotivate } from 'exzyle-demotivational';
import restify = require('restify');
import createRandomError = require('./create-error');

const server = restify.createServer({ name: 'Demotivational' });

server.get('/demotivate', (req, res, next) => {
  const demotivational = demotivate();
  res.send(demotivational);
  next();
});

server.get('/error', (req, res, next) => {
  const error = createRandomError();
  next(error);
});

server.on('restifyError', (req, res, error, callback) => {
  const demotivational = demotivate();
  error.message = error.body.message = demotivational;
  callback();
});

server.listen(process.env['PORT'] || 8080, () => {
  console.log('%s listening at %s', server.name, server.url);
});
