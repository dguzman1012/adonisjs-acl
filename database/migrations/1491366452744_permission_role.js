'use strict'

const Schema = use('Schema')

class PermissionRoleTableSchema extends Schema {

  up () {
    this.create('permission_role', (table) => {
      table.increments()
      table.integer('permission_id').unsigned()
      table.integer('role_id').unsigned()

      table.foreign('permission_id').references('id').on('permissions').onDelete('cascade')
      table.foreign('role_id').references('id').on('roles').onDelete('cascade')
    })
  }

  down () {
    this.drop('permission_role')
  }

}

module.exports = PermissionRoleTableSchema
