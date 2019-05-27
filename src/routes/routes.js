const express = require("express")
const routes = express.Router();
const mongoose = require("mongoose")

const StructureController = require("../controllers/StructureController.js")

const Structure = mongoose.model("Structure")


routes.post('/usuario', StructureController.store)
routes.get('/usuario', StructureController.findall)
routes.get('/usuario/:id', StructureController.findone)
routes.put('/usuario/:id',StructureController.update)
routes.delete('/usuario/:id',StructureController.destroy)
   

module.exports = routes;