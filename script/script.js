document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Impede o envio real do formulário

            // Obter os valores dos campos
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();

            // Validação básica
            if (!name || !email || !subject || !message) {
                alert('Por favor, preencha todos os campos do formulário.');
                return;
            }

            // Exibe o alerta de sucesso
            alert('Mensagem enviada com sucesso!');

            // Limpa o formulário
            contactForm.reset();
        });
    }
});
