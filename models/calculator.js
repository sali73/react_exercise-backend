const { Schema, model } = require("mongoose");

const calculatorSchema = Schema({
  list: { type: String, required: true },
});

const Calculator = model("books", calculatorSchema);
module.exports = Calculator;
