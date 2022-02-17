/* Los controladores tienen la lógica de negocio */
const ModelClients = require('../models/Clients');

const createClient = (req, res) => {
  // Validar que todo este bien y ejecutar el create de mi Modelo
  ModelClients.create(req.body)
    .then((row) => {
      res.status(201).send(row)
    })
    .catch((err) => {
      res.status(400).send(err.message)
    })
}

const findAllClients = (req, res) => {
  ModelClients.findAll()
    .then((row) => {
      res.status(200).send(row)
    })
    .catch((err) => {
      res.status(400).send(err.message)
    })
}

const findOneClient = (req, res) => {
  ModelClients.findOne(req.params.idClient)
    .then((row) => {
      res.status(200).send(row)
    })
    .catch((err) => {
      res.status(400).send(err.message)
    })
}

const updateOneClient = (req, res) => {
  ModelClients.update(req.params.idClient, req.body)
    .then((row) => {
      res.status(200).send(row)
    })
    .catch((err) => {
      res.status(400).send(err.message)
    })
}

const destroyOneClient = (req, res) => {
  ModelClients.destroy(req.params.idClient)
    .then(() => {
      res.status(204).send()
    })
    .catch((err) => {
      res.status(400).send(err.message)
    })
}

const softDeleteOneClient = (req, res) => {
  ModelClients.softDelete(req.params.idClient)
    .then(() => {
      res.status(204).send()
    })
    .catch((err) => {
      res.status(400).send(err.message)
    })
}

module.exports = {
  createClient,
  findAllClients,
  findOneClient,
  updateOneClient,
  destroyOneClient,
  softDeleteOneClient
}