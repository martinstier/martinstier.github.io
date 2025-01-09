const dropButtons = document.querySelectorAll(".drop-button");

dropButtons.forEach(button => {
    button.addEventListener("click", event => {
        const targetID = button.getAttribute("data-target");
        const targetElement = document.getElementById(targetID);

        const mainElement = document.querySelector("main");
        const footerElement = document.querySelector("footer");

        const mainDropButtons = mainElement.querySelectorAll(".drop-button");
        mainDropButtons.forEach(mainButton => {
            const mainTargetID = mainButton.getAttribute("data-target");
            const mainTargetElement = document.getElementById(mainTargetID);

            if (mainButton !== button) {
                footerElement.appendChild(mainButton);
                footerElement.appendChild(mainTargetElement);

                mainTargetElement.style.display = "none";
                mainButton.innerHTML = '<i class="fa-solid fa-caret-right"></i>&nbsp;&nbsp;' + mainButton.textContent.trim();
            }
        });

        mainElement.appendChild(button);
        mainElement.appendChild(targetElement);
        button.innerHTML = '<i class="fa-solid fa-caret-down"></i>&nbsp;&nbsp;' + button.textContent.trim();
        targetElement.style.display = "block";
    });
});
