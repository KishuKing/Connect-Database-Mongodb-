// app.js
const express = require('express');
const connectDB = require('./config/db');

const app = express();

app.use(express.json()); // Middleware to parse JSON

connectDB(); // Connect to MongoDB

// Routes
app.use('/api', require('./routes/example'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// app.get('/about', (req, res) => {
//     res.send('This is the about page.');
// })

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// })