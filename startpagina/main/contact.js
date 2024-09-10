// Functie om verborgen content te tonen/verbergen
function toggleContent(id) {
    const content = document.getElementById(id);
    if (content.classList.contains('expanded')) {
        content.classList.remove('expanded');
    } else {
        content.classList.add('expanded');
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