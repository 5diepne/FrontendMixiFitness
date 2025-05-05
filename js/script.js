document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar")

    // Function to handle scroll event
    function handleScroll() {
        if (window.scrollY > 50) {
            // When scrolled down, add the sticky class
            navbar.classList.add("navbar-sticky")
        } else {
            // When at the top, remove the sticky class
            navbar.classList.remove("navbar-sticky")
        }
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll)

    // Initialize on page load
    handleScroll()

    // Carousel functionality
    const prevBtn = document.getElementById("prevBtn")
    const nextBtn = document.getElementById("nextBtn")

    // This is a placeholder for actual carousel functionality
    // In a real implementation, you would add logic to slide through items

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener("click", () => {
            console.log("Previous slide")
            // Add actual slide logic here
        })

        nextBtn.addEventListener("click", () => {
            console.log("Next slide")
            // Add actual slide logic here
        })
    }

    // Add hover effect to navigation links
    const navLinks = document.querySelectorAll(".nav-link")
    navLinks.forEach((link) => {
        link.addEventListener("mouseenter", function () {
            this.style.color = "#F15637"
        })

        link.addEventListener("mouseleave", function () {
            if (!this.classList.contains("active")) {
                this.style.color = ""
            }
        })
    })

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault()

            const targetId = this.getAttribute("href")
            if (targetId === "#") return

            const targetElement = document.querySelector(targetId)
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                })
            }
        })
    })
})



