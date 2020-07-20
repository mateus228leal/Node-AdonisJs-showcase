'use strict'

class PostAuthValidator {
  static get rules() {
    return {
      'email': 'required|email',
      'password': 'required'
    }
  }

  static get messages() {
    return {
      'required': 'Campo {{field}} deve ser informado',
      'email': 'Campo não é do tipo email'
    }
  }
}

module.exports = PostAuthValidator;