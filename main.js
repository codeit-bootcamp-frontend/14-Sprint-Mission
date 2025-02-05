window.addEventListener('resize', () => {
    const elements = document.querySelectorAll('.section--normal');

    //for tablet
    elements.forEach((element) => {
        if (window.innerWidth <= 1200) {
            element.classList.remove('gap-64');
            element.classList.add('gap-24');
        } else {
            element.classList.remove('gap-24');
            element.classList.add('gap-64');
        }
    });
});