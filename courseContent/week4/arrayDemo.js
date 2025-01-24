let tcase = 1;
switch(tcase){
    case 0:{
        const numbers = [45, 4, 9, 16, 25];
        let sum = numbers.reduce(myFunction);
        
        function myFunction(total, value, index, array) {
            console.log(total, value, index);
            console.log(array);
            return total + value;
        }   
        break;
    }
    case 1:{//https://www.geeksforgeeks.org/javascript-array-keys-method/
        let sparseArray = [];
        sparseArray[4] = 'Hello';
        console.log('length', sparseArray.length);
        const keys = sparseArray.keys();        
        for (let x of keys) {
          console.log(x);
        }
        break;
    }
}

