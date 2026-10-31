
console.log("Welcome to Taha Masoody's website!");

document.addEventListener("DOMContentLoaded", () => {
    const year = new Date().getFullYear();

    const footerText = document.querySelector("footer p:last-child");

    if (footerText) {
        footerText.textContent = `© ${year} Taha Masoody`;
    }
});
