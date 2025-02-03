const animalService = {
    animals: [],
    saveAnimal: function(animal) {
        try{
            this.animals.push(animal);
            return true;
        }
        catch(err){
            console.log(err);
        }
    },
    getAnimals:  function() {
        return animals;
    },
    increaseAge: function(){
        try{
            this.animals.forEach(animal=> {
                animal.age++;
                console.log(`${animal.name} is ${animal.age} years old`);
            });
        }
        catch(err){
            console.log(err);
        }
    }
}

let animal = {
    name: 'George',
    breed: 'Bear',
    age: 1
};
//'this' in saveAnimal funciton will refer to animalService
animalService.saveAnimal(animal);
//console.log(animalService.animals);
try{
//demo 'this' problem brought by timer    
    setTimeout(animalService.saveAnimal, 1000, animal);
}
catch(err){
    console.log(err);
}

//console.log(animalService.animals);
//setTimeout(()=>{animalService.saveAnimal(animal);}, 1.0 * 1000);

//setTimeout(()=>{console.log(animalService.animals);}, 2000);

//const intervalID = setInterval(animalService.increaseAge, 500);
//const intervalID = setInterval(()=>{animalService.increaseAge()}, 500);
