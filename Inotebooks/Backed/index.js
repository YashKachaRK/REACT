// backed entry point 
const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors')
require('dotenv').config();

connectToMongo()

const app = express();
const port = process.env.PORT ;
app.use(cors())
app.use(express.json());

app.use('/api/auth' , require('./routes/auth'))
app.use('/api/note' , require('./routes/note'))


app.listen(port, () => {
  console.log(`Server running at http://localhost:5000`);
});