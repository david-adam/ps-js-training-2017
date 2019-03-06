export default function(router) {
  router.get("/", (req, res) => {
    console.log(req);
    const payload = {};

    res.json(payload);
  });
}
