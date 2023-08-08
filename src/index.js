const express = require("express");
const cors = require(`cors`);
const bodyParser = require("body-parser");
require("body-parser-xml")(bodyParser);

const fs = require(`fs`);

const { parseSamlRequest } = require(`./parseSamlRequest`);
const { getAuthnResponse } = require(`./getAuthnResponse`);
const axios = require(`axios`);

const {
  isObject,
  printObjectKeys,
  getRandomId,
  getCurrentTime,
  getFutureTime
} = require(`./utils.js`);

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.xml());
app.use("/", parseSamlRequest);

app.get(`/`, async (req, res, next) => {
  console.log(`req.authnRequest = `);
  console.log(req.authnRequest);

  // {
  //   responseId,
  //     assertionId,
  //     issueInstant,
  //     issueExpire,
  //     destination,
  //     inResponseTo,
  //     issuer,
  //     statusValue;
  // }
  let data = null;
  const samlIssuer = `https://7slk2.sse.codesandbox.io/`;
  if (req.authnRequest) {
    const authnResponseParams = {
      responseId: getRandomId(),
      assertionId: getRandomId(),
      issueInstant: getCurrentTime(),
      issueExpire: getFutureTime(10),
      destination: req.authnRequest.acsUrl,
      inResponseTo: req.authnRequest.id,
      audienceRestriction: req.authnRequest.issuer,
      // use req.authnRequest.destination as the issuer
      // because the url where Github send us the samlRequest (destination) is the place where we send the samlResponse back from (issuer)
      issuer: samlIssuer,
      statusValue: `urn:oasis:names:tc:SAML:2.0:status:Success`
    };

    console.log(`sending authResponse to Github`);

    const newSAMLResponseFileName = `./src/SAMlResponse_${getRandomId().substring(
      0,
      4
    )}.saml.xml`;

    fs.writeFile(
      newSAMLResponseFileName,
      getAuthnResponse(authnResponseParams),
      (err) => {
        if (err) {
          console.log(err);
          return;
        }

        console.log(`SAML file is written`);
      }
    );

    const authnResponse = new Buffer(
      getAuthnResponse(authnResponseParams)
    ).toString("base64");

    console.log(`authnResponse = `);
    console.log(authnResponse);

    await axios
      .post(
        authnResponseParams.destination,
        // `https://receiveRequestServer.dungngbp.repl.co`,
        authnResponse,
        {
          headers: {
            // Overwrite Axios's automatically set Content-Type
            "Content-Type": "application/xml"
          },
          params: {
            RelayState: req.authnRequest.relayState,
            SAMLResponse: req.authnRequest.samlRequest
          }
        }
      )
      .then(function (response) {
        //console.log(response);
        console.log(
          `response === undefined? ${response === undefined ? "true" : "false"}`
        );

        console.log(`Object.keys(response) = `);
        console.log(Object.keys(response));

        console.log(`response.status = ${response.status}`);
        console.log(`response.statusText = ${response.statusText}`);

        // console.log(`response.data = `);
        // this is where we get the html file
        // console.log(response.data);

        if (response.status === 200) {
          console.log(`authentication succeeds!`);
          data = response.data;
        }
      });
    //   res.type("xml");
    //   res.status(200).send(getAuthnResponse(authnResponseParams));
  }

  if (data) {
    console.log(`Sending the data `);
    res.set("Content-Type", "text/html");
    res.send(data);
  } else res.send("No SAML being sent yet");

  next();
});

app.post(`/`, (req, res, next) => {
  console.log(`req.authnRequest = `);
  //console.log(req.authnRequest);
  res.send("Pepe");
});

app.listen(process.env.PORT || PORT, () =>
  console.log(`App is running at ${process.env.PORT || PORT}`)
);
