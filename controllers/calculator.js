const express = require("express");
const router = express.Router();
const Calculator = require("../models/calculator.js");

///////////////////
//Index Route
//////////////////
//==| CREATE |
router.post("/", async (req, res) => {
  try {
    const createdCalculator = await Calculator.create(req.body);
    Calculator.find({}, (err, docs) => {});
    res.status(200).json(createdCalculator);
  } catch (error) {
    res.status(400).json(error);
  }
});

//==| INDEX |
router.get("/", async (req, res) => {
  try {
    const Calculators = await Calculator.find({});
    res.status(200).json(Calculators);
  } catch (error) {
    res.status(400).json(error);
  }
});

//==| DELETE |
router.delete("/:id", async (req, res) => {
  try {
    const deletedCalculator = await Calculator.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedCalculator);
  } catch (error) {
    res.status(400).json(error);
  }
});

//==| UPDATE |
router.put("/:id", async (req, res) => {
  try {
    const updatedCalculator = await Calculator.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.status(200).json(updatedCalculator);
  } catch (error) {
    res.status(400).json(error);
  }
});
//=============================================================================| ROUTES END |

//==| EXPORT ROUTER |
module.exports = router;
