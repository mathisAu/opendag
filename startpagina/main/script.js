// Functie om naar een element te scrollen met een aangepaste offset
function scrollToElement(id) {
    var element = document.getElementById(id);
    if (element) {
        // Scroll naar het element
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Corrigeer de scrollpositie door de hoogte van de header af te trekken
        var headerOffset = document.querySelector('.header').offsetHeight;
        var elementPosition = element.getBoundingClientRect().top;
        var offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: window.pageYOffset + offsetPosition,
            behavior: 'smooth'
        });
    }
}

// Functie om de inhoud van een blok te toggelen
function toggleContent(id) {
    var content = document.getElementById(id);
    var isExpanded = content.classList.contains('expanded');

    // Sluit alle inhoudsblokken
    document.querySelectorAll('.hidden-content').forEach(function (el) {
        el.classList.remove('expanded');
    });
    document.querySelectorAll('.block').forEach(function (el) {
        el.classList.remove('expanded');
    });

    // Open het gewenste blok
    if (!isExpanded) {
        var block = document.querySelector('.block[onclick="toggleContent(\'' + id + '\')"]');
        block.classList.add('expanded');
        content.classList.add('expanded');

        // Scroll naar het blok
        scrollToElement(id);
    }
}
// Actie voor de extra knop

// Functie om de extra vakinformatie te tonen/verbergen
function extraButtonAction() {
    var vakInformatie = document.getElementById('vak-informatie');
    var isVisible = vakInformatie.classList.contains('visible');

    if (isVisible) {
        vakInformatie.classList.remove('visible');
    } else {
        vakInformatie.classList.add('visible');
    }
}



