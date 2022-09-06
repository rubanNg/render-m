const key = "kZakdUbVU9XDi37GdK3PYcdXIVHfGej4";
function getPage(page) {
  return axios.get(`http://videocdn.tv/api/movies?page=${page}`, {
    headers: {
      'API_TOKEN': key,
    }
  }).then(function (response) {
    console.log(response);
    return {};
  })
}


async function generate() {
  await getPage(1);
}