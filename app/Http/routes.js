'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.group('authenticated', function () {
	Route.get('/', 'HomeController.getIndex')
	Route.resources('users', 'UsersController').middleware('acl:users_view')
	Route.resources('acl', 'UsersController').middleware('acl:accesscontrol-list_view')
})
.middleware('auth')

Route.get('login', 'AccountController.getLogin')
Route.post('login', 'AccountController.postLogin')
Route.get('logout', 'AccountController.getLogout')