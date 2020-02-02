/**
 * TODO(developer): Uncomment the following lines before running the sample.
 */
const bucketName = 'zeecareful.appspot.com';
const filename = './server.js';

// Imports the Google Cloud client library
const {Storage} = require('@google-cloud/storage');

// Creates a client
const storage = new Storage({
    projectId: 'zeecareful',
    keyFilename: './ZeeCareful-60278c80d2bf.json',
  });

exports.uploadFile = async function(file) {
  // Uploads a local file to the bucket
  await storage.bucket(bucketName).upload(file, {
    // Support for HTTP requests made with `Accept-Encoding: gzip`
    gzip: true,
    // By setting the option `destination`, you can change the name of the
    // object you are uploading to a bucket.
    metadata: {
      // Enable long-lived HTTP caching headers
      // Use only if the contents of the file will never change
      // (If the contents will change, use cacheControl: 'no-cache')
      cacheControl: 'public, max-age=31536000',
    },
  });

  console.log(`${filename} uploaded to ${bucketName}.`);
}

// module.exports = uploadFile;
