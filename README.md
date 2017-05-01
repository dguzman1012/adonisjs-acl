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

# AdonisJs Application

This repo is the pre-configured project structure to be used for creating ambitious web servers using AdonisJs.

> Make sure to star the official [framework repo](https://github.com/adonisjs/adonis-framework) or [tweet on twitter](https://twitter.com/intent/tweet?url=http://adonisjs.com&text=I%20am%20using%20AdonisJs,%20a%20practical%20MVC%20framework%20for%20nodejs&hashtags=nodejs,adonisframework) :wave:

## Story

One day a :boy: wanted to write a web application to slowly turn it into a business and make some :moneybag: for better living. Being a Javascript lover, he decided to go with Node.js. 

Hosting Node.js applications are cheap and offers lots of mordern programming concepts to build realtime data rich applications.

He was so excited and full of energy to build this application and share it with the world. But soon his dreams started struggling with the amount of decisions he has to make, just to build an MVP of his idea. These decisions were not even related to the business and was about.

1. How should I structure my application?
2. Why do I need to download 20 modules just to start an HTTP server, parse request body and upload files.
3. How should I manage the authentication on website, and expose public API for others to interact with the data?
4. What do I need to do to secure my application from web attacks and how to handle CORS?
5. Why do I have ton of `require` statements everywhere?
6. How the heck should I test my code? I am having hard time mocking dependencies.
7. **WHY THE :fish:** there are no standards to write some code. Hell I am not going to write this application and going for a walk.


## Not Anymore

This is so frustating. Node.js is a beautiful language but all of the above questions have never been answered together. We all love writing small concise modules but business are not created by downloading 20 modules.

Developers needs productive tools, so that they can focus on what matters, and not on downloading & finding the best ways to combine these small modules. 

## AdonisJs

AdonisJs is a beautiful framework with pre-configured answers to all of your questions. We not only created this framework, but validated the features of framework with realtime problems and still improving every bit, so that you have to write less and structured code.

This time a :boy: will write his ambitious application and will set the world on :fire:. Don't hesitate to work on your ideas and we promise to improve the framework every :sunny: and :first_quarter_moon_with_face: and YESSSS do not forget to star us on [:octocat:](https://github.com/adonisjs/adonis-framework)