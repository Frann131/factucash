const { Router } = require("express");
const { Client, Sale } = require("../db.js");

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const clients = await Client.findAll({
      include: [
        {
          model: Sale,
          as: "Sale",
        },
      ],
    });
    res.status(200).json(clients);
  } catch (error) {
    console.log(error);
    res.status(error.status).json(error.message);
  }
});

router.post("/", async (req, res, next) => {
  const { name, email, adress, phone, tributaryKey } = req.body;
  try {
    const newClient = {
      name: name.toUpperCase(),
      email,
      adress: adress.toUpperCase(),
      phone,
      tributaryKey,
    };
    await Client.create(newClient);
    res.status(200).send(`Cliente ${newClient.name} creado con éxito`);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: error.message });
  }
});

router.put("/", async (req, res, next) => {
  const { id, name, email, adress, phone, tributaryKey } = req.body;
  const client = await Client.findByPk(id);
  if (!client) {
    res.status(404).json({ message: "No existe ese cliente." });
  } else {
    try {
        name && (client.name = name.toUpperCase());
        email && (client.email = email);
        adress && (client.adress = adress.toUpperCase());
        phone && (client.phone = phone);
        tributaryKey && (client.tributaryKey = tributaryKey);
        await client.save();
        res.status(200).json({client, status:"Actualizado correctamente"});
    } catch (error) {
        res.status(error.statusCode).json(error.message)
    }
  }
});

module.exports = router;
