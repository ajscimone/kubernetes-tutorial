const express = require('express');
const dotenv = require('dotenv');
const health = require('@cloudnative/health-connect');

dotenv.config();

const app = express();
const port = process.env.PORT

let healthCheck = new health.HealthChecker();

app.get('/', (req, res) => {
  res.send('Hello');
});

app.use('/live', health.LivenessEndpoint(healthCheck));

app.use('/ready', health.ReadinessEndpoint(healthCheck));

app.use('/health', health.HealthEndpoint(healthCheck));

const server = app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
