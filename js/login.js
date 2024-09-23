import hash from "./hash.js";
const loginBtn = document.querySelector(".login-btn");
const email = document.querySelector("#email");
const password = document.querySelector("#pass");
const message = document.querySelector(".message");
let accounts;
// get the users
// after click login
// if empty fields alert complete
// else
// hash the email and search for that object using find method
// then compare the 2 passwords
// save the object in local storage
// if okay go to account page
// render data from storage

// get all accounts from the server and store them in users variable
fetch("https://api.jsonbin.io/v3/b/66ef3dd2ad19ca34f8aa53da?meta=false", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "X-Access-Key":
      "$2a$10$Nv7DRlqErVa4H50Kycw6p.V6XTwrfj9KFkpuEPE7v8QsDW3XbWoXO",
  },
})
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    accounts = data;
    console.log(accounts);
  });

loginBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (email.value == "" || password.value == "") {
    alert("complete your data please");
  } else {
    let user = accounts.find(
      (acc) =>
        acc.email == hash(email.value) && acc.password == hash(password.value)
    );
    if (user) {
      // save user data to local storage
      localStorage.setItem("user-data", JSON.stringify(user));
      // take user to my account page
      window.location.href = "/account.html";
    } else {
      email.value = "";
      password.value = "";
      message.innerText = "Wrong password or Email";
      message.classList.add("show-failed-message");
    }
  }
});
