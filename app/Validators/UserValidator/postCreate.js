'use strict'

class PostCreateValidator {

  static get validateAll () {
    return true;
  }

  static get rules() {
    return {
      'name': 'required',
      'email': 'required|email|uniqueIn:user,email',
      'cellPhoneNumber': 'required|number',
      'password': 'required'
    }
  }

  static get messages() {
    return {
      'required': 'O campo {{field}} deve ser informado',
      'number': 'O campo {{field}} deve ser numeral',
      'email': 'O campo deve ser do tipo email'
    } 
  }

  async fails (error) {
    this.ctx.session.withErrors(error)
      .flashAll();

    return this.ctx.response.redirect('back');
  }
}

module.exports = PostCreateValidator;