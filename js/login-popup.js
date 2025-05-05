document.addEventListener("DOMContentLoaded", () => {
  // Get elements
  const loginButton = document.querySelector(".auth-buttons .btn:first-child")
  const loginPopupOverlay = document.getElementById("loginPopupOverlay")
  const closeButton = document.querySelector(".login-popup-close")

  // Open popup when login button is clicked
  loginButton.addEventListener("click", (e) => {
    e.preventDefault()
    loginPopupOverlay.style.display = "flex"
    document.body.style.overflow = "hidden" // Prevent scrolling when popup is open
  })

  // Close popup when close button is clicked
  closeButton.addEventListener("click", () => {
    loginPopupOverlay.style.display = "none"
    document.body.style.overflow = "" // Restore scrolling
  })

  // Close popup when clicking outside the popup
  loginPopupOverlay.addEventListener("click", (e) => {
    if (e.target === loginPopupOverlay) {
      loginPopupOverlay.style.display = "none"
      document.body.style.overflow = "" // Restore scrolling
    }
  })

  // Prevent form submission (for demo purposes)
  const loginForm = document.querySelector(".login-form")
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault()
      // Here you would typically handle the login logic
      console.log("Login form submitted")
    })
  }
})
