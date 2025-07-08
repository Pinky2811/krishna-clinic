// backend/whatsappService.js
const venom = require('venom-bot');

let client;

venom
  .create({ session: 'krishna-clinic-session' })
  .then((whatsAppClient) => {
    client = whatsAppClient;
    console.log('🟢 WhatsApp client ready');
  })
  .catch((error) => {
    console.error('❌ WhatsApp init failed:', error);
  });

function sendWhatsAppMessage(number, message) {
  if (!client) {
    console.error('⚠️ WhatsApp client not ready.');
    return;
  }

  const formattedNumber = number.includes('@c.us') ? number : `${number}@c.us`;

  client
    .sendText(formattedNumber, message)
    .then(() => {
      console.log(`✅ Message sent to ${number}`);
    })
    .catch((error) => {
      console.error('❌ Failed to send message:', error);
    });
}

module.exports = { sendWhatsAppMessage };
