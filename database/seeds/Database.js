'use strict'

/*
|--------------------------------------------------------------------------
| Database Seeder
|--------------------------------------------------------------------------
| Database Seeder can be used to seed dummy data to your application
| database. Here you can make use of Factories to create records.
|
| make use of Ace to generate a new seed
|   ./ace make:seed [name]
|
*/

const Factory = use('Factory')
const Role = use('App/Model/Role')
const Permission = use('App/Model/Permission')
const PermissionRole = use('App/Model/PermissionRole')
const RoleUser = use('App/Model/RoleUser')

class DatabaseSeeder {

  * run () {
    const users = yield Factory.model('App/Model/User').create()
    const role = new Role()
	role.role_title = 'Administrator'
	role.role_slug  = 'super_admin'
	yield role.save() // SQL Insert

	const permission = yield Permission.createMany([
		{
			permission_title: 'access control list',
			permission_slug: 'accesscontrol-list_view',
			permission_description: 'access control list view'
		},
		{
			permission_title: 'users view',
			permission_slug: 'users_view',
			permission_description: 'users view'
		}
	])

	const permission_role = yield PermissionRole.createMany([
		{
			permission_id: 1,
			role_id: 1
		},
		{
			permission_id: 2,
			role_id: 1
		},
	])

	const role_user = new RoleUser()
	role_user.role_id = 1
	role_user.user_id  = 1
	yield role_user.save() // SQL Insert

  }

}

module.exports = DatabaseSeeder
