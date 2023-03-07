const { readFile, writeFile } = require('fs').promises;

readFile('./content/first.txt', 'utf8')
  .then(first => {
    return readFile('./content/second.txt', 'utf8')
      .then(second => {
        const result = `Here is the result: ${first}, ${second}`;
        return writeFile('./content/result-promises.txt', result)
      })
  })
  .then(() => {
    console.log('Done');
  })
  .catch(error => {
    console.error(error);
  });
