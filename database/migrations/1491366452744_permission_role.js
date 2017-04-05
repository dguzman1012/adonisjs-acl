'use strict'

const Schema = use('Schema')

class PermissionRoleTableSchema extends Schema {

  up () {
    this.create('permission_role', (table) => {
      table.increments()
      table.integer('permission_id').unsigned()
      table.integer('role_id').unsigned()
    })
  }

  down () {
    this.drop('permission_role')
  }

}

module.exports = PermissionRoleTableSchema
