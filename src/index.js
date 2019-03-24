module.exports = function check(str, bracketsConfig) {
  let stringForValidation = str;
  for (let i = 0; i < stringForValidation.length; i++) {
    for (let configSet = 0; configSet < bracketsConfig.length; configSet++) {
      if ((stringForValidation[i] === bracketsConfig[configSet][0])
        && (stringForValidation[i + 1] === bracketsConfig[configSet][1])) {

        let reg = bracketsConfig[configSet][0] + bracketsConfig[configSet][1];
        stringForValidation = stringForValidation.replace(reg, '');
        configSet = -1;
        i--;
      }
    }
  }
  return stringForValidation.length == 0;
}