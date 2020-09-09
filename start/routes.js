'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.group(() => {
  Route.post('create', 'UserController.postCreate');
  Route.post('auth', 'UserController.postAuth');
  Route.post('recover', 'UserController.postRecover');
  Route.post('invite', 'UserController.postInvite').middleware(['auth']);
}).prefix('user');

Route.group(() => {
  Route.post('create', 'BillController.postCreate');
}).prefix('bills');

Route.group(() => {

}).prefix('solicitations');
