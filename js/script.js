import {hash,userCreator} from "./functions.js";
const email = document.querySelector("#email");
const password = document.querySelector("#pass");
const submitBtn = document.querySelector("input[type=submit]");
const message = document.querySelector(".message");
const firstName = document.querySelector("#fName");
const lastName = document.querySelector("#lName");
const textArea = document.querySelector("textarea");
const loginBtn = document.querySelector(".login");
let newUser, users;

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    firstName.value == "" ||
    lastName.value == "" ||
    email.value == "" ||
    password.value == "" ||
    textArea.value == ""
  )
    alert("complete your data, please!");
  else {
    submitBtn.disabled = true;
    newUser = userCreator(
      firstName.value,
      lastName.value,
      hash(email.value),
      hash(password.value),
      textArea.value
    );
    console.log(newUser);
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    password.value = "";
    textArea.value = "";

    fetch("https://api.jsonbin.io/v3/b/66ef3dd2ad19ca34f8aa53da?meta=false", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Access-Key":
          "$2a$10$Nv7DRlqErVa4H50Kycw6p.V6XTwrfj9KFkpuEPE7v8QsDW3XbWoXO",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("not ok");
        }
        return res.json();
      })
      .then((data) => {
        users = data;
        users.push(newUser);

        fetch(
          "https://api.jsonbin.io/v3/b/66ef3dd2ad19ca34f8aa53da?meta=false",
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              "X-Access-Key":
                "$2a$10$Nv7DRlqErVa4H50Kycw6p.V6XTwrfj9KFkpuEPE7v8QsDW3XbWoXO",
            },
            body: JSON.stringify(users),
          }
        )
          .then((res) => {
            if (!res.ok) {
              feedBack("failed");
              submitBtn.disabled = false;
              throw new Error("Account failed");
            }
            feedBack("accepted");
            submitBtn.disabled = false;
            return res.json();
          })
          .then((data) => {
            console.log(data);
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  }
});

function feedBack(status) {
  if (status == "failed") {
    message.innerText = "account failed , try again";
    message.classList.add("show-failed-message");
    resetFeedBack();
  } else if (status == "accepted") {
    message.innerText = "account created successfully";
    message.classList.add("show-accepted-message");
    resetFeedBack();
    setTimeout(() => {
      loginBtn.classList.add("show-login");
    }, 1000);
  }
}
function resetFeedBack() {
  setInterval(() => {
    message.classList.remove("show-failed-message");
    message.classList.remove("show-accepted-message");
    message.innerText = "";
  }, 2000);
}

