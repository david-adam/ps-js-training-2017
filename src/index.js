import express from 'express';
import path from 'path';
import kraken from 'kraken-js';
import braintree from 'braintree';
import paypal from 'paypal-rest-sdk';
import PayPal from 'paypal-classic-api';

let app = express();

let krakenOpts = {
  onconfig: (config, callback) => {
    let btConfig = config.get('braintreeConfig');
    btConfig.environment =
      btConfig.enviroment === 'Production'
        ? braintree.Environment.Production
        : braintree.Environment.Sandbox;
    let btGateway = braintree.connect(btConfig);
    config.set('btGateway', btGateway);

    let restConfig = config.get('paypalRestConfig');
    paypal.configure(restConfig);
    config.set('paypalRest', paypal);

    let classicConfig = config.get('paypalClassicConfig');

    let prodClassicConfig = {
      live: true,
      usernmae: process.env.username,
      password: process.env.password,
      signature: process.env.signature
    };

    if (classicConfig.live) {
      classicConfig.live = prodClassicConfig.live;
      classicConfig.usernmae = prodClassicConfig.usernmae;
      classicConfig.password = prodClassicConfig.password;
      classicConfig.signature = prodClassicConfig.signature;
    }
    let paypalClassic = new PayPal(classicConfig);
    config.set('paypalClassic', paypalClassic);

    callback(null, config);
  }
};

app.use(kraken(krakenOpts));

app.use(express.static(path.resolve(__dirname, '../client')));

let port = process.env.PORT || 5129;
//let port = 8088;
let ip = process.env.IP || '0.0.0.0';
//let ip = "0.0.0.0";

let server = app.listen(port, ip);

server.on('listening', () => {
  console.log(
    'Server running on ' +
      server.address().address +
      ' on port ' +
      server.address().port +
      '!'
  );
});
