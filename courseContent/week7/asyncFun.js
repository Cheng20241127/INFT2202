function resolveAfter2Seconds() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("resolved");
      }, 2000);
    });
  }
  
async function asyncCall() {
    console.log("calling");
    const result = await resolveAfter2Seconds();
    console.log(result);
//return a new promise to resolve the function return value.
    return 'asynCall: '+result;
}

let useAwait = true;
if(useAwait == false){
    asyncCall()
    .then(ret=>{
       console.log(ret);
    })
    .catch(err=>{
       console.log(err);
    });
}
else{
    console.log(await asyncCall());
}
console.log("after asynCall ... ")
