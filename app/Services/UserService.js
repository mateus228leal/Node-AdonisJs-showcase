'use strict'

const CustomException = use('App/Exceptions/CustomException');

const User = use('App/Models/User');

class UserService {

  async postCreate(data) {
    const newUser = await User.create(data);

    return newUser;
  }

  async postAuth(data, auth) {
    try {
      const { email, password } = data;
  
      const token = await auth.attempt(email, password);
  
      return token;   
    } catch (error) {
      throw new CustomException('Credenciais inválidas', 401);
    }
  }
}

module.exports = UserService;