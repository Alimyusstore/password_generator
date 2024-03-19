

function passGenerator() {
  const lowerCaseOnly = document.getElementById("lowerCaseOnly").checked;
  const upperCaseOnly = document.getElementById("upperCaseOnly").checked;
  const numberOnly = document.getElementById("numberOnly").checked;
  const symbolOnly = document.getElementById("symbolOnly").checked;
  const lowerNdUpperCase = document.getElementById("lowerNdUpperCase").checked;
  const AlphaNumeric = document.getElementById("AlphaNumeric").checked;
  const symAlphaNumeric = document.getElementById("symAlphaNumeric").checked;
  const result = document.getElementById("result");
  let password = "";
  let allowedCharacter = "";
  let passwordLength = 12;

  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let number = "0123456789";
  let symbol = "~`!@#$%^&*()_-+=}{][\"';:/?.,><";
  let lowerCaseConcUpperCase = lowerCase.concat(upperCase);
  let alphabetNdNumber = lowerCaseConcUpperCase.concat(number);
  let generateAll = alphabetNdNumber.concat(symbol);


    allowedCharacter += lowerCaseOnly ? lowerCase : "";
    allowedCharacter += upperCaseOnly ? upperCase : "";
    allowedCharacter += numberOnly ? number : "";
    allowedCharacter += symbolOnly ? symbol : "";
    allowedCharacter +=lowerNdUpperCase ? lowerCaseConcUpperCase : "";
    allowedCharacter += AlphaNumeric ? alphabetNdNumber: "";
    allowedCharacter += symAlphaNumeric ? generateAll : "";
   

  for (let i = 0; i < passwordLength; i++) {
    let randomPassword = Math.floor(Math.random() * allowedCharacter.length);
    password += allowedCharacter[randomPassword];
  }
 
  if (lowerCaseOnly) {
    result.textContent = password;
  } else if (upperCaseOnly) {
    result.textContent = password;
  } else if (numberOnly) {
        result.textContent = password;
  } else if (symbolOnly) {
       result.textContent = password;
  } else if (lowerNdUpperCase) {
       result.textContent = password;
  } else if (AlphaNumeric) {
      result.textContent = password;
  } else if (symAlphaNumeric) {
        result.textContent = password;
  } else {
    result.textContent = `At least a radio button has to be clicked, if you want a to generate a random password`;
  }

  return password;  
}
