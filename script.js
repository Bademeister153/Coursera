// Funktion zum Umschalten der Navigationsmenü-Sichtbarkeit
function toggleMenu() {
    var nav = document.querySelector('nav ul');
    nav.classList.toggle('show');
}

document.querySelector('.hamburger-icon').addEventListener('click', toggleMenu);

// Sanftes Scrollen für Links in der Navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Filter-Funktion für die Projekte-Sektion
function filterProjects(category) {
    var projects = document.querySelectorAll('#projects article');
    projects.forEach(project => {
        if (category === 'all' || project.classList.contains(category)) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

document.querySelectorAll('.filter-button').forEach(button => {
    button.addEventListener('click', function() {
        filterProjects(this.getAttribute('data-category'));
    });
});

// Lightbox-Effekt für Projektbilder
function openLightbox(imageSrc) {
    var lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    document.body.appendChild(lightbox);

    var img = document.createElement('img');
    img.src = imageSrc;
    lightbox.appendChild(img);

    lightbox.addEventListener('click', function() {
        document.body.removeChild(lightbox);
    });
}

document.querySelectorAll('#projects img').forEach(image => {
    image.addEventListener('click', function() {
        openLightbox(this.src);
    });
});

// Formularvalidierung für das Kontaktformular
document.querySelector('#contact form').addEventListener('submit', function(e) {
    var valid = true;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        valid = false;
        alert('Bitte füllen Sie alle Felder aus.');
    }

    if (!valid) {
        e.preventDefault();
    }
});

// Echtzeit-Feedback für Benutzer
document.querySelectorAll('#contact input, #contact textarea').forEach(input => {
    input.addEventListener('input', function() {
        if (this.value === '') {
            this.classList.add('invalid');
        } else {
            this.classList.remove('invalid');
        }
    });
});
