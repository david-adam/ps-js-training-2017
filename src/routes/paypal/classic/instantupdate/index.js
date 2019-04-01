export default function(router) {
  router.post("/", (req, res) => {
    let payload = "";
    if (req.body.SHIPTOSTATE == "CA" || req.body.SHIPTOSTATE == "CALIFORNIA") {
      payload = [
        "METHOD=CallbackResponse",
        "L_SHIPPINGOPTIONNAME0=Shipping Option expensive NON-default",
        "L_SHIPPINGOPTIONAMOUNT0=20",
        "L_SHIPPINGOPTIONISDEFAULT0=true"
      ].join("&");
    }

    res.send(payload);
  });
}
