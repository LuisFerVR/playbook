class Pokemon{
    Pokemon(name){
        this.name=name;
    }
    sayHello = (salu2) => {
        console.log(`saludo: ${salu2}`);
    } 
    
    sayMessage = (massage) => {
        console.log(`mensaje: ${massage}`);
    }
}
module.exports = Pokemon;
/*
  Esto también es la declaración de una función

  module.exports hará que puedas invocar esta función en otro script como:
  > const logger = require('./logger')

  y usarla como:

  > logger("Heeey!")
*/
