const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello Team DevOps! This is Jay Pandya'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
