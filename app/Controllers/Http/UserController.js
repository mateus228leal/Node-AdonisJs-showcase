'use strict'
const { validate } = use('Validator');

const postAuthValidator = use('App/Validators/UserValidator/postAuth');
const postCreateValidator = use('App/Validators/UserValidator/postCreate');

const UserService = use('App/Services/UserService');

class UserController {

  constructor() {
    this.userService = new UserService();
  }

  /**
   * @swagger
   * /user/create:
   *   post:
   *      tags:
   *        - User
   *      summary: Criação de usuário
   *      parameters:
   *          - name: name
   *          description: Dados iniciais para criação de conta do usuário
   *          in: body
   *          required: true
   *          type: string
   *          schema:
   *            type: object
   *            required:
   *              - name
   *              - email
   *              - cellPhoneNumber
   *              - password
   *            properties:
   *              name:
   *                type: string
   *                description: Nome do usuário
   *              email:
   *                type: string
   *                description: Email (valido) do usuário
   *              cellPhoneNumber:
   *                type: string
   *                description: Número de celular do usuário
   *              password:
   *                type: string
   *                description: Nome do usuário
   *      produces:
   *        - application/json
   *      responses:
   *        200:
   *          description: Usuário criado com sucesso.
   *        422:
   *          description: Falha em validação de algum dos campos
   * 
   */
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
