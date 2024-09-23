let currentUserData = JSON.parse(localStorage.getItem("user"));
const boxes = document.querySelectorAll("p");
console.log(currentUserData);
boxes.forEach((box) => {
  console.log("user", currentUserData);
  let id = box.dataset.ref;

  box.innerText = `${id}: ${currentUserData[id]}`;
});
