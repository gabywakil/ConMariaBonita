document.addEventListener('DOMContentLoaded', () => {

    const buttons = document.querySelectorAll('.read-more');

    buttons.forEach(button => {
        const section = button.closest('.section-block');
        const text = section.querySelector('.section-text');

        button.addEventListener('click', () => {
            text.classList.toggle('collapsed');
            button.classList.toggle('active');

            if (text.classList.contains('collapsed')) {
                button.innerHTML = 'Leer más <span class="arrow-down">▼</span>';
            } else {
                button.innerHTML = 'Leer menos <span class="arrow-up">▲</span>';
            }
        });
    });

});


