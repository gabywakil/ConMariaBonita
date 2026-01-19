document.addEventListener("DOMContentLoaded", () => {

    // Variable global para almacenar el sexo
    let sexoSeleccionado = null;

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

    // =============================
    // CAPTURAR SEXO SELECCIONADO
    // =============================
    const genderButtons = document.querySelectorAll('.gender-btn');
    
    genderButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            genderButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Capturar el texto del botón y limpiar
            sexoSeleccionado = btn.textContent.trim().toLowerCase();
            console.log('Sexo seleccionado:', sexoSeleccionado);
        });
    });

    // =============================
    // BOTÓN GENERAR PLAN
    // =============================
    const generateBtn = document.getElementById('generatePlan');

    if (generateBtn) {
        generateBtn.addEventListener('click', () => {
            // Verificar si se seleccionó un sexo
            if (!sexoSeleccionado) {
                alert('Por favor selecciona Hombre o Mujer antes de continuar');
                return;
            }

            console.log('Guardando en localStorage:', sexoSeleccionado);
            
            // Guardar en localStorage
            localStorage.setItem('sexoRunner', sexoSeleccionado);
            
            // Verificar que se guardó correctamente
            const verificar = localStorage.getItem('sexoRunner');
            console.log('Verificación - Guardado en localStorage:', verificar);

            // Redirigir a la página del plan
            window.location.href = 'planrunner.html';
        });
    }
});