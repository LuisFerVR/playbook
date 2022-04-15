import Pokemon from './pokemon'

test('1) Create a new object pokemon', () => {
  const myPokemon = new Pokemon('Pikachu')
  expect(myPokemon.name).toBe('Pikachu'); // Corrige esta prueba
});

//TDD Test Driven Develpment
//1) escribir una prueba de lo que quieres modelar
//2) rorrer la prueba vacia y que truene
//3) escribir el código para hacer que la prueba pase