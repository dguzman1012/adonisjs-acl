'use strict'
const Role = use('App/Model/Role')
const Validator = use('Validator')

class RolesController {

  * index(request, response) {
    const roles = yield Role.query()    
    yield response.sendView('acl.roles', {
      roles:roles,
    })
  }

  * create(request, response) {
    //
  }

  * store(request, response) {
    const role = new Role;
    role.role_title = request.input("role_title");
    role.role_slug = request.input("role_slug");
    
    var roleData = request.all();
    var messages = {
        'role_title.unique' : 'Role already exist',
        'role_slug.unique' : 'Role Slug already exist'
    }
    const validation = yield Validator.validate(roleData, Role.rules, messages)
    if (validation.fails()) {      
      response.json({ success:false, error_message: validation.messages()[0]})
    }else{
      yield role.save();
      var message = {
        title: 'Success',
        text: 'Role created successfully',
        type: 'success'
      }
      response.json({ success:true, message: message, new_role: role})
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
    const role = yield Role.find(id);
    if (role){      
      try {
        yield role.delete()
        response.json({success:true, message: 'Role has been deleted'});
      } catch (e) {
        response.json({success:false, message: 'Error, deleting the role', error: e});
      }
    }else{      
      response.json({success:false, message: 'Unable to find role to delete'});
    }

    response.send(request.params());
  }

}

module.exports = RolesController
