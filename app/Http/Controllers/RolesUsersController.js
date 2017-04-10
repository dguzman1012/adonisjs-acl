'use strict'
const RoleUser = use('App/Model/RoleUser')
const User = use('App/Model/User')
const Role = use('App/Model/Role')
const Validator = use('Validator')

class RolesUsersController {

  * index(request, response) {
    const users_roles = yield RoleUser.query()
    .innerJoin('users', 'users.id', 'role_user.user_id')
    .innerJoin('roles', 'roles.id', 'role_user.role_id').
    select('user_id', 'role_id', 'role_user.id AS role_user_id', 'username', 'email', 'role_title')
    
    yield response.sendView('acl.users_roles', {
      users_roles:users_roles,
      users : yield User.query(),
      roles : yield Role.query()
    })
  }

  * create(request, response) {
    //
  }

  * store(request, response) {
    const role_user_exist = yield RoleUser.query()
    .where('user_id', '=', request.input("user_id"))
    .where('role_id', '=', request.input("role_id"))
    
    if ((role_user_exist).length <= 0){
      const role_user = new RoleUser;
      role_user.user_id = request.input("user_id");
      role_user.role_id = request.input("role_id");
      var role_userData = request.all();    
      const validation = yield Validator.validate(role_userData, RoleUser.rules)
      if (validation.fails()) {      
        response.json({ success:false, error_message: validation.messages()[0]})
      }else{
        yield role_user.save();
        var message = {
          title: 'Success',
          text: 'User Role created successfully',
          type: 'success'
        }
        response.json({ success:true, message: message, new_user_role: role_user})
      }  
    }else{
      var message = {
        message: "This user already has this role"
      }
      response.json({ success:false, error_message: message})
    }
    
  }

  * show(request, response) {
    //
  }

  * edit(request, response) {
    //
  }

  * update(request, response) {
    //
  }

  * destroy(request, response) {
    const id = request.param('id')
    const user_role = yield RoleUser.find(id);
    if (user_role){      
      try {
        yield user_role.delete()
        response.json({success:true, message: 'User Role has been deleted'});
      } catch (e) {
        response.json({success:false, message: 'Error, deleting the user role', error: e});
      }
    }else{      
      response.json({success:false, message: 'Unable to find user role to delete'});
    }

    response.send(request.params());
  }

}

module.exports = RolesUsersController
