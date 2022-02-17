// El modelo trae los datos de la base de datos
// No se encarga de validar datos, ni resolver promesas,
// eso es trabajo del controlador en MVC.

// Paso #1 Necesito traer la configuración de entorno de Knex y
// los detalles de la conexión a base de datos
const knex = require('../config');

// Paso #2 Es crear una función que traiga los datos que yo requiera de la base de datos
const create = (bodyClient) => {
  return knex
    .insert(bodyClient)
    .into('cliente')
    .returning(['cliente_id', 'nombre', 'apellidos', 'email', 'telefono', 'direccion_calle', 'codigo_postal', 'barrio_colonia', 'ciudad'])
}

const findAll = () => {
  return knex
    .select(['cliente_id', 'nombre', 'apellidos', 'email', 'telefono', 'direccion_calle', 'codigo_postal', 'barrio_colonia', 'ciudad'])
    .from('cliente')
}

const findOne = (clientId) => {
  return knex
    .select(['cliente_id', 'nombre', 'apellidos', 'email', 'telefono', 'direccion_calle', 'codigo_postal', 'barrio_colonia', 'ciudad'])
    .from('cliente')
    .where({ cliente_id: clientId });
}

const update = (clientId, bodyToUpdate) => {
  return knex
    .update(bodyToUpdate)
    .from('cliente')
    .where({ cliente_id: clientId })
    .returning(['cliente_id', 'nombre', 'apellidos', 'email', 'telefono', 'direccion_calle', 'codigo_postal', 'barrio_colonia', 'ciudad'])
}

const destroy = (clientId) => {
  return knex
    .del()
    .from('cliente')
    .where({ cliente_id: clientId })
}

const softDelete = (clientId) => {
  return knex
    .update({ active: false })
    .from('cliente')
    .where({ cliente_id: clientId })
}

// Paso #3 Exportar mis funciones para que sean accesibles desde el controlador
module.exports = {
  create,
  findAll,
  findOne,
  update,
  destroy,
  softDelete
}