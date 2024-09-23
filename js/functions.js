export  function hash(data) {
    return CryptoJS.SHA256(data).toString();
  }
  export  function userCreator(fName, lName, email, pass, describtion) {
    return {
      firstName: fName,
      lastName: lName,
      email: email,
      password: pass,
      about: describtion,
    };
  }
  