const Pokemon = require('./pokemon')

const pikachu = new Pokemon("pikachu")
const bulbasaur = new Pokemon("bulbasaur")
const squirtle = new Pokemon("squirtle")
const charmander = new Pokemon("charmander")

pikachu.sayHello("te saluda pikachu")
pikachu.sayMessage("Heey ataca pikachu!") 

bulbasaur.sayHello("te saluda bulbasaur")
bulbasaur.sayMessage("Heey ataca bulbasaur!")

charmander.sayHello("te saluda charmander")
charmander.sayMessage("Heey! ataca charmander")

squirtle.sayHello("te saluda squirtle")
squirtle.sayMessage("Heey! ataca squirtle")