const express = require('express');

const app = express();
const port = Number(process.env.PORT) || 3000;

app.get('/', (_request, response) => {
  response.json({
    message: 'Hello from your Node.js app!',
  });
});

app.get('/health', (_request, response) => {
  response.status(200).json({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});