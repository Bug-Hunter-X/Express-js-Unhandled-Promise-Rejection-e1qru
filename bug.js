const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Asynchronous operation that might throw an error
  doSomethingAsync().then(() => {
    res.send('Hello World!');
  }).catch(error => {
    // Error handling not properly done
    console.error(error);
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

async function doSomethingAsync() {
  // Simulate an asynchronous operation that might fail
  const success = Math.random() < 0.5;
  if (!success) {
    throw new Error('Something went wrong!');
  }
}