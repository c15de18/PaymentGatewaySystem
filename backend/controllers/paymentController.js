// backend/controllers/paymentController.js
const paypal = require('@paypal/checkout-server-sdk');
const Transaction = require('../models/Transaction');

const environment = new paypal.core.SandboxEnvironment(
  process.env.PAYPAL_CLIENT_ID,
  process.env.PAYPAL_CLIENT_SECRET
);
const client = new paypal.core.PayPalHttpClient(environment);

exports.processPayment = async (req, res) => {
  const { amount, currency } = req.body;

  const request = new paypal.orders.OrdersCreateRequest();
  request.prefer('return=representation');
  request.requestBody({
    intent: 'CAPTURE',
    purchase_units: [{
      amount: {
        currency_code: currency || 'USD',
        value: amount.toString(),
      },
    }],
  });

  try {
    const order = await client.execute(request);

    const transaction = new Transaction({
      amount,
      currency,
      status: 'created',
      paymentId: order.result.id,
    });
    await transaction.save();

    res.status(200).json({
      id: order.result.id,
      links: order.result.links || [], // safe fallback
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
