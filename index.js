const dropButtons = document.querySelectorAll(".drop-button");

dropButtons.forEach(button => {
    button.addEventListener("click", event => {

        const targetID = button.getAttribute("data-target");
        const targetElement = document.getElementById(targetID);

        const selectedElement = document.querySelector(".selected-drop");

        selectedElement.innerHTML = ''; // Clear the selected section

        const buttonClone = button.cloneNode(true);
        const targetElementClone = targetElement.cloneNode(true);
        selectedElement.appendChild(buttonClone);
        selectedElement.appendChild(targetElementClone);

        buttonClone.innerHTML = '<i class="fa-solid fa-caret-down"></i>&nbsp;&nbsp;<b>' + buttonClone.textContent.trim() + '</b>';
        targetElementClone.style.display = "block";
    });
});
