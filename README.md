# UserManagement

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## About the Project
1. Default admin info: 
    Login using default admin credentials: 
    email: "eve.holt@reqres.in",
    password: "cityslicka"

  based on the token whcih api provides, application authenticate user, on success of authentication it redirects to user-listing page.

2. Identify User from List and disable action to approve next user:
     in constants.ts have set the default value of user id as 4, so that application filters the admin and restricts the Admin to perform any Action on its own user. you can check the condition simply changing (public static ID = "4") value to any number between 1 to 6.

3. APIs: 
   https://reqres.in/   has been used to perform all actions.
   In the services folder you ca find the APIs for update, delete user, user validation also curated using the above API.

4. Features Developed in this application:
   Implementing Sign-in form,
   Implementing Log-in form,
   Development of User Listing view,
   Implementing Services for API calls,
   Implementing Admin Approval Logic,
   Implementing Authentication Logic,
   Implementing Role Management,
   Used session storage to persist data temporarily,
   Implementing CURD logics.

5. Issues encountered:
   https://reqres.in/  in this few of APIs response are not proper, as certain keys/flags/ids were needed to handle data and perform operations smoothly. Like for creating user created_by flag we could use in response on that basis we could filter users created by Admin and fetch details in user listing page. 
   Tried to use API using json-server but it was throughing issues during installing in my system.
