document.addEventListener("DOMContentLoaded", () => {
    const themeBtn = document.getElementById("themeToggleButton");
    const body = document.body;

    if (!themeBtn) {
        console.error('Theme toggle button not found');
        return;
    }

    const lightTheme = "light-theme";
    const darkTheme = "dark-theme";

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        body.classList.add(savedTheme);
    } else {
        body.classList.add(darkTheme);
        localStorage.setItem("theme", darkTheme);
    }

    function updateButtonText(){
        if(body.classList.contains("dark-theme")){
            themeBtn.textContent = "Switch to Light Theme";
        }else{
            themeBtn.textContent = "Switch to Dark Theme";
        }
    }
    updateButtonText();

    themeBtn.addEventListener("click", () => {
        if(body.classList.contains("light-theme")){
            body.classList.remove(lightTheme);
            body.classList.add(darkTheme);
            localStorage.setItem("theme", darkTheme);
        }else{
            body.classList.remove(darkTheme);
            body.classList.add(lightTheme);
            localStorage.setItem("theme", lightTheme);
        }
        updateButtonText();
    });



});