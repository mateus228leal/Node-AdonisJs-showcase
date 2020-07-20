class BaseValidator {
  static get messages() {
    return {
      'required': 'O campo {{field}} deve ser informado',
      'number': 'O campo {{field}} deve ser numeral',
      'email': 'O campo deve ser do tipo email'
    } 
  }
}

module.exports = BaseValidator;