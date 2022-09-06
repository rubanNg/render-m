const key = "kZakdUbVU9XDi37GdK3PYcdXIVHfGej4";
function getPage(page) {
  axios({
    method: 'get',
    url: `https://videocdn.tv/api/movies?page=${page}`,
    withCredentials: false,
    headers: {
      API_TOKEN: key,
  }).then(function (response) {
    console.log(response);
    return {};
  })
}


async function generate() {
  await getPage(1);
}