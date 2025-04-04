document.addEventListener("DOMContentLoaded", function () {
    const headers = document.querySelectorAll("h1, h2, h3");
    headers.forEach(header => {
        header.style.opacity = "0";
        header.style.transform = "translateY(-20px)";
        setTimeout(() => {
            header.style.transition = "opacity 1s ease-out, transform 1s ease-out";
            header.style.opacity = "1";
            header.style.transform = "translateY(0)";
        }, 300);
    });
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.transition = "color 0.5s ease-in-out";
            link.style.color = "#ffccff";
        });

        link.addEventListener("mouseout", () => {
            link.style.color = "#fff";
        });
    });
    const paragraphs = document.querySelectorAll("p");
    paragraphs.forEach(paragraph => {
        paragraph.addEventListener("click", () => {
            paragraph.style.transition = "opacity 0.6s ease-in-out";
            paragraph.style.opacity = paragraph.style.opacity === "0" ? "1" : "0";
        });
    });
});