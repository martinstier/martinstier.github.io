const dropButtons = document.querySelectorAll(".drop-button");

dropButtons.forEach(button => {
    button.addEventListener("click", event => {

        const targetID = button.getAttribute("data-target");
        const targetElement = document.getElementById(targetID);

        const selectedElement = document.querySelector(".selected-drop");

        selectedElement.innerHTML = '';

        // Hide any existing drop buttons and their target elements in the selected section
        const selectedDropButtons = selectedElement.querySelectorAll(".drop-button");
        selectedDropButtons.forEach(selectedButton => {
            const selectedTargetID = selectedButton.getAttribute("data-target");
            const selectedTargetElement = document.getElementById(selectedTargetID);

            selectedTargetElement.style.display = "none";
            selectedButton.innerHTML = '<i class="fa-solid fa-caret-right"></i>&nbsp;&nbsp;' + selectedButton.textContent.trim();
        });

        selectedElement.innerHTML = ''; // Clear the selected section

        const buttonClone = button.cloneNode(true);
        const targetElementClone = targetElement.cloneNode(true);
        selectedElement.appendChild(buttonClone);
        selectedElement.appendChild(targetElementClone);

        buttonClone.innerHTML = '<i class="fa-solid fa-caret-down"></i>&nbsp;&nbsp;' + buttonClone.textContent.trim();
        targetElementClone.style.display = "block";
    });
});
