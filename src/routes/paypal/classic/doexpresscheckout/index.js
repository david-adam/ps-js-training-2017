export default function(router) {
  router.post('/', (req, res) => {
    let paypal = req.app.kraken.get('paypalClassic');

    let nvpParams = {
      TOKEN: req.body.TOKEN,
      PAYERID: req.body.PAYERID,
      VERSION: '124',
      SUBJECT: '',
      PAYMENTREQUEST_0_AMT: req.body.AMT,
      // PAYMENTREQUEST_0_TAXAMT: 0,
      // PAYMENTREQUEST_0_SHIPPINGAMT: 0,
      // PAYMENTREQUEST_0_CURRENCYCODE: 'USD',
      // PAYMENTREQUEST_0_NOTIFYURL:
      //   'https://94bd7ced.ngrok.io/pptest/ipn/listener.php',
      // PAYMENTREQUEST_0_CUSTOM: 'PROMO',
      // PAYMENTREQUEST_0_SHIPTOPHONENUM: '18665395108',
      // PAYMENTREQUEST_0_PAYMENTACTION: 'SALE',
      // PAYMENTREQUEST_0_SHIPTONAME: 'Piyachat Saichan',
      // PAYMENTREQUEST_0_SHIPTOSTREET: '368 S Main St Rear',
      // PAYMENTREQUEST_0_SHIPTOSTREET2: '2508 Dolor. Av.',
      // PAYMENTREQUEST_0_SHIPTOCITY: 'Andover',
      // PAYMENTREQUEST_0_SHIPTOSTATE: 'MA',
      // PAYMENTREQUEST_0_SHIPTOZIP: '01810-4824',
      // PAYMENTREQUEST_0_SHIPTOCOUNTRYCODE: 'US'
    };

    paypal.call('DoExpressCheckoutPayment', nvpParams, (err, response) => {
      if (err) {
        res.json(err);
      } else {
        res.json(response);
      }
    });
  });
}
