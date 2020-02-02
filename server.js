const express = require('express');
const cors = require('cors');
const app = express();

const IncidentRoute = require("./Routes/IncidentRoute");

app.use(cors()) // Allow API calls to be made from any origin

// app.use(bodyParser.urlencoded({
//     extended: true
// }));
// app.use(bodyParser.json());

// app.use('/incident', IncidentRoute);


app.get('/', (req, res) => {
    res.send("Hello World! *_*");
});

app.use('/incident', IncidentRoute);


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Server is now listening at port: " + port);
});

