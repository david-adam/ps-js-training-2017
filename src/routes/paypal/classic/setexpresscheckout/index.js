export default function(router) {
  router.get("/", (req, res) => {
    let paypal = req.app.kraken.get("paypalClassic");
    const instantUpdateURL =
      "http://127.0.0.1:5129/paypal/classic/instantupdate";
    const callbackTimeout = 3;

    let nvpParams = {
      RETURNURL: "http://127.0.0.1:5129/checkout/classic.html?Successed",
      CANCELURL: "http://127.0.0.1:5129/checkout/classic.html?Cancelled",
      MAXAMT: 60,
      PAYMENTREQUEST_0_AMT: 55.0,
      PAYMENTREQUEST_0_ITEMAMT: 50.0,
      L_PAYMENTREQUEST_0_NAME0: "Item No1",
      L_PAYMENTREQUEST_0_DESC0: "The best goods in the world",
      L_PAYMENTREQUEST_0_NUMBER0: "1234",
      L_PAYMENTREQUEST_0_AMT0: 25.0,
      L_PAYMENTREQUEST_0_QTY0: 1,
      L_PAYMENTREQUEST_0_NAME1: "Item No2",
      L_PAYMENTREQUEST_0_DESC1: "There is no other 2nd item",
      L_PAYMENTREQUEST_0_NUMBER1: "5678",
      L_PAYMENTREQUEST_0_AMT1: 25.0,
      L_PAYMENTREQUEST_0_QTY1: 1,
      PAYMENTREQUEST_0_SHIPPINGAMT: 5,
      CALLBACK: instantUpdateURL,
      CALLBACKTIMEOUT: callbackTimeout,
      L_SHIPPINGOPTIONISDEFAULT0: true,
      L_SHIPPINGOPTIONNAME0: "Shipping Option 0 default",
      L_SHIPPINGOPTIONAMOUNT0: 5,
      L_SHIPPINGOPTIONISDEFAULT1: false,
      L_SHIPPINGOPTIONNAME1: "Shipping Option 1 NON-default",
      L_SHIPPINGOPTIONAMOUNT1: 6,
      // PAYMENTREQUEST_0_SHIPTONAME: 'Boonserm Phinphirom',
      // PAYMENTREQUEST_0_SHIPTOSTREET: '205/280 Pattanakan 65',
      // //PAYMENTREQUEST_0_SHIPTOSTREET2: 'Rama 4 Kluaynamthai, Khlong Toei',
      // PAYMENTREQUEST_0_SHIPTOCITY: 'Prawet',
      // PAYMENTREQUEST_0_SHIPTOSTATE: 'Bangkok',
      // PAYMENTREQUEST_0_SHIPTOZIP: '10250',
      // PAYMENTREQUEST_0_SHIPTOCOUNTRYCODE: 'TH',
      // PAYMENTREQUEST_0_SHIPTOPHONENUM: '0866036366',
      PAYMENTREQUEST_0_SHIPTONAME: "Piyachat Saichan",
      PAYMENTREQUEST_0_SHIPTOSTREET: "368 S Main St Rear",
      //PAYMENTREQUEST_0_SHIPTOSTREET2: '2508 Dolor. Av.',
      PAYMENTREQUEST_0_SHIPTOCITY: "Andover",
      PAYMENTREQUEST_0_SHIPTOSTATE: "MA",
      PAYMENTREQUEST_0_SHIPTOZIP: "01810-4824",
      PAYMENTREQUEST_0_SHIPTOCOUNTRYCODE: "US",
      PAYMENTREQUEST_0_CURRENCYCODE: "USD",
      ADDROVERRIDE: "0",
      //SOLUTIONTYPE: 'Sole',
      VERSION: "124",
      NOSHIPPING: "2"
    };

    paypal.call("SetExpressCheckout", nvpParams, (err, response) => {
      if (err) {
        console.log(err);
        res.json(err);
      } else {
        console.log(response);
        res.json(response);
      }
    });
  });
}
