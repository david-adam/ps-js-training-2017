export default function(router) {
  router.post("/", (req, res) => {
    let payload = "";
    if (req.body.SHIPTOSTATE == "CA" || req.body.SHIPTOSTATE == "CALIFORNIA") {
      payload = [
        "METHOD=CallbackResponse",
        "OFFERINSURANCEOPTION=false",
        "L_SHIPPINGOPTIONNAME0=Shipping Option expensive NON-default",
        "L_SHIPPINGOPTIONAMOUNT0=20",
        "L_INSURANCEAMOUNT0=3.0",
        "L_SHIPPINGOPTIONISDEFAULT0=true"
      ].join("&");
    }

    res.send(payload);
  });
}
