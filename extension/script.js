function getStarted() {
  alert("Redirecting to sign-up or dashboard...");
}

function learnMore() {
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
}

function toggleModal(show) 
{
  const modal = document.getElementById("loginModal");
  modal.style.display = show ? "flex" : "none";
}

// Show modal on Sign In click
document.querySelector('.btn.small').addEventListener('click', () => toggleModal(true));

// Close modal when clicking outside content
window.addEventListener("click", function (e) 
{
  const modal = document.getElementById("loginModal");
  if (e.target === modal) toggleModal(false);
});
function toggleDropdown(event, dropdownId) {
  event.preventDefault();
  // Close all dropdowns first
  document.querySelectorAll('.nav-item').forEach(item => {
    if (item.querySelector('.dropdown-content')) {
      item.classList.remove('active');
    }
  });
  // Toggle the clicked dropdown
  const parent = event.target.closest('.nav-item');
  if (parent) {
    parent.classList.toggle('active');
  }
}

// Optional: Close dropdowns when clicking outside
document.addEventListener('click', function(e) {
  if (!e.target.closest('.nav-item')) {
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
  }
});


