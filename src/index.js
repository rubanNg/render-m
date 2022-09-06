const express = require('express');
const path = require('path')

const app = express();
app.use(express.static(path.resolve(__dirname, "../static")));

app.get('/', (request, response) => {
  response.render("index.html");
});

app.listen(process.env.PORT, () => console.log(`Run: http://localhost:${process.env.PORT}`));