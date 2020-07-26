const Model = use('Model')

class BaseModel extends Model {
  
  static get Serializer () {
    return 'App/Models/Serializers/CamelCase'
  }
  
  static _bootIfNotBooted () {
    if (this.name !== 'BaseModel') {
      super._bootIfNotBooted()
    }
  }

}

module.exports = BaseModel


