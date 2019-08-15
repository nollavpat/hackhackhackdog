const otpGenerator = require('otp-generator');

module.exports = function generatedOTP() {
  return otpGenerator.generate(6, {
    alphabets: false,
    specialChars: false,
    upperCase: false,
  });
};
