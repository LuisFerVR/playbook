export default class MyPokemon{
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