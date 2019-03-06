export default function(router) {
  router.post("/", (req, res) => {
    let payload = {};
    // if (req.body.SHIPTOSTATE == "CA" || req.body.SHIPTOSTATE == "CALIFORNIA") {
    //   payload = {
    //     METHOD: "CallbackResponse",
    //     CALLBACKVERSION: req.body.CALLBACKVERSION,
    //     L_SHIPPINGOPTIONISDEFAULT0: false,
    //     L_SHIPPINGOPTIONNAME1: "Shipping Option 1 NON-default",
    //     L_SHIPPINGOPTIONAMOUNT0: 6
    //   };
    // }

    payload = {
      L_SHIPPINGOPTIONISDEFAULT0: true,
      L_SHIPPINGOPTIONNAME0: "Shipping Option 0 default",
      L_SHIPPINGOPTIONAMOUNT0: 5,
      L_SHIPPINGOPTIONISDEFAULT1: false,
      L_SHIPPINGOPTIONNAME1: "Shipping Option 1 NON-default",
      L_SHIPPINGOPTIONAMOUNT1: 6
    };
    res.json(payload);
  });
}
