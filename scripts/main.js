 // Yoqimli animatsiya effekti sahifani ochishda
 document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.container');
    container.style.opacity = 0;
    container.style.transform = "scale(0.8)";
    setTimeout(() => {
        container.style.transition = "all 0.5s ease-in-out";
        container.style.opacity = 1;
        container.style.transform = "scale(1)";
    }, 100);
});