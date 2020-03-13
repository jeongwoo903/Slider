const wrapper = document.querySelector("ul");

setInterval(() => {
    let firstList = document.querySelector("li:nth-child(1)");
    let lastList = document.querySelector("li:nth-child(5)");
    lastList.insertAdjacentElement("afterend", firstList);
}, 1000);



