export  function hash(data) {
    return CryptoJS.SHA256(data).toString();
  }
  export  function userCreator(fName, lName, email, pass, describtion) {
    return {
      "First Name": fName,
      "Last Name": lName,
      "Email": email,
      "Password": pass,
      "Bio": describtion,
    };
  }
  