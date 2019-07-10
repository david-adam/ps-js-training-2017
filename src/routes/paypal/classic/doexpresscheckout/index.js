export default function(router) {
  router.post('/', (req, res) => {
    let paypal = req.app.kraken.get('paypalClassic');

    let nvpParams = {
      TOKEN: req.body.TOKEN,
      PAYERID: req.body.PAYERID,
      AMT: req.body.AMT,
      VERSION: '124',
      PAYMENTREQUEST_0_PAYMENTACTION: 'SALE',
      PAYMENTREQUEST_0_SHIPTONAME: 'Piyachat Saichan',
      PAYMENTREQUEST_0_SHIPTOSTREET: '368 S Main St Rear',
      PAYMENTREQUEST_0_SHIPTOSTREET2: '2508 Dolor. Av.',
      PAYMENTREQUEST_0_SHIPTOCITY: 'Andover',
      PAYMENTREQUEST_0_SHIPTOSTATE: 'MA',
      PAYMENTREQUEST_0_SHIPTOZIP: '01810-4824',
      PAYMENTREQUEST_0_SHIPTOCOUNTRYCODE: 'US'
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
