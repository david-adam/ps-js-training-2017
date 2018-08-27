export default function (router) {
    router.get('/', (req, res) => {
        
        let paypal = req.app.kraken.get('paypalClassic');
        let c9config = req.app.kraken.get('cloud9');

        let nvpParams = {
            RETURNURL: 'https://' + c9config.workspace + '-' + c9config.username + '.c9users.io/misc/returnurl.html',
            CANCELURL: 'https://' + c9config.workspace + '-' + c9config.username + '.c9users.io/misc/cancelurl.html',
            PAYMENTREQUEST_0_AMT: '50.00',
            PAYMENTREQUEST_0_SHIPTONAME: 'Piyachat Saichan',
            PAYMENTREQUEST_0_SHIPTOSTREET: 'Lumpini Place 1901-4004/566',
            PAYMENTREQUEST_0_SHIPTOSTREET2: 'Rama 4 Kluaynamthai, Khlong Toei',
            PAYMENTREQUEST_0_SHIPTOCITY: 'Bangkok',
            PAYMENTREQUEST_0_SHIPTOSTATE: 'Bangkok',
            PAYMENTREQUEST_0_SHIPTOZIP: '10110',
            PAYMENTREQUEST_0_SHIPTOCOUNTRYCODE: 'TH',
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