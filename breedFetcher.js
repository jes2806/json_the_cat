const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const breedDomain = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;
  request(breedDomain, (error, _, body) => {
    if (error) {
      callback(error);
      return;
    }
    const data = JSON.parse(body);
    if (data[0]) {
      callback(null, data[0].description);
    } else {
      callback('Breed not found');
    }
  });

};

module.exports = { fetchBreedDescription };
