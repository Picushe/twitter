const User = require('./../../app/models/User')

describe("Unit Tests for Users class",() => {
    test('Create an User object ', () => {
      //Aqui invocas el codigo que va usar en tu app
      const user = new User(1, "carlogilmar", "Carlo", "Bio")

      //Aqui validas los resultados de ese codigo
      //Esta es una comparacion que va a igualar el valor de la izquierda con el valor de la derecha (valor esperado)
      expect(user.id).toBe(1)
      expect(user.username).toBe("carlogilmar")
      expect(user.name).toBe("Carlo")
      expect(user.bio).toBe("Bio")
      expect(user.dateCreated).not.toBeUndefined()//verifica que el valor no se undefined
      expect(user.lastUpdated).not.toBeUndefined()
    });
    
})