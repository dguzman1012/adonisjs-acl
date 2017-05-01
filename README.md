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

This repo is the pre-configured project structure taked from AdonisJS.

This project include the custom users CRUD and ACL. The ACL module has four (4) sections: permissions, roles, Permissions-roles and User-role. Let's see how to work with them!

![Menu.png](https://bitbucket.org/repo/XXrbrRz/images/1159941208-Menu.png)


## Permissions
![Permissions.png](https://bitbucket.org/repo/XXrbrRz/images/534345681-Permissions.png)

![New permission.png](https://bitbucket.org/repo/XXrbrRz/images/368165276-New%20permission.png)


## Roles
![roles.png](https://bitbucket.org/repo/XXrbrRz/images/738328550-roles.png)

![Create role.png](https://bitbucket.org/repo/XXrbrRz/images/55363483-Create%20role.png)


## Permissions-Roles
![permission-role.png](https://bitbucket.org/repo/XXrbrRz/images/4095968640-permission-role.png)

![Update permissions.png](https://bitbucket.org/repo/XXrbrRz/images/1804138163-Update%20permissions.png)


## User-role
![user-roles.png](https://bitbucket.org/repo/XXrbrRz/images/3299928292-user-roles.png)

![update user-roles.png](https://bitbucket.org/repo/XXrbrRz/images/1395096820-update%20user-roles.png)


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