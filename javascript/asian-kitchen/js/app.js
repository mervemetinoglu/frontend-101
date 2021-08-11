import { menu } from "./menu.js";

//get elements by their class name from html dom
const buttonDOM = document.querySelector(".btn-container");
const sectionCenterDOM = document.querySelector(".section-center");

//get categories from menu object
let categories = [...new Set(menu.map((item) => item.category))];
categories.unshift("All");

//generate buttons with category names and add click event
const generateButtons = () => {
  const btn = categories.map((category) => {
    return `<button class="btn-item">${category}</button>`;
  });

  buttonDOM.innerHTML = btn.join("");
  const allButtons = document.querySelectorAll(".btn-item");

  allButtons.forEach((button) => {
    button.addEventListener("click", () => {
      let buttonCategory = button.textContent;
      buttonCategory === "All"
        ? generateItems(menu)
        : generateItems(
            menu.filter((item) => item.category === buttonCategory)
          );
    });
  });
};

//display menu items
const generateItems = (results) => {
  let generateItem = "";
  results.map((item) => {
    generateItem += `<div class="col-lg-6 menu-items">
                        <div class="menu-info">
                            <img
                                src="${item.img}"
                                alt="${item.title}"
                                class="photo"
                            />
                            <div class="text-container">
                                <div class="menu-title">
                                    <h4>${item.title}</h4>
                                    <h4>${item.price}</h4>
                                </div>
                                <div class="menu-text">
                                    ${item.desc}
                                </div>
                            </div>
                        </div>
                    </div>`;
  });
  sectionCenterDOM.innerHTML = generateItem;
};

generateButtons();
generateItems(menu);
