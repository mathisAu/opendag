function toggleReview(id) {
    const reviewContent = document.getElementById(id);
    if (reviewContent.style.display === "block") {
        reviewContent.style.display = "none";
    } else {
        reviewContent.style.display = "block";
    }
}
document.addEventListener("DOMContentLoaded", function() {
    // Voeg een klik-event toe aan elk element met de class 'toggle-button'
    document.querySelectorAll('.toggle-button').forEach(function(button) {
        button.addEventListener('click', function() {
            var targetId = this.getAttribute('onclick').match(/'([^']+)'/)[1]; // Haal de id uit de onclick attribute
            var targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});