const getAuthnResponse = ({}) => {
  const authnResponse = `
  <samlp:Response xmlns:saml="urn:oasis:names:tc:SAML:2.0:assertion"
  xmlns:samlp="urn:oasis:names:tc:SAML:2.0:protocol"
  ID="${responseId}"
  Version="2.0"
  IssueInstant="${issueInstant}"
  Destination="${destination}"
  InResponseTo="${inResponseTo}"
  >
<saml:Issuer>${issuer}</saml:Issuer>
<samlp:Status>
<samlp:StatusCode Value="urn:oasis:names:tc:SAML:2.0:status:Success" />
</samlp:Status>
<saml:Assertion xmlns:saml="urn:oasis:names:tc:SAML:2.0:assertion"
	  xmlns:xs="http://www.w3.org/2001/XMLSchema"
	  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	  Version="2.0"
	  ID="${assertionId}"
	  IssueInstant="${issueInstant}"
	  >
<saml:Issuer>https://app.onelogin.com/saml/metadata/d0a41711-e978-4c6e-9ed1-4b50d0df4dea</saml:Issuer>
<ds:Signature xmlns:ds="http://www.w3.org/2000/09/xmldsig#">
<ds:SignedInfo>
  <ds:CanonicalizationMethod Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#" />
  <ds:SignatureMethod Algorithm="http://www.w3.org/2000/09/xmldsig#rsa-sha1" />
  <ds:Reference URI="#pfxed6a5694-f038-d957-117d-8eb711ffb76a">
	  <ds:Transforms>
		  <ds:Transform Algorithm="http://www.w3.org/2000/09/xmldsig#enveloped-signature" />
		  <ds:Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#" />
	  </ds:Transforms>
	  <ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1" />
	  <ds:DigestValue>lmXTrUhUzPxXCZI6P4feF84aTIg=</ds:DigestValue>
  </ds:Reference>
</ds:SignedInfo>
<ds:SignatureValue>OKwCROXcG1Q//Xb55P7grW1LNbraV1Nth67XBRFaJUg8PHRZwpG3IlUXR0hKhoCdeUWATcZwfrmSRRPFTFvdSG+9qQuZMXTR03XCoovQFtD7SDPd5kX4tml9kysXrd+ztBJQfavamtnphuwKLvnfhB5jsSlw/0j3VVYd4952kxpa378jy2hJr0OFdtS1F7guW42p3kvkgTleDQazsPiBjJK89HL5LYPrJzUl/YS+9QvCWsS3PP1B8o8/Y3HQcGd0RGYAmpGGYh4IC7QASM1ZxSJzm0OYIAu0rq7ZU4UoZIt8wwi7dn+FjwSls+V+rZ4RRo7BKZRtx82JOo5c6ZkAyw==</ds:SignatureValue>
<ds:KeyInfo>
  <ds:X509Data>
	  <ds:X509Certificate>MIICVjCCAb+gAwIBAgIBADANBgkqhkiG9w0BAQUFADBIMQswCQYDVQQGEwJ1czELMAkGA1UECAwCQ0ExDTALBgNVBAoMBERlY2sxHTAbBgNVBAMMFGh0dHBzOi8vd2l0aGRlY2suY29tMB4XDTIxMDgwNDA2MDQzNloXDTIyMDgwNDA2MDQzNlowSDELMAkGA1UEBhMCdXMxCzAJBgNVBAgMAkNBMQ0wCwYDVQQKDAREZWNrMR0wGwYDVQQDDBRodHRwczovL3dpdGhkZWNrLmNvbTCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEAv0ClqZxkONWIYUlGQK+eJOdwkfr8gnAJmw136wBZOxgb2w9X2Ht1Ad/RrXuq2Mubxy348+kURXQ2cqZqAjR3J+kyt0q+dVLoTe5SxWNFpeXhaxjlwv8rgTZgB0OOtCVlPdjnKBvfxRjcivO2WjaKIToWi072aJAmMijmzrO98XMCAwEAAaNQME4wHQYDVR0OBBYEFBOECDkfcltbG/VfbLVI3ljM4/x6MB8GA1UdIwQYMBaAFBOECDkfcltbG/VfbLVI3ljM4/x6MAwGA1UdEwQFMAMBAf8wDQYJKoZIhvcNAQEFBQADgYEAvibAf98P6DYTGQmB/BpfdrYxc6vAwD+qyUyFjKhHzUldbOe5S7IaeWqzYueHToN1Vh7mkazrkPHwCuNQgbP4tzmntUpdRoN/zPx1GWCRhFcTihvEZd64AYwKDw2ifLtXOan7n3jj0FbvRf74PZ+wUZ0GRselsA2Ut3HrTv5rP68=</ds:X509Certificate>
  </ds:X509Data>
</ds:KeyInfo>
</ds:Signature>
<saml:Subject>
<saml:NameID Format="urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified">peter@withdeck.com</saml:NameID>
<saml:SubjectConfirmation Method="urn:oasis:names:tc:SAML:2.0:cm:bearer">
  <saml:SubjectConfirmationData NotOnOrAfter="2021-08-06T03:40:23Z"
								Recipient="${recipient}"
								InResponseTo="_1a3fd629f114e0f014d7294c95ad92800e4b098539b629cdfdc50f0e92618983"
								/>
</saml:SubjectConfirmation>
</saml:Subject>
<saml:Conditions NotBefore="${issueInstant}"
		   NotOnOrAfter="${issueExpire}"
		   >
<saml:AudienceRestriction>
  <saml:Audience>${destination}</saml:Audience>
</saml:AudienceRestriction>
</saml:Conditions>
<saml:AuthnStatement AuthnInstant="2021-08-06T03:37:22Z"
			   SessionNotOnOrAfter="2021-08-07T03:37:23Z"
			   SessionIndex="_7ef8a18a-d871-4839-b6aa-c440a9242ac7"
			   >
<saml:AuthnContext>
  <saml:AuthnContextClassRef>urn:oasis:names:tc:SAML:2.0:ac:classes:PasswordProtectedTransport</saml:AuthnContextClassRef>
</saml:AuthnContext>
</saml:AuthnStatement>
</saml:Assertion>
</samlp:Response>
  `;

  return authnResponse;
};

module.exports = { getAuthnResponse };
