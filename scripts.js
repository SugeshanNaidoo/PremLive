        const burgerMenu = document.querySelector('.burger-menu');
        const navLinks = document.querySelector('.nav-links');
        const burgerIcon = document.querySelector('.burger-icon');
        const body = document.body;

        burgerMenu.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            burgerIcon.classList.toggle('active');
            body.classList.toggle('menu-open');
        });

        // Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                burgerIcon.classList.remove('active');
                body.classList.remove('menu-open');
            });
        });

		
		window.addEventListener('load', function() {
    // Set a timeout for 15 seconds
    setTimeout(function() {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    }, 400); // 9 seconds
});
