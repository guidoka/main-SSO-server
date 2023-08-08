const samlp = require(`samlp`);

/**
 * View Handlers
 */

// const showUser = function(req, res, next) {
//     res.render('user', {
//         user: req.user,
//         participant: req.participant,
//         metadata: req.metadata,
//         authnRequest: req.authnRequest,
//         idp: req.idp.options,
//         paths: IDP_PATHS
//     });
// }

const parseSamlRequest = function (req, res, next) {
  samlp.parseRequest(req, function (err, data) {
    if (err) {
      return res.render("error", {
        message: "SAML AuthnRequest Parse Error: " + err.message,
        error: err
      });
    }

    if (data) {
      console.log(`received saml request`);

      req.authnRequest = {
        relayState: req.query.RelayState || req.body.RelayState,
        samlRequest:
          req.query.SAMLRequest ||
          req.params.SAMLRequest ||
          req.body.SAMLRequest,
        id: data.id,
        issuer: data.issuer,
        destination: data.destination,
        acsUrl: data.assertionConsumerServiceURL,
        forceAuthn: data.forceAuthn === "true"
      };
      // console.log('Received AuthnRequest => \n', req.authnRequest);
    }
    // return showUser(req, res, next);

    next();
  });
};

module.exports.parseSamlRequest = parseSamlRequest;
