const request = require("request");
const fs = require("fs");

//let fileLocation = "";

const fetcher = (website, fileLocation) => {
  request(`${website}`, (error, response, body) => {
    console.log("error:", error); // Print the error if one occurred
    //console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
    //console.log("body:", body); // Print the HTML for the Google homepage.
    //console.log(body);
    fs.writeFile(fileLocation, body, (err) => {
      if (err) {
        console.error(err);
        return;
      }
    });
  });
};

//writeFile(fetcher(process.argv[2]), process.argv[3]);
fetcher(process.argv[2], process.argv[3]);
