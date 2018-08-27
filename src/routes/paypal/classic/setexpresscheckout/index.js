export default function (router) {
    router.get('/', (req, res) => {
        
        let paypal = req.app.kraken.get('paypalClassic');
        let c9config = req.app.kraken.get('cloud9');

        let nvpParams = {
            RETURNURL: 'https://' + c9config.workspace + '-' + c9config.username + '.c9users.io/misc/returnurl.html',
            CANCELURL: 'https://' + c9config.workspace + '-' + c9config.username + '.c9users.io/misc/cancelurl.html',
            PAYMENTREQUEST_0_AMT: '50.00',
            // PAYMENTREQUEST_0_SHIPTONAME: 'Piyachat Saichan',
            // PAYMENTREQUEST_0_SHIPTOSTREET: 'P.O. Box 887',
            // PAYMENTREQUEST_0_SHIPTOSTREET2: '2508 Dolor. Av.',
            // PAYMENTREQUEST_0_SHIPTOCITY: 'Muskegon',
            // PAYMENTREQUEST_0_SHIPTOSTATE: 'KY',
            // PAYMENTREQUEST_0_SHIPTOZIP: '12482',
            // PAYMENTREQUEST_0_SHIPTOCOUNTRYCODE: 'US',
            PAYMENTREQUEST_0_SHIPTONAME: 'Piyachat Saichan',
            PAYMENTREQUEST_0_SHIPTOSTREET: '368 S Main St Rear',
            //PAYMENTREQUEST_0_SHIPTOSTREET2: '2508 Dolor. Av.',
            PAYMENTREQUEST_0_SHIPTOCITY: 'Andover',
            PAYMENTREQUEST_0_SHIPTOSTATE: 'MA',
            PAYMENTREQUEST_0_SHIPTOZIP: '01810-4824',
            PAYMENTREQUEST_0_SHIPTOCOUNTRYCODE: 'US',
            PAYMENTREQUEST_0_CURRENCYCODE: 'USD',
            ADDROVERRIDE: "1",
            NOSHIPPING: "0"
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