const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hey there from Rating!");
});

router.post("/", (req, res) => {
  console.log("Base Post!");
});

function prob(rating1, rating2) {
  return (
    (1.0 * 1.0) / (1 + 1.0 * Math.pow(10, (1.0 * (rating1 - rating2)) / 400))
  );
}

router.post("/updateRating", (req, res) => {
  var x = -1;
  var y = -1;
  if (req.body.Ra) {
    var Ra = req.body.Ra;

    if (x == -1) {
      x = Ra;
    } else if (y == -1) {
      y = Ra;
    }
  }

  if (req.body.Rb) {
    var Rb = req.body.Rb;

    if (x == -1) {
      x = Rb;
    } else if (y == -1) {
      y = Rb;
    }
  }

  if (req.body.Rc) {
    var Rc = req.body.Rc;

    if (x == -1) {
      x = Rc;
    } else if (y == -1) {
      y = Rc;
    }
  }

  if (req.body.Rd) {
    var Rd = req.body.Rd;
    if (x == -1) {
      x = Rd;
    } else if (y == -1) {
      y = Rd;
    }
  }

  const option = req.body.option;
  const K = 30;
  var Pa = prob(x, y);
  var Pb = prob(y, x);

  if (option === 1) {
    x += K * (1 - Pa);
    y += K * (0 - Pb);
  } else {
    x += K * (0 - Pa);
    y += K * (1 - Pb);
  }
  res.json({ Ra: x, Rb: y });
});

module.exports = router;
