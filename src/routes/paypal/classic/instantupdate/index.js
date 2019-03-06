export default function(router) {
  router.post("/", (req, res) => {
    console.log(req);
    const payload = {};

    res.json(payload);
  });
}
