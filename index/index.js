const express = require('express');
const app = express();

app.get('/', (red,res) => {
  res.send('Hello World!');
});

app.listen(3000, () => console.log('Listening On Port 3000...'));
