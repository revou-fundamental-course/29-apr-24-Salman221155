  document.addEventListener('DOMContentLoaded', function() {
    const accountSid = 'AC8d9b305d2107c917e859a3e0eaeddc7e';
    const authToken = '25cb9f34188608d38c3d4b727cd511c2';
    const client = Twilio(accountSid, authToken);

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();

      const formData = new FormData(contactForm);
      const name = formData.get('name');
      const phoneNumber = formData.get('tel');
      const email = formData.get('email');
      const message = formData.get('message');

      client.messages
        .create({
          body: `Pesan dari ${name}: ${message}`,
          from: 'whatsapp:+18482665053',
          to: `whatsapp:${phoneNumber}`
        })
        .then(message => {
          console.log('Pesan terkirim:', message.sid);
          contactForm.reset();
          alert('Pesan telah terkirim!');
        })
        .catch(error => {
          console.error('Kesalahan dalam mengirim pesan:', error);
          alert('Maaf, terjadi kesalahan saat mengirim pesan.');
        });
    });
  });
