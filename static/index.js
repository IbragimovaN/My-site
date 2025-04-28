import { createButton } from "./createBtn.js";
import { createRangeInput } from "./createRangeInput.js";
import { dataArr } from "./data.js";

import { currentSound, onClickBtn } from "./onClickBtn.js";
console.log("index js !!!!");
const h1 = document.querySelector("h1");
const btnWrapper = document.createElement("div");
btnWrapper.className = "btnWrapper";
document.body.appendChild(btnWrapper);

dataArr.map((item) => {
  console.log(item);
  createButton(item, btnWrapper);
});

const volumeСontrol = createRangeInput(btnWrapper);

btnWrapper.addEventListener("click", (e) => {
  const target = e.target;
  if (target && target.id) {
    onClickBtn(dataArr, h1, target.id);
  }
});

volumeСontrol.addEventListener("input", (e) => {
  const target = e.target;
  if (target && target.value) {
    if (currentSound) {
      currentSound.volume = Number(target.value);
    }
  }
});
