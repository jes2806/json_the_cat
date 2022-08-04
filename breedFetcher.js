const request = require('request');
const args = process.argv.splice(2);
const breed = args[0];
const breedDomain = 'https://api.thecatapi.com/v1/breeds/search?q=' + breed;

request(breedDomain, (error, response, body) => {
  if (error) {
    console.log(error);
  }
  const data = JSON.parse(body);
  if (data[0]) {
    console.log(data[0].description);
  } else {
    console.log('Breed not found');
  }
});

request(breedDomain);
