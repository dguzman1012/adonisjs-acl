'use strict'

const Schema = use('Schema')

class RolesTableSchema extends Schema {

  up () {
    this.create('roles', (table) => {
      table.increments()
      table.string('role_title')
      table.string('role_slug')
    })
  }

  down () {
    this.drop('roles')
  }

}

module.exports = RolesTableSchema
