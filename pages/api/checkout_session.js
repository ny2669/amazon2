const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const { cartItems, email } = req.body;

  console.log(cartItems);

  if (req.method === 'POST') {
    try {
      // Make sure the `item` data is not empty or undefined.
      if (!cartItems || cartItems.length === 0) {
        throw new Error('No items found in the request.');
      }

      // Create Checkout Sessions from body params.
      const data = cartItems.map((item) => ({
        price_data: {
          currency: 'gbp',
         
          product_data: {
            name: item.product.title,
            images: [item.product.image],
    
          },
          unit_amount: item.product.price * 100, // change unit_amout to unit_amount
        },
        quantity: 1,
        // description: item.product.description,
      }));
      
      const session = await stripe.checkout.sessions.create({
        // shipping_options: [{shipping_rate: 'shr_1MrOtkH2kJbIRioSf6eI7sjK'}],
        shipping_address_collection: {
          allowed_countries: ['GB', 'US', 'CA'],
        },
        payment_method_types: ['card'],
        mode: 'payment',
        // discounts: [{
        //   coupon: 'fyZKu5MR',
        // }],
        shipping_options: [{shipping_rate: 'shr_1MrOtkH2kJbIRioSf6eI7sjK'}],
        line_items: data,
        success_url: 'http://localhost:3000/success',
        cancel_url: 'http://localhost:3000/checkout',
        metadata: {
          email: email,
        },
      });

      console.log(session);
      res.status(200).json(session);
    } catch (err) {
      console.error(err);
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}