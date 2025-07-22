document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault(); 

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();

           
            if (!name || !email || !subject || !message) {
                alert('Por favor, preencha todos os campos do formulário.');
                return;
            }

            
            alert('Mensagem enviada com sucesso!');

        
            contactForm.reset();
        });
    }
});
