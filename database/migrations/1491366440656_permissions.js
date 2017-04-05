'use strict'

const Schema = use('Schema')

class PermissionsTableSchema extends Schema {

  up () {
    this.create('permissions', (table) => {
      table.increments()
      table.string('permission_title')
      table.string('permission_slug')
      table.string('permission_description').nullable()
    })
  }

  down () {
    this.drop('permissions')
  }

}

module.exports = PermissionsTableSchema
