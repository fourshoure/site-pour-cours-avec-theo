const liensNav = document.querySelectorAll('.menu .page');
const pages = document.querySelectorAll('.section-page');


liensNav.forEach(lien => {
    lien.addEventListener('click', function (e) {

        e.preventDefault();

        
        const targetId = this.getAttribute('data-target');

        
        liensNav.forEach(l => l.classList.remove('actif'));
        this.classList.add('actif');

        
        pages.forEach(page => {
            if (page.id === targetId) {
                page.classList.remove('page-masquee');
                page.classList.add('page-active');
            } else {
                page.classList.remove('page-active');
                page.classList.add('page-masquee');
            }
        });
        
        
        history.pushState(null, '', `#${targetId}`);
    });
});