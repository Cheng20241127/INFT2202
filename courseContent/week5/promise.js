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
                }, 2000);
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

let wait = false;
let date = new Date(Date.now());
console.log(date.toLocaleString(),  'getAnimals ...');
if(wait){
    try{
        let animals = await animalService.getAnimals();
        date = new Date(Date.now());
        console.log(date.toLocaleString(), animals);
    } catch(e){
        console.log(e);
    } 
} else {
    animalService.getAnimals()
    .then(ret=>{
        let date = new Date(Date.now());
        console.log(date.toLocaleString(), ret);
    })
    .catch(err=> console.log(err));
}
date = new Date(Date.now());
console.log(date.toLocaleString(), 'code after getAnimals');  
