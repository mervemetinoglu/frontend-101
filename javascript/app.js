let nodeList = document.getElementsByTagName("LI");

for (let index = 0; index < nodeList.length; index++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close-button";
  span.appendChild(txt);
  nodeList[index].appendChild(span);
}

let close = document.getElementsByClassName("close-button");

for (let index = 0; index < close.length; index++) {
  close[index].onclick = function () {
    let div = this.parentElement;
    div.style.display = "none";
  };
}

let list = document.querySelector("ul");
list.addEventListener(
  "click",
  (ev) => {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

let ulDOM = document.querySelector("#itemList");

const addListItem = () => {
  let input = document.querySelector("#inputText").value;
  let inputText = document.createTextNode(input);
  let liDOM = document.createElement("li");
  liDOM.appendChild(inputText);

  if (input !== "") {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close-button";
    span.appendChild(txt);
    liDOM.appendChild(span);
    ulDOM.appendChild(liDOM);

    for (i = 0; i < close.length; i++) {
      close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
      };
    }
  } else {
    console.log("empty input");
  }
};
