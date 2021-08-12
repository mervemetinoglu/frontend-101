const nodeList = document.querySelectorAll("li");
let ulDOM = document.querySelector("#itemList");
const closeButtonSpan = `<span class="close-button">${"\u00D7"}</span>`;

nodeList.forEach((item) => (item.innerHTML += closeButtonSpan));

const closeItem = () => {
  const closeButtons = document.querySelectorAll(".close-button");

  closeButtons.forEach((item) =>
    item.addEventListener("click", () => {
      console.log(item);
      let div = item.parentElement;
      div.style.display = "none";
    })
  );
};

let itemslist = document.querySelector("ul");
itemslist.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    }
  },
  false
);

const addListItem = () => {
  let input = document.querySelector("#inputText").value;

  if (input !== "") {
    const liDo = `<li>${input} ${closeButtonSpan}</li>`;
    ulDOM.innerHTML += liDo;
    closeItem();
  } else {
    $(document).ready(function () {
      $(".toast").toast("show");
    });
  }
};

closeItem();
