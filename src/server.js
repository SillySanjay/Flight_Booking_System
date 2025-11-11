//Configuration
require("dotenv").config()
const PORT = process.env.PORT;

// Library Imports
const express = require('express');
const app = express();

// Data Imports
const apiRoutes = require("./routes/base")

//middlewares
app.use('/api', apiRoutes)

app.listen(PORT, () => {
    console.log(`Server is running successfully at PORT: ${PORT}`)
})