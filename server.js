const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()) // Allow API calls to be made from any origin

app.get('/', (req, res) => {
    res.send("Hello World! *_*");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Server is now listening at port: " + port);
});

