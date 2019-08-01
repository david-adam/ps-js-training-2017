export default function(router) {
  router.get('/', (req, res) => {
    let paypal = req.app.kraken.get('paypalClassic');
    const instantUpdateURL =
      'https://ppcheckout.herokuapp.com/paypal/classic/instantupdate';
    const callbackTimeout = 5;

    let nvpParams = {
      RETURNURL: 'https://www.paypal.com/checkoutnow/error',
      CANCELURL: 'https://www.paypal.com/checkoutnow/error',
      MAXAMT: 120,
      PAYMENTREQUEST_0_AMT: 9.41,
      PAYMENTREQUEST_0_DESC: 'Test PAYMENTREQUEST_n_DESC',
      PAYMENTREQUEST_0_ITEMAMT: 9.41,
      // PAYMENTREQUEST_0_NOTIFYURL:
      //   'https://94bd7ced.ngrok.io/pptest/ipn/listener.php',
      PAYMENTREQUEST_0_PAYMENTACTION: 'SALE',
      PAYMENTREQUEST_0_SHIPPINGAMT: 0,
      //PAYMENTREQUEST_0_INSURANCEAMT: 3.0,
      //PAYMENTREQUEST_0_INSURANCEOPTIONOFFERED: false,
      L_PAYMENTREQUEST_0_NAME0: 'Red Round Toe Fur Over-Knee Vogue Boots',
      L_PAYMENTREQUEST_0_DESC0:
        'Order Number:1002901 Is Created By dressve.com',
      L_PAYMENTREQUEST_0_ITEMURL0: 'https://www.google.com',
      L_PAYMENTREQUEST_0_NUMBER0: '1234',
      L_PAYMENTREQUEST_0_AMT0: 9.41,
      L_PAYMENTREQUEST_0_QTY0: 1,
      // L_PAYMENTREQUEST_0_NAME1: 'Item No2',
      // L_PAYMENTREQUEST_0_DESC1: 'There is no other 2nd item',
      // L_PAYMENTREQUEST_0_NUMBER1: '5678',
      // L_PAYMENTREQUEST_0_AMT1: 0.5,
      // L_PAYMENTREQUEST_0_QTY1: 1,
      CALLBACK: instantUpdateURL,
      CALLBACKTIMEOUT: callbackTimeout,
      L_SHIPPINGOPTIONISDEFAULT0: true,
      L_SHIPPINGOPTIONNAME0: 'Shipping Option normal default',
      L_SHIPPINGOPTIONAMOUNT0: 0,
      L_SHIPPINGOPTIONISDEFAULT1: false,
      L_SHIPPINGOPTIONNAME1: 'Shipping Option expensive NON-default',
      L_SHIPPINGOPTIONAMOUNT1: 10,
      // PAYMENTREQUEST_0_SHIPTONAME: 'Boonserm Phinphirom',
      // PAYMENTREQUEST_0_SHIPTOSTREET: '205/280 Pattanakan 65',
      // //PAYMENTREQUEST_0_SHIPTOSTREET2: 'Rama 4 Kluaynamthai, Khlong Toei',
      // PAYMENTREQUEST_0_SHIPTOCITY: 'Prawet',
      // PAYMENTREQUEST_0_SHIPTOSTATE: 'Bangkok',
      // PAYMENTREQUEST_0_SHIPTOZIP: '10250',
      // PAYMENTREQUEST_0_SHIPTOCOUNTRYCODE: 'TH',
      PAYMENTREQUEST_0_SHIPTOPHONENUM: '2624241234',
      PAYMENTREQUEST_0_SHIPTONAME: 'TestFirst TestLast',
      PAYMENTREQUEST_0_SHIPTOSTREET: '2203 Base Pro Dr',
      //PAYMENTREQUEST_0_SHIPTOSTREET2: '2508 Dolor. Av.',
      PAYMENTREQUEST_0_SHIPTOCITY: 'Irving',
      PAYMENTREQUEST_0_SHIPTOSTATE: 'Texas',
      PAYMENTREQUEST_0_SHIPTOZIP: '75063',
      PAYMENTREQUEST_0_SHIPTOCOUNTRYCODE: 'US',
      PAYMENTREQUEST_0_CURRENCYCODE: 'USD',
      PAYMENTREQUEST_0_INVNUM: String(Date.now()),
      ADDROVERRIDE: '0',
      ALLOWNOTE: '0',
      SOLUTIONTYPE: 'Sole',
      LANDINGPAGE: 'Billing',
      REQCONFIRMSHIPPING: '1',
      //SOLUTIONTYPE: 'Sole',
      VERSION: '124',
      NOSHIPPING: '2'
    };

    paypal.call('SetExpressCheckout', nvpParams, (err, response) => {
      if (err) {
        console.log(err);
        res.json(err);
      } else {
        res.json(response);
      }
    });
  });
}
