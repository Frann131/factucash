const { Router } = require("express");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const clientRoutes = require("./clientRoutes.js");
const productRoutes = require("./productRoutes.js")
// const providerRoutes = require("./providerRoutes.js");
// const purchaseRoutes = require("./purchaseRoutes.js");
// const saleRoutes = require("./purchaseRoutes.js");
// const userRoutes = require("./userRoutes.js");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/client", clientRoutes);
router.use("/product", productRoutes);
// router.use("/provider", providerRoutes);
// router.use("/purchase", purchaseRoutes);
// router.use("/sale", saleRoutes);
// router.use("/user", userRoutes);

module.exports = router;
