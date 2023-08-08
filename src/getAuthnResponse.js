const getAuthnResponse = ({
  responseId,
  assertionId,
  issueInstant,
  issueExpire,
  destination,
  inResponseTo,
  audienceRestriction,
  issuer,
  statusValue
}) => {
  const defaultSamlAuthnResponse = `<?xml version="1.0" encoding="UTF-8"?>
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
				<samlp:StatusCode Value="${statusValue}" />
				</samlp:Status>
				<saml:Assertion xmlns:saml="urn:oasis:names:tc:SAML:2.0:assertion"
					xmlns:xs="http://www.w3.org/2001/XMLSchema"
					xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
					Version="2.0"
					ID="${assertionId}"
					IssueInstant="${issueInstant}"
					>
				<saml:Issuer>${issuer}</saml:Issuer>
				<ds:Signature xmlns:ds="http://www.w3.org/2000/09/xmldsig#">
				<ds:SignedInfo>
				<ds:CanonicalizationMethod Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#" />
				<ds:SignatureMethod Algorithm="http://www.w3.org/2000/09/xmldsig#rsa-sha1" />
				<ds:Reference URI="#pfx3115ddb2-3fbf-dd55-a585-fe7da49faddf">
					<ds:Transforms>
						<ds:Transform Algorithm="http://www.w3.org/2000/09/xmldsig#enveloped-signature" />
						<ds:Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#" />
					</ds:Transforms>
					<ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1" />
					<ds:DigestValue>fC3WH2Q5FfjjIM0Mv2Y1re2Fghk=</ds:DigestValue>
				</ds:Reference>
				</ds:SignedInfo>
				<ds:SignatureValue>hUb4ZQAR0TD6K1Yd+VXrr1hVIlHvksABT6bow+38Xk6I0loljXVZy5neHYjmgXuVV8iAyWyrRBvQh82O6u4HwYMXbS1LNm4UMIYURA5mc0+gemfn0nYeQJLhwbX2Hu//SRHDKD3KX6XWDO0M5W/LooZ3LLeTsgm/faxQ7Cy7YP8V2J+IgH6buhm4KYSGWlXgeFYKlERLzhjVZOEAu1Vu+yYFj2HRUCQcXwBrU6SAuEiGPjxYBKcyT5fm9BE2yogdRxjvC0tuAj+wQYrMg9HjMzWD1h0GBUM/mj/q39vDlIjXtNkTABatazNpLFCizuwuAZ8oVXYGO80uFGJ4ZWdRxQ==</ds:SignatureValue>
				<ds:KeyInfo>
				<ds:X509Data>
					<ds:X509Certificate>MIICVjCCAb+gAwIBAgIBADANBgkqhkiG9w0BAQUFADBIMQswCQYDVQQGEwJ1czELMAkGA1UECAwCQ0ExDTALBgNVBAoMBERlY2sxHTAbBgNVBAMMFGh0dHBzOi8vd2l0aGRlY2suY29tMB4XDTIxMDgyODE2NTEwNFoXDTIyMDgyODE2NTEwNFowSDELMAkGA1UEBhMCdXMxCzAJBgNVBAgMAkNBMQ0wCwYDVQQKDAREZWNrMR0wGwYDVQQDDBRodHRwczovL3dpdGhkZWNrLmNvbTCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEAp2oQHJMQMBXCjVgf1t4M+lwiaRcmI5ybkLrEuk+0VjZG0E/uapDDOLkU/9SIxueVhJi/TUFqyOiuAaMrHeBr37cST2uenW7oFB6kPEi9eiv87WlM49L94kfSfXGmdRviom6gB9jWrlLU/gJes9PSZDnxnGY93/HikwDGg+BJoxECAwEAAaNQME4wHQYDVR0OBBYEFCAif0fFkPFTkAE7ySzetkXV9qLuMB8GA1UdIwQYMBaAFCAif0fFkPFTkAE7ySzetkXV9qLuMAwGA1UdEwQFMAMBAf8wDQYJKoZIhvcNAQEFBQADgYEAWAAOA87+Y0RAbLrvCIR6fIAhXYyi9i/l5E4Sw82akIIh2ZEYTpTmM4cRyfQ8H4Y2WZZbKUW9EQ8ePmH335lzuLtY954bAmDJlFRAvdfg1rGvlycA9iW4zrhd5mZLYwCP6gIqtnyAX8itmgrTA6MbV66g+5zyhe9Vgt3KTCFWhnw=</ds:X509Certificate>
				</ds:X509Data>
				</ds:KeyInfo>
				</ds:Signature>
				<saml:Subject>
				<saml:NameID Format="urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified">peter@withdeck.com</saml:NameID>
				<saml:SubjectConfirmation Method="urn:oasis:names:tc:SAML:2.0:cm:bearer">
				<saml:SubjectConfirmationData NotOnOrAfter="${issueExpire}"
												Recipient="${destination}"
												InResponseTo="${inResponseTo}"
												/>
				</saml:SubjectConfirmation>
				</saml:Subject>
				<saml:Conditions NotBefore="${issueInstant}"
						NotOnOrAfter="${issueExpire}"
						>
				<saml:AudienceRestriction>
				<saml:Audience>${audienceRestriction}</saml:Audience>
				</saml:AudienceRestriction>
				</saml:Conditions>
				<saml:AuthnStatement AuthnInstant="${issueInstant}"
							SessionNotOnOrAfter="${issueExpire}"
							SessionIndex="_411cadb8-49e6-4bd3-9f2c-bf372d4c1c7c"
							>
				<saml:AuthnContext>
				<saml:AuthnContextClassRef>urn:oasis:names:tc:SAML:2.0:ac:classes:PasswordProtectedTransport</saml:AuthnContextClassRef>
				</saml:AuthnContext>
				</saml:AuthnStatement>
				</saml:Assertion>
	  </samlp:Response>`;

  return defaultSamlAuthnResponse;
};

module.exports = { getAuthnResponse };
