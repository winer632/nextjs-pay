// This is your test secret API key.
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 400;
};

export default async function handler(req, res) {
  const { items } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "HKD",
    automatic_payment_methods: {
      enabled: true,
    },

    // Specify the payment method types here
    // payment_method_types: [ "card", "alipay", "apple_pay", "link", "sofort"],
  });

  


  res.send({
    clientSecret: paymentIntent.client_secret,
  });
};