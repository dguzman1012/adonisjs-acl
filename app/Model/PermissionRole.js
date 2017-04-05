'use strict'

const Lucid = use('Lucid')

class PermissionRole extends Lucid {

  static get table () {
    return 'permission_role'
  }

  static get createTimestamp () {
    return null
  }

  static get updateTimestamp () {
    return null
  }

}

module.exports = PermissionRole
