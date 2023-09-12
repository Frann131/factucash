const { Router } = require("express");
const { Product } = require("../db.js");

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(error.status).json(error.message);
  }
});

router.post("/", async (req, res, next) => {
  const {
    brand,
    name,
    quantity,
    measurement,
    stock,
    category,
    costPrice,
    wholesalerPrice,
    retailPrice,
    iva,
    iibb,
    code,
  } = req.body;
  try {
    const newProduct = {
      brand: brand.toUpperCase(),
      name: name.toUpperCase(),
      quantity,
      measurement: measurement.toUpperCase(), 
      stock,
      category: category.toUpperCase(),
      costPrice,
      wholesalerPrice,
      retailPrice,
      iva,
      iibb,
      code,
    };
    await Product.create(newProduct);
    res.status(200).send(`${newProduct.brand} ${newProduct.name} creado con éxito`);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;