const express = require('express');
const path = require('path');
const policy = require('./app.policy.json');
const SERVER_PORT = process.env.PORT || 4200;
const app = express();
const protodir = __dirname;

/**
 * Más información en ...
 * https://github.com/bucharest-gold/kube-probe/blob/master/index.js
 * /api/health/readiness
 * /api/health/liveness
 */
const probe = require('kube-probe');

/**
 * Metodo que devuelve si la app está levantada
 * @param {*} request 
 * @param {*} response 
 */
function k8Response(request, response) {
  response.setHeader('Content-Type', 'application/json');
  return response.end(JSON.stringify({
    status: 'UP'
  }));

}

probe(app, {
  readinessCallback: k8Response,
  livenessCallback: k8Response
});

// app.use(`/`, express.static(path.join(__dirname, `dist/`))); // local
app.use(`/`, express.static(path.join(__dirname, `/`)));

if (policy.csp.enabled) {
  app.use(function (req, res, next) {
    res.header('Content-security-policy', policy.csp.value);
    res.header('X-Content-security-policy', policy.csp.value);
    res.header('X-WebKit-CSP', policy.csp.value);
    next();
  });
}

// Todos los path que renderizan index
app.use('*', (req, res) => {
  // res.sendFile(path.join(__dirname, `dist/index.html`));// local
  res.sendFile(path.join(__dirname, `index.html`));
});

/**
 * Información de servicio UP
 */
app.listen(SERVER_PORT, () => {
  console.log('protodir ' + protodir);
  console.log('server is up on port ' + SERVER_PORT);
});
