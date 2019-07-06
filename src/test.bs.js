// Generated by BUCKLESCRIPT VERSION 5.0.4, PLEASE EDIT WITH CARE
'use strict';

var DiffieHellman = require("./DiffieHellman.bs.js");

var alice = DiffieHellman.createDiffieHellman1(2048);

var aliceKey = DiffieHellman.generateKeys(alice, /* hex */5194459);

var bob = DiffieHellman.createDiffieHellman4(DiffieHellman.getPrime(alice, /* hex */5194459), /* hex */5194459, DiffieHellman.getGenerator(alice, /* hex */5194459), /* hex */5194459);

var bobKey = DiffieHellman.generateKeys(bob, /* hex */5194459);

var aliceSecret = DiffieHellman.computeSecret(alice, bobKey, /* hex */5194459, /* hex */5194459);

var bobSecret = DiffieHellman.computeSecret(bob, aliceKey, /* hex */5194459, /* hex */5194459);

console.log(aliceSecret === bobSecret);

exports.alice = alice;
exports.aliceKey = aliceKey;
exports.bob = bob;
exports.bobKey = bobKey;
exports.aliceSecret = aliceSecret;
exports.bobSecret = bobSecret;
/* alice Not a pure module */