const express = require('express');
const app = express();

app.get('/', (red,res) => {
  res.send('Hello World!');
});

app.get('/api/customers', (req, res) => {
    res.send([1,2,3,4,5]);
});
  
app.listen(3000, () => console.log('Listening On Port 3000...'));
