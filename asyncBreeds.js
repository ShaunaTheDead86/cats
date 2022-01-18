const fs = require('fs');

const breedDetailsFromFile = function(breed, returnData = ()=>{}) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    if (!error) returnData(data);
    else returnData(undefined);
  });
};

const printOutCatBreed = (breed) => {
  console.log('Return Value: ', breed);
};

breedDetailsFromFile('Bombay', printOutCatBreed);

module.exports = breedDetailsFromFile;
