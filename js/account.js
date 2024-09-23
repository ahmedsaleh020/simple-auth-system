let currentUserData = JSON.parse(localStorage.getItem("user-data"));
const boxes = document.querySelectorAll("p");
console.log(currentUserData);
boxes.forEach((box) => {
  let id = box.dataset.ref;
  box.innerText = `${id}: ${currentUserData[id]}`;
});
