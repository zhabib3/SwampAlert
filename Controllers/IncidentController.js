const request = require("request");
const Firestore = require('@google-cloud/firestore');

// const PUBLIC_API_URL = "https://data.cityofgainesville.org/resource/gvua-xt9q.json?$where=offense_date > '2020-01-01T00:00:00.000'";
const PUBLIC_API_URL = "https://data.cityofgainesville.org/resource/gvua-xt9q.json?$where=offense_date > '2020-01-25T00:00:00.000'";


exports.getOfficial = (req, res) => {
  request({
    url: PUBLIC_API_URL,
    headers: {
      'X-App-Token': '6M2gZU1sn5CRb89oC3zwB2BwT'
    },
  }, (err, response, body) => {
    if (err) console.log(err);
    res.send(body);
  });
}

exports.create = (req, res) => {

  const db = new Firestore({
    projectId: 'zeecareful',
    keyFilename: './ZeeCareful-60278c80d2bf.json',
  });

  let docRef = db.collection('incidents').doc();
  let data = req.body;
  data.id = docRef.id;

  docRef.set(data).then((result, err) => {
    if (err) { 
      console.log(err); 
      res.error("Incident creation failed." + err);
    }
    console.log(result);
  });

  res.json(data)
}