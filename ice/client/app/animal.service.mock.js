/*
 *  Service constructor
 */
function AnimalService() {

    // if there is no entry for animals in local storage
    if (!localStorage.getItem('animals')) {
        // https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage  
        // create a new entry in local storage and put an empty array in it        
        localStorage.setItem('animals', JSON.stringify([]))
    }    
}
/*
 *
 */
AnimalService.prototype.getAnimals = function() {
    // this will always be set, because we did it in the constructor
    return JSON.parse(localStorage.getItem('animals'));
}
AnimalService.prototype.getAnimalPage = function({page = 1, perPage = 15}) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            // this will always be set, because we did it in the constructor
            let records = JSON.parse(localStorage.getItem('animals'));
            let pagination = {
                page: page,
                perPage: perPage,
                pages: Math.ceil(records.length/perPage)
            }
            if(pagination.page==pagination.pages){
                reject("No Serivce");
            }
            let start = (pagination.page-1)*perPage;
            let end = start + perPage;
            resolve({
                records: records.slice(start, end),
                pagination
            });
        }, 500);
    });
}
/*
 *
 */
AnimalService.prototype.saveAnimal = function(animal) {
    return new Promise((resolve, reject) => {
        const self = this;
        setTimeout(function () {
            // get a list of animals
            const animals = self.getAnimals();
            // see if this animal already exists
            if (animals.find(a => a.name == animal.name)) {
                // tell the caller we're not going to save this
                throw new Error('An animal with that name already exists!');
            }
            // if it doesn't, add it to the array
            animals.push(animal);
            // and save it in storage again
            localStorage.setItem('animals', JSON.stringify(animals));
            // tell the caller all was well
            resolve(true);
        },250);
    });
}
/*
 *
 */
AnimalService.prototype.findAnimal = function(animalName) {
    return new Promise((resolve, reject) => {
        const self = this;
        setTimeout(()=>{    
            const animals = self.getAnimals();
            const animal = animals.find(a => a.name == animalName);
            if (!animal) {
                throw new Error('That animal does not exist!');
            }
            resolve([animal]);
        },250);
    });
}
/*
 *
 */
AnimalService.prototype.updateAnimal = function(animal) {
    return new Promise((resolve, reject) => {
        const self = this;
        setTimeout( ()=> {      
            const animals = self.getAnimals();
            const idx = animals.findIndex(a => a.name == animal.name);
            if (idx === -1) {
                throw new Error('That animal does not exist!');
            }
            animals[idx] = animal;
            localStorage.setItem('animals', JSON.stringify(animals));
            resolve(true);
        },250);
    });    
}
/*
 *
 */
AnimalService.prototype.deleteAnimal = function(name) {
    return new Promise((resolve, reject) => {
        const self = this;
        setTimeout(function () {       
            const animals = self.getAnimals();
            const idx = animals.findIndex(a => a.name == name);
            if (idx === -1) {
                throw new Error('That animal does not exist!');
            }
            animals.splice(idx, 1);
            localStorage.setItem('animals', JSON.stringify(animals));
            resolve(true);
        },250);
    });     
}

export default new AnimalService();