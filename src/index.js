const express = require('express');
const path = require('path')

const app = express();
app.use(express.static(path.resolve(__dirname, "../static")));

app.get('/', (request, response) => {
  axios({
    method: 'get',
    url: `https://videocdn.tv/api/movies?page=${page}`,
    withCredentials: false,
    headers: {
      API_TOKEN: key,
    }
  }).then(function (response) {
    response.send({ response })
  })
});

app.listen(process.env.PORT, () => console.log(`Run: http://localhost:${process.env.PORT}`));