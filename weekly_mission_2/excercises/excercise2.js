const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]
     //punto 1 del ejercicio:
     explorers.forEach(explorer =>console.log(explorer.name));
     //punto 2 del ejercicio:
     console.log("stack con ForEach");
     explorers.forEach(explorer =>console.log(explorer.stack));
     //punto 3 del ejercicio:
     console.log("stack con map");
     const explorerstack = explorers.map(my_explorer_in_list => my_explorer_in_list.stack);
     console.log(explorerstack)
     //punto 4 del ejercicio:
     console.log("explorer con stack JS con filtrer");
     const explorers_with_js = explorers.filter(my_explorer_in_list => my_explorer_in_list.stack.includes("js"));
     console.log(explorers_with_js);
    //punto 5 del ejercicio:
    console.log("explorers de CDMX con FIND");
    const first_exp_in_cdmx = explorers.find(my_explorer_in_list => my_explorer_in_list.city==="CDMX");
    console.log(first_exp_in_cdmx);
    //punto 6 del ejercicio:
    console.log("suma de todos los exercises_completed, con REDUCE");
    const sum = explorers.reduce((contador,my_explorer_in_list) => contador + my_explorer_in_list.exercises_completed,0);
    console.log(sum);
    //punto 7 del ejercicio:
    //Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME
    // lista de elementos
    const value = explorers.some((explorer) => explorer.missions.frontend.exercisesFinished === true )
    console.log("punto 7: al menos uno de los explorers en el la lista tiene exercisesFinished: " + value); //true
    console.log("comprobacion de lo anterior:");
    explorers.forEach(explorer =>console.log(explorer.missions.frontend.exercisesFinished));
    //punto 8 del ejercicio
    //Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.
    const isFinish = explorers.every((front) => typeof front.missions.onboarding.isFinished === true) // every
    console.log("Punto 8: todos los explorers han terminado el onboarding " + isFinish); 
    console.log("comprobacion de lo anterior:");
    explorers.forEach(explorer =>console.log(explorer.missions.onboarding.isFinished));