document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll("section");

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();  // Prevent the default anchor link behavior
            
            // Hide all sections
            sections.forEach(section => {
                section.style.display = "none";
            });

            // Show the selected section
            const targetId = link.getAttribute("href").substring(1);  // Get the target section ID
            const targetSection = document.getElementById(targetId);
            targetSection.style.display = "block";
        });
    });

    // Show the home section by default
    document.getElementById("home").style.display = "block";
});
