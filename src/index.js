import express from "express";
import path from "path";
import kraken from "kraken-js";
import braintree from "braintree";
import paypal from "paypal-rest-sdk";
import PayPal from "paypal-classic-api";
import mongoose from "mongoose";
import session from "express-session";
const MongoStore = require("connect-mongo")(session);

let app = express();

let krakenOpts = {
  onconfig: (config, callback) => {
    let btConfig = config.get("braintreeConfig");
    btConfig.environment =
      btConfig.enviroment === "Production"
        ? braintree.Environment.Production
        : braintree.Environment.Sandbox;
    let btGateway = braintree.connect(btConfig);
    config.set("btGateway", btGateway);

    let restConfig = config.get("paypalRestConfig");
    paypal.configure(restConfig);
    config.set("paypalRest", paypal);

    let classicConfig = config.get("paypalClassicConfig");
    let paypalClassic = new PayPal(classicConfig);
    config.set("paypalClassic", paypalClassic);

    callback(null, config);
  }
};

const mongoURI = "mongodb://127.0.0.1:27017/ppcheckout-demo";

mongoose.Promise = global.Promise;
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("MongoDB connected.");
  })
  .catch(err => {
    console.log(err);
  });

app.use(kraken(krakenOpts));

app.use(express.static(path.resolve(__dirname, "../client")));

app.use(
  session({
    secret: "d7xtdz2t2ftse76d763h",
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      collection: "ppcheckoutsessions"
    })
  })
);

let port = process.env.PORT || 5129;
//let port = 8088;
let ip = process.env.IP || "0.0.0.0";
//let ip = "0.0.0.0";

let server = app.listen(port, ip);

server.on("listening", () => {
  console.log(
    "Server running on " +
      server.address().address +
      " on port " +
      server.address().port +
      "!"
  );
});
