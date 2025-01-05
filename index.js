const dropButtons = document.querySelectorAll(".drop-button");

dropButtons.forEach(button => {
    button.addEventListener("click", event => {
        const targetID = button.getAttribute("data-target");
        const targetElement = document.getElementById(targetID);

        if (targetElement.style.display === "none" || targetElement.style.display === "") {
            button.innerHTML = '<i class="fa-solid fa-caret-down"></i>&nbsp;&nbsp;' + button.textContent.trim();
            targetElement.style.display = "block";
        }

        else {
            targetElement.style.display = "none";
            button.innerHTML = '<i class="fa-solid fa-caret-right"></i>&nbsp;&nbsp;' + button.textContent.trim();
        }
    }
    )
}
)

