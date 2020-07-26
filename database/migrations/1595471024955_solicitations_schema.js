'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SolicitationsSchema extends Schema {
  up () {
    this.create('solicitations', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('solicitations')
  }
}

module.exports = SolicitationsSchema
