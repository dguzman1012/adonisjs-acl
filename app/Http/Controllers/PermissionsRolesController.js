'use strict'
const Permission = use('App/Model/Permission')
const Role = use('App/Model/Role')
const PermissionRole = use('App/Model/PermissionRole')
const Validator = use('Validator')

class PermissionsRolesController {

  * index(request, response) {
    const roles = yield Role.query()
    const permissions = yield Permission.query()
    yield response.sendView('acl.permissions_roles', {
      roles:roles,
      permissions:permissions,
      totalPermissions: permissions.length
    })
  }

  * create(request, response) {
    //
  }

  * store(request, response) {
    //
  }

  * show(request, response) {
    //
  }

  * edit(request, response) {
    const permission_role = yield PermissionRole.query().where('role_id', '=', request.param('id'))
    response.json({permission_role: permission_role});
  }

  * update(request, response) {
    const role_id = request.param('id');    
    const new_permissions = request.input('new_permissions');

    const permission_role = yield PermissionRole.findBy('role_id', role_id);
    if (permission_role){
      yield permission_role.delete()  
    }

    const new_permission_roles = yield PermissionRole.createMany(new_permissions)
    if (new_permission_roles){
      var message = {
        title: 'Success',
        text: 'The permissions for this role has been updated successfully',
        type: 'success'
      }
      response.json({ success:true, message: message})
    }else{
      response.json({ success:false, error_message: "Unable to update permissions"})
    }



  }

  * destroy(request, response) {
    //
  }

}

module.exports = PermissionsRolesController
