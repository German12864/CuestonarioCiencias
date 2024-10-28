document.addEventListener('DOMContentLoaded', function() {
    let currentCard = 1;
    const totalCards = 4; // Total de tarjetas
    const totalQuestions = 31; // Total de preguntas
    const answers = {
        q1: 'A',
        q2: 'A',
        q3: 'A',
        q4: 'A',
        q5: 'A',
        q6: 'A',
        q7: 'A',
        q8: 'A',
        q9: 'A',
        q10: 'A',
        q11: 'A',
        q12: 'A',
        q13: 'A',
        q14: 'A',
        q15: 'A',
        q16: 'A',
        q17: 'A',
        q18: 'A',
        q19: 'A',
        q20: 'A',
        q21: 'A',
        q22: 'A',
        q23: 'A',
        q24: 'A',
        q25: 'A',
        q26: 'A',
        q27: 'A',
        q28: 'A',
        q29: 'A',
        q30: 'A',
        q31: 'A'
    };

    // Muestra la primera tarjeta
    document.getElementById('card' + currentCard).style.display = 'block';

    // Actualiza la barra de progreso
    function updateProgressBar() {
        const progressBar = document.getElementById('progressBar');
        const progress = ((currentCard - 1) / totalCards) * 100;
        progressBar.style.width = progress + '%';
        progressBar.setAttribute('aria-valuenow', progress);
    }

    // Maneja el evento de clic en el botón "Siguiente"
    document.querySelectorAll('.next').forEach(button => {
        button.addEventListener('click', function() {
            document.getElementById('card' + currentCard).style.display = 'none';
            currentCard++;
            if (currentCard <= totalCards) {
                document.getElementById('card' + currentCard).style.display = 'block';
                updateProgressBar(); // Actualiza la barra de progreso
            }
        });
    });

    // Maneja el evento de clic en el botón "Enviar"
    document.querySelector('.submit').addEventListener('click', function() {
        let score = 0;

        // Verifica las respuestas
        for (let i = 1; i <= totalQuestions; i++) {
            const question = 'q' + i;
            const selected = document.querySelector(`input[name="${question}"]:checked`);
            if (selected && selected.value === answers[question]) {
                score++;
            }
        }

        // Muestra el resultado
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `Tu puntaje es: ${score} de ${totalQuestions}`;
        resultDiv.style.display = 'block';
    });
});
