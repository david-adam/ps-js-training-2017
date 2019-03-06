export default function(router) {
  router.post("/", (req, res) => {
    let payload = "";
    if (req.body.SHIPTOSTATE == "CA" || req.body.SHIPTOSTATE == "CALIFORNIA") {
      payload = [
        "METHOD=CallbackResponse",
        "L_SHIPPINGOPTIONNAME2=Shipping Option 2 NON-default",
        "L_SHIPPINGOPTIONAMOUNT2=10",
        "L_SHIPPINGOPTIONISDEFAULT2=true",
        "L_SHIPPINGOPTIONNAME3=Shipping Option 3 NON-default",
        "L_SHIPPINGOPTIONAMOUNT3=50",
        "L_SHIPPINGOPTIONISDEFAULT3=false"
      ].join("&");
    }

    payload = [
      "METHOD=CallbackResponse",
      "L_SHIPPINGOPTIONNAME0=Shipping Option 0 default",
      "L_SHIPPINGOPTIONAMOUNT0=50",
      "L_SHIPPINGOPTIONISDEFAULT0=true",
      "L_SHIPPINGOPTIONNAME1=Shipping Option 1 NON-default",
      "L_SHIPPINGOPTIONAMOUNT1=60",
      "L_SHIPPINGOPTIONISDEFAULT1=false"
    ].join("&");

    res.send(payload);
  });
}
