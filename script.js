document.addEventListener("DOMContentLoaded", () => {
    var logo = document.getElementById("home")
    var productSearch = document.getElementById("search-bar");

    logo.addEventListener("mouseover", () => {  
    logo.src = "logo-hover.png";
    });

    logo.addEventListener("mouseout", () => {
        logo.src = "logo.png";
    });

    /*https://www.youtube.com/watch?v=ifi6dXOl3g4*/
    productSearch.addEventListener("keyup", e => {
        var current = e.target.value.toLowerCase();
        var products = document.querySelectorAll(".product-card")

        products.forEach(product => {
            var name = product.querySelector(".product-name").textContent.toLowerCase();
            if (name.includes(current)) { product.style.display = ""; } 
            else { product.style.display = "none"; }
        });
    });

    var productCards = document.querySelectorAll(".product-card");

    productCards.forEach(card => {
        var randomAniDelay = Math.floor(Math.random()*500);
        card.style.animation = 'fadeIn 1s ${randomAniDelay}ms ease forwards';
    });
});
