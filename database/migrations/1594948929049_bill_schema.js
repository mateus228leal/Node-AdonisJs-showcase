'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BillSchema extends Schema {
  up () {
    this.create('bills', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('bills')
  }
}

module.exports = BillSchema
