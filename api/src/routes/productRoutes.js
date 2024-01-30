const { Router } = require("express");
const { Product } = require("../db.js");
const { Op } = require("sequelize");

const router = Router();

router.get("/", async (req, res, next) => {
  const { category, name, brand, quantity } = req.query;
  console.log(req.params);
  try {
    const whereClause = {};
    if (name) {
      whereClause.name = name.toUpperCase();
    }
    if (brand) {
      whereClause.brand = brand.toUpperCase();
    }
    if (quantity) {
      whereClause.quantity = quantity;
    }
    if (category) {
      whereClause.category = category.toUpperCase();
    }
    const products = await Product.findAll({
      where: whereClause,
    });
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(error.status).json(error.message);
  }
});

router.get("/search", async (req, res, next) => {
  const { search } = req.query;
  try {
    console.log(search);
    const results = await Product.findAll({
      where: {
        [Op.or]: [
          {
            name: {
              [Op.iLike]: `%${search}%`, // Búsqueda parcial por nombre
            },
          },
          {
            brand: {
              [Op.iLike]: `%${search}%`, // Búsqueda parcial por marca
            },
          },
        ],
      },
    });
    res.status(200).json(results);
  } catch (error) {
    console.log(error);
    res.status(error.status).json(error.message);
  }
});
router.get("/:code", async (req, res, next) => {
  try {
    const product = await Product.findOne({
      where: { code: req.params.code },
    });
    if (!product) {
      res.status(404).json("Producto no encontrado");
    } else {
      res.status(200).json(product);
    }
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
    res
      .status(200)
      .send(`${newProduct.brand} ${newProduct.name} creado con éxito`);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: error.message });
  }
});

router.put("/product/:id", async (req, res) => {
  const { id } = req.params;
  const {
    brand,
    name,
    quantity,
    measurement,
    category,
    costPrice,
    wholesalerPrice,
    retailPrice,
    iva,
    iibb,
    stock,
    code,
  } = req.body;
  try {
    const product = await Product.findByPk(id);
    if (!product) {
      res.status(404).json("Producto no encontrado");
    } else {
      product.brand = brand || product.brand;
      product.name = name || product.name;
      product.quantity = quantity || product.quantity;
      product.measurement = measurement || product.measurement;
      product.category = category || product.category;
      product.costPrice = costPrice || product.costPrice;
      product.wholesalerPrice = wholesalerPrice || product.wholesalerPrice;
      product.retailPrice = retailPrice || product.retailPrice;
      product.iva = iva || product.iva;
      product.iibb = iibb || product.iibb;
      product.stock = stock || product.stock;
      product.code = code || product.code;
    }
  } catch (error) {}
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByPk(id);
    if (!product) {
      res.status(404).json("Producto no encontrado");
    } else {
      await product.destroy();
      res.status(200).json("Producto eliminado correctamente");
    }
  } catch (error) {
    res.status(error.status).json("No se pudo eliminar el producto");
  }
});

module.exports = router;
