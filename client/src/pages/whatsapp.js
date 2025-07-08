const venom = require('venom-bot');

let client;

venom
  .create({
    session: 'krishna-clinic-session',
  })
  .then((clientInstance) => {
    client = clientInstance;
    console.log('✅ WhatsApp bot is ready');
  })
  .catch((err) => {
    console.error('❌ WhatsApp error:', err);
  });

const sendWhatsApp = async (number, message) => {
  if (!client) {
    console.log('❌ WhatsApp client not ready yet');
    return;
  }

  try {
    await client.sendText(`91${number}@c.us`, message);
    console.log('✅ WhatsApp message sent to', number);
  } catch (err) {
    console.error('❌ Error sending WhatsApp:', err);
  }
};

module.exports = { sendWhatsApp };
