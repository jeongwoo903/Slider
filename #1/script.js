const wrapper = document.querySelector("ul");

wrapper.addEventListener("click", function (e) {
    let firstList = document.querySelector("li:nth-child(1)");
    let lastList = document.querySelector("li:nth-child(6)");
    lastList.insertAdjacentElement("afterend", firstList);
})


