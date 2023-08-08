const { nanoid } = require("nanoid");
const samlAssertion = require(`saml`).Saml20;
const SignedXml = require("xml-crypto").SignedXml;
const PassportProfileMapper = require("./PassportProfileMapper");

const isObject = (x) => {
  return typeof x === "object" && x !== null;
};

const printObjectKeys = (obj) => {
  if (!isObject(obj)) console.log(`Not an object`);
  else console.log(Object.keys(obj));
};

const getRandomInt = (low, high) => {
  const range = high - low;
  return Math.floor(Math.random() * range + low);
};

const getRandomId = () => {
  return "_" + nanoid(getRandomInt(20, 65));
};

const getCurrentTime = () => {
  // SAML time is in the ISO 8601 format
  return new Date().toISOString();
};

const getFutureTime = (minutes) => {
  let currentMilliseconds = new Date().getTime(),
    // 1 minute = 60,000 milliseconds
    extraMilliseconds = minutes * 60_000;

  // SAML time is in the ISO 8601 format
  return new Date(currentMilliseconds + extraMilliseconds).toISOString();
};

const getSAMLResponse = () => {};

module.exports = {
  isObject,
  printObjectKeys,
  getRandomId,
  getCurrentTime,
  getFutureTime,
  getSAMLResponse
};
