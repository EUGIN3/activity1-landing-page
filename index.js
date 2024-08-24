let sections = document.querySelectorAll('section'); // Selecting the section element.
let navLinks = document.querySelectorAll('header nav ul a'); // Selecting the all the link element in header (navigation bar).

// Loop through the list of link and highligth the current section. 
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 200; // Change color when it reaches this offset.
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        let scroll = scrollY;   

        // Checking if the offset is reach.
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active'); // Remove the current active ID when the changing is trigger.
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active'); // Add the removed ID to the current part of the page that is showed.
            });
        } 
    });
};