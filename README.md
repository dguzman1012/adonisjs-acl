# Installation guide #

## dependencies ##
- **MySql**: 5.5
- **Node.js**: >=4.2.6
	- **mysql**
- **NPM**: >=3.5.2
- **Bower**: >=1.7.9

## installation ##

- Configure NodeJs Env.
- Clone project file in the PATH_TO_PROJECT_IN_SERVER.

```bash
cd PATH_TO_PROJECT_IN_SERVER
npm install
bower install
cp .env.example .env
```

- Create a DB in Mysql Server (DB_NAME)
- Change database connection in .env file: DB_NAME, DB_HOST, DB_PORT, DB_USER, DB_PASSWORD
- Run the migration rollback (if already exist data): ```./ace migration:rollback```
- Run the migration: ```./ace migration:run```
- Run the seeders: ```./ace db:seed```
- Initiate the Server: ```npm run serve:dev```
- Default user: my@name.io
- Default Password: 123456


## technology stack ##
- **AdonisJS** 3.2
- **MySQL**
- **JQuery**
- **Twitter Bootstrap**


# How To:

This repository is a pre-configured project structure taken from Adonisjs.

This project include the custom users CRUD and ACL. The ACL module has four (4) sections: permissions, roles, Permissions-roles and User-role. Let's see how to work with them!

![menu](https://cloud.githubusercontent.com/assets/5767551/25599052/38536280-2ea7-11e7-836a-075345b7126a.png)


## Permissions
![permissions](https://cloud.githubusercontent.com/assets/5767551/25599081/6a5cc226-2ea7-11e7-99f0-ec0572313a3c.png)

![new permission](https://cloud.githubusercontent.com/assets/5767551/25599089/79dd428e-2ea7-11e7-8607-b18812fc506f.png)


## Roles
![roles](https://cloud.githubusercontent.com/assets/5767551/25599115/95206e72-2ea7-11e7-82a6-225c695f9a1f.png)

![create role](https://cloud.githubusercontent.com/assets/5767551/25599119/9c725cbc-2ea7-11e7-804e-b98659736770.png)


## Permissions-Roles
![permission-role](https://cloud.githubusercontent.com/assets/5767551/25599136/bc0ee39c-2ea7-11e7-83a6-aeba07b20f8f.png)

![update permissions](https://cloud.githubusercontent.com/assets/5767551/25599143/d05bbaf0-2ea7-11e7-8589-1e7ec458b382.png)


## User-role
![user-roles](https://cloud.githubusercontent.com/assets/5767551/25599151/e09d9abe-2ea7-11e7-97ea-7111950984cb.png)

![update user-roles](https://cloud.githubusercontent.com/assets/5767551/25599159/ed8ea5c4-2ea7-11e7-912d-b0bceb1fd95a.png)


## Hide elements inside a view as per role.

The greatest thing is you can hide element inside a view (like menu options) by calling a **global listener**:

```
#!nunjucks

{% if hasRole(old('my_roles'), 'super_admin') %}
     <li>{{ linkTo('/users', 'Users') }}</li>
     <li><a>ACL<span class="fa fa-chevron-down"></span></a>
          <ul class="nav child_menu">
               <li class="sub_menu">{{ linkTo('/permissions', 'Permissions') }}</li>
               <li>{{ linkTo('/roles', 'Roles') }}</li>
               <li>{{ linkTo('/permissions-roles', 'Permissions-Roles') }}</li>
               <li>{{ linkTo('/users-roles', 'User-Role') }}</li>
          </ul>
     </li>              
{% endif %}
```

*HasRole(a,b)* is a listener defined by me to check if a role_slug belongs to an authenticated user.
