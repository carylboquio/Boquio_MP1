document.addEventListener("DOMContentLoaded", () => {
    var logo = document.getElementById("home")
    
    logo.addEventListener("mouseover", () => {  
    logo.src = "logo-hover.png";
    });

    logo.addEventListener("mouseout", () => {
        logo.src = "logo.png";
    });
});
