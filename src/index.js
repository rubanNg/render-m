const express = require('express');
const path = require('path')

const app = express();
const port = 5000;
app.use(express.static(path.resolve(__dirname, "../static")));

app.get('/', (request, response) => {
  response.render("index.html", {z: 1});
});

app.listen(port, () => console.log(`Run: http://localhost:${port}`));