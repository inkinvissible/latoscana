document.getElementById('contact-nav').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe normalmente

    // Captura los valores del formulario
    var name = document.getElementById('InputFullname').value;
    var message = document.getElementById('InputMessage').value;

    // Construye el mensaje para WhatsApp
    var whatsappMessage = "Buenos días. Mi nombre es " + encodeURIComponent(name) + 
                          ". " + encodeURIComponent(message);

    // Número de teléfono (con el código de país)
    var phoneNumber = "5493544623216";

    // Construye la URL de WhatsApp
    var whatsappURL = "https://api.whatsapp.com/send/?phone=" + phoneNumber + 
                      "&text=" + whatsappMessage;

    // Redirige a WhatsApp con el mensaje predefinido
    window.location.href = whatsappURL;
});
