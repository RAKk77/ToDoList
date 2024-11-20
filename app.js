const text = document.querySelector(".contain > input");
const btn = document.querySelector(".contain > button");
const list = document.querySelector(".list-con");

btn.onclick = function () {
  if (text.value == "") {
    return null;
  } else {
    let li = document.createElement("li");
    li.classList.add(
      "list-none",
      "pl-2",
      "pt-3",
      "text-[1.2rem]",
      "flex",
      "justify-between"
    );
    let span = document.createElement("span");
    span.classList.add(
      "ml-[90px]",
      "px-[11px]",
      "py-[2px]",
      "text-center",
      "bg-red-600",
      "rounded-full"
    );
    li.innerHTML = text.value;
    li.appendChild(span);
    span.innerText = "-";

    list.appendChild(li);
    text.value = "";
  }
};

list.addEventListener("click", function (e) {
  if (e.target.tagName == "SPAN") {
    e.target.parentElement.remove();
  }
});
