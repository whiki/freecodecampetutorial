const { readFile, writeFile } = require('fs').promises;

async function main() {
  try {
    const first = await readFile('./content/first.txt', 'utf8');
    const second = await readFile('./content/second.txt', 'utf8');
    const result = `Here is the result: ${first}, ${second}`;
    await writeFile('./content/result-asyncaw.txt', result);
    console.log('Done');
  } catch (error) {
    console.error(error);
  }
}

main();