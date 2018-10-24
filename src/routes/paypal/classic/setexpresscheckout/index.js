export default function (router) {
    router.get('/', (req, res) => {
        
        let paypal = req.app.kraken.get('paypalClassic');
        let c9config = req.app.kraken.get('cloud9');

        let nvpParams = {
            RETURNURL: 'http://127.0.0.1:5129/checkout/classic.html?Successed',
            CANCELURL: 'http://127.0.0.1:5129/checkout/classic.html?Cancelled',
            PAYMENTREQUEST_0_AMT: '50.00',
            // PAYMENTREQUEST_0_SHIPTONAME: 'Boonserm Phinphirom',
            // PAYMENTREQUEST_0_SHIPTOSTREET: '205/280 Pattanakan 65',
            // //PAYMENTREQUEST_0_SHIPTOSTREET2: 'Rama 4 Kluaynamthai, Khlong Toei',
            // PAYMENTREQUEST_0_SHIPTOCITY: 'Prawet',
            // PAYMENTREQUEST_0_SHIPTOSTATE: 'Bangkok',
            // PAYMENTREQUEST_0_SHIPTOZIP: '10250',
            // PAYMENTREQUEST_0_SHIPTOCOUNTRYCODE: 'TH',
            // PAYMENTREQUEST_0_SHIPTOPHONENUM: '0866036366',
            PAYMENTREQUEST_0_SHIPTONAME: 'Piyachat Saichan',
            PAYMENTREQUEST_0_SHIPTOSTREET: '368 S Main St Rear',
            //PAYMENTREQUEST_0_SHIPTOSTREET2: '2508 Dolor. Av.',
            PAYMENTREQUEST_0_SHIPTOCITY: 'Andover',
            PAYMENTREQUEST_0_SHIPTOSTATE: 'MA',
            PAYMENTREQUEST_0_SHIPTOZIP: '01810-4824',
            PAYMENTREQUEST_0_SHIPTOCOUNTRYCODE: 'US',
            PAYMENTREQUEST_0_CURRENCYCODE: 'USD',
            ADDROVERRIDE: '0',
            //SOLUTIONTYPE: 'Sole',
            VERSION: '124',
            NOSHIPPING: '2'
        };
            
        paypal.call('SetExpressCheckout', nvpParams, (err, response) => {
            if (err) {
                res.json(err);
            } else {
                //response.TOKEN = { TOKEN: response.TOKEN };
                res.json(response);
            }

        });
    });
}