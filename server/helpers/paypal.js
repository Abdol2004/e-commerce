const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AdwZnfatzIXmMHIedM91NS3fjzJ1Sa9rn0G9FmYEGaAagqKPGVFLDjufQscRaz8WhzeIKEoDl-e-9Tcm",
  client_secret: "ECTDIXRqG7DBE4YcNrZ3R_pT5tKtV5ddpiaAgh6SLjAVFjJBEEAHqIS30yVWhAFMEvZeRC1Pd0Kv50SS",
});

module.exports = paypal;
