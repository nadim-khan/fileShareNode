const express = require('express');
const dotenv= require('dotenv')

const app = express();
dotenv.config();
const PORT = process.env.PORT||9999;
const path = require('path');
const cors = require('cors');
// Cors 
const corsOptions = {
  origin: process.env.ALLOWED_CLIENTS.split(',')
  // ['http://localhost:3000', 'http://localhost:5000', 'http://localhost:3300']
}

app.use(cors(corsOptions))
app.use(express.static('public'));

const connectDB = require('./config/database');
connectDB();

app.use(express.json());


app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

// Routes 
app.use('/api/files', require('./routes/files'));
app.use('/files', require('./routes/show'));
app.use('/files/download', require('./routes/download'));

app.listen(PORT,()=>{
    console.log(`Backend server listening on port ${PORT}`)
})