(function () {
    const leftMove = document.querySelector(".leftMove");
    const rightMove = document.querySelector(".rightMove");

    function slideUI() {
        let remValue = 0;
        const ulElem = document.querySelector("ul");

        leftMove.addEventListener("click", function () {
            if (remValue === 0) remValue += 60;
            else remValue -= 15;
            ulElem.style.transform = `translate(-${remValue}rem)`;
        })

        rightMove.addEventListener("click", function () {
            if (remValue === 60) remValue -= 60;
            else remValue += 15;
            ulElem.style.transform = `translate(-${remValue}rem)`;
        })
    }

    slideUI();
})();