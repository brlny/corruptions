console.log("Anti-Corruption Website Ready");

// Highlight current page in navigation
const navLinks = document.querySelectorAll("nav a");
const currentPage = window.location.pathname.split("/").pop() || "index.html";

navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.style.background = "rgba(255, 204, 0, 0.3)";
        link.style.fontWeight = "600";
        link.style.transform = "scale(1.05)";
        link.style.borderRadius = "6px";
    }
    
}
);
