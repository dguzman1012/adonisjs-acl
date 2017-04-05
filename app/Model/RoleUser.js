'use strict'

const Lucid = use('Lucid')

class RoleUser extends Lucid {

  static get table () {
    return 'role_user'
  }

  static get createTimestamp () {
    return null
  }

  static get updateTimestamp () {
    return null
  }

}

module.exports = RoleUser
