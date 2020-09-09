'use strict'
const { validate } = use('Validator');

const postAuthValidator = use('App/Validators/UserValidator/postAuth');
const postCreateValidator = use('App/Validators/UserValidator/postCreate');

const UserService = use('App/Services/UserService');

class UserController {

  constructor() {
    this.userService = new UserService();
  }

  async postCreate({ request, response }) {
    const data = request.only(['name', 'email', 'cellPhoneNumber', 'password']);

    const validation = await validate(data, postCreateValidator.rules, postCreateValidator.messages);
    if (validation.fails()) {
      return response.status(422).json(validation.messages());
    }

    return await this.userService.postCreate(data);
  }
  
  async postAuth({ request, auth, response }) {
    const data = request.only([
      'email',
      'password'
    ]);
    
    const validation = await validate(data, postAuthValidator.rules, postAuthValidator.messages);
    if (validation.fails()) {
      return response.status(422).json(validation.messages());
    }

    return await this.userService.postAuth(data, auth);
  }
}

module.exports = UserController
