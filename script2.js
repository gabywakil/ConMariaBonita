document.addEventListener("DOMContentLoaded", () => {

    function singleSelect(containerClass, buttonClass) {
        const containers = document.querySelectorAll(containerClass);

        containers.forEach(container => {
            const buttons = container.querySelectorAll(buttonClass);

            buttons.forEach(button => {
                button.addEventListener("click", () => {
                    buttons.forEach(b => b.classList.remove("active"));
                    button.classList.add("active");
                });
            });
        });
    }

    // Sexo (Hombre / Mujer)
    singleSelect(".gender-buttons", ".gender-btn");

    // Nivel de actividad
    singleSelect(".activity-buttons", ".activity-btn");

    // Objetivo principal
    singleSelect(".goal-buttons", ".goal-btn");

});

/* ======================
   SEXO (FORMULARIO)
====================== */
const genderButtons = document.querySelectorAll('.gender-btn');
let sexoSeleccionado = null;

genderButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        genderButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        sexoSeleccionado = btn.textContent.trim().toLowerCase();
    });
});

/* ======================
   GENERAR PLAN
====================== */
const generateBtn = document.querySelector('.generate-button');

generateBtn.addEventListener('click', () => {
    if (!sexoSeleccionado) {
        alert('Por favor selecciona Hombre o Mujer');
        return;
    }

    // Guardamos el sexo seleccionado del formulario
    localStorage.setItem('sexoRunner', sexoSeleccionado);

    // Redirige
    window.location.href = 'plan-runner.html';
});


document.getElementById('generatePlan').addEventListener('click', function () {
    window.location.href = 'plan-runner.html';
});

