export default function(router) {
  router.post("/", (req, res) => {
    let payload = "";
    if (req.body.SHIPTOSTATE == "CA" || req.body.SHIPTOSTATE == "CALIFORNIA") {
      payload = [
        "METHOD=CallbackResponse",
        "L_SHIPPINGOPTIONNAME0=Shipping Option 0 default",
        "L_SHIPPINGOPTIONAMOUNT0=5",
        "L_SHIPPINGOPTIONISDEFAULT0=false",
        "L_SHIPPINGOPTIONNAME1=Shipping Option 1 NON-default",
        "L_SHIPPINGOPTIONAMOUNT1=10",
        "L_SHIPPINGOPTIONISDEFAULT1=true"
      ].join("&");
    }

    res.send(payload);
  });
}
