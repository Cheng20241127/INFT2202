/* const apiPromise1 = axios.get('https://reqres.in/api/users?page=2')
.then(response => {
    return response.data;
})
.catch(err => {
    return {}
}); */

const animalService = (function() {
    let animals = [];
    return {
        saveAnimal: function(animal) {
            animals.push(animal);
            return true;
        },
        getAnimals:  function() {
            return new Promise((resolve, reject) => {
                setTimeout(function () {
                    if (animals.length === 0) {
                        reject("no animal"); //status happens inside promise, which is returned value of await
                    }
                    else {
                        resolve(animals);
                    }
                }, 1000);
            });
        },
        increaseAge: function(){
            animals.forEach(animal=> {
                animal.age++;
                console.log(`${animal.name} is ${animal.age} years old`);
            })
        }
    };
})();

let animal = {
    name: 'George',
    breed: 'Bear',
    age: 1
};
animalService.saveAnimal(animal);
/* try{
    console.log(await animalService.getAnimals());
} catch(e){
    console.log(e);
} */
/* console.log(await animalService.getAnimals()
    .then(ret=>ret)
    .catch(err=>err)); */