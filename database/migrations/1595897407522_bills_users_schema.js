'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BillsUsersSchema extends Schema {
  up () {
    this.create('bills_users', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('bills_users')
  }
}

module.exports = BillsUsersSchema
