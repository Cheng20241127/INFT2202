const animalService = {
    animals: [],
    saveAnimal: function(animal) {
        this.animals.push(animal);
        return true;
    },
    getAnimals:  function() {
        return animals;
    },
    increaseAge: function(){
        this.animals.forEach(animal=> {
            animal.age++;
            console.log(`${animal.name} is ${animal.age} years old`);
        })
    }
}

let animal = {
    name: 'George',
    breed: 'Bear',
    age: 1
};

animalService.saveAnimal(animal);
console.log(animalService.animals);

//setTimeout(animalService.saveAnimal, 1000, animal);
//setTimeout(()=>{animalService.saveAnimal(animal);}, 1.0 * 1000);

//setTimeout(()=>{console.log(animalService.animals);}, 2000);

//const intervalID = setInterval(animalService.increaseAge, 500);
//const intervalID = setInterval(()=>{animalService.increaseAge()}, 500);
