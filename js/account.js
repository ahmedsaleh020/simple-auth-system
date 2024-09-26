import { hash, userCreator } from "./functions.js";
const accountInfo = document.querySelector(".account-info");
const inputContainer = document.querySelector(".input");
const input = document.querySelector("input");
const saveBtn = document.querySelector("button");
let h = document.createElement("h1");
let currentUserData = JSON.parse(localStorage.getItem("user-data"));
let users, user;
h.innerText = "My Account";

renderDomElements();

function renderDomElements() {
  accountInfo.innerHTML = "";
  accountInfo.prepend(h);
  Object.entries(currentUserData).forEach(([info, content]) => {
    let card = `
          <div class="container ${info}">
          <label
            >${info} <span class="btn edit-btn" data-info="${info}">✎</span></label
          >

          <span class="content" data-info=${info}>${content}</span>
        </div>`;
    accountInfo.innerHTML += card;
  });
}

// future feature to give user the ability to edit his data
// getUsers();
// setTimeout(() => {
//   updateUserData();
// }, 200);

// function saveBtnFunctionality(
//   e,
//   pass = false,
//   email = false,
//   sensitive = false,
//   user
// ) {
//   saveBtn.addEventListener("click", function () {
//     if (input.value) {
//       if (sensitive) {
//         user[`${e.target.dataset.info}`] = hash(input.value);
//         // update the json file with updated data
//         updateUsers();
//         if (pass) {
//           localStorage.setItem(
//             "user-data",
//             JSON.stringify({
//               ...userCreator(
//                 user["First Name"],
//                 user["Last Name"],
//                 user["Email"],
//                 user["Password"],
//                 user["Bio"]
//               ),
//               Email: currentUserData["Email"],
//               Password: input.value,
//             })
//           );
//         }
//         if (email) {
//           localStorage.setItem(
//             "user-data",
//             JSON.stringify({
//               ...userCreator(
//                 user["First Name"],
//                 user["Last Name"],
//                 user["Email"],
//                 user["Password"],
//                 user["Bio"]
//               ),
//               Password: currentUserData["Password"],
//               Email: input.value,
//             })
//           );
//         }
//       } else {
//         user[`${e.target.dataset.info}`] = input.value;
//         // update the json file with updated data
//         updateUsers();
//         // update local storage
//         localStorage.setItem(
//           "user-data",
//           JSON.stringify({
//             ...userCreator(
//               user["First Name"],
//               user["Last Name"],
//               user["Email"],
//               user["Password"],
//               user["Bio"]
//             ),
//             Email: currentUserData["Email"],
//             Password: currentUserData["Password"],
//           })
//         );
//         // update dom
//         currentUserData = JSON.parse(localStorage.getItem("user-data"));
//         renderDomElements();
//       }
//     } 
//     else {
//       alert("can't save empty values");
//     }

//     // clear input
//     input.value = "";
//     // hide input
//     inputContainer.classList.remove("show");
//   });
// }
// function updateUsers() {
//   fetch("https://api.jsonbin.io/v3/b/66ef3dd2ad19ca34f8aa53da?meta=false", {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//       "X-Access-Key":
//         "$2a$10$Nv7DRlqErVa4H50Kycw6p.V6XTwrfj9KFkpuEPE7v8QsDW3XbWoXO",
//     },
//     body: JSON.stringify(users),
//   })
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => console.error(err));
// }
// function getUsers() {
//   fetch("https://api.jsonbin.io/v3/b/66ef3dd2ad19ca34f8aa53da?meta=false", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       "X-Access-Key":
//         "$2a$10$Nv7DRlqErVa4H50Kycw6p.V6XTwrfj9KFkpuEPE7v8QsDW3XbWoXO",
//     },
//   })
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       users = data;
//     });
// }
// function updateUserData() {
//   accountInfo.addEventListener("click", function (e) {
//     if (e.target.classList.contains("btn")) {
//       // show the input container
//       inputContainer.classList.add("show");
//       user = users.find(
//         (user) =>
//           user[`${e.target.dataset.info}`] ==
//           currentUserData[`${e.target.dataset.info}`]
//       );
//       // console.log(e.target.parentElement.parentElement.querySelector(".content"));
//       if (
//         e.target.parentElement.parentElement.querySelector(".content").dataset
//           .info == "Email"
//       ) {
//         saveBtnFunctionality(e, false, true, true, user);
//       } else if (
//         e.target.parentElement.parentElement.querySelector(".content").dataset
//           .info == "Password"
//       ) {
//         saveBtnFunctionality(e,true,false,true,user);
//       } else {
//         saveBtnFunctionality(e,false,false,false,user);
//       }
//     }
//   });
// }