let myPromise = new Promise(function(resolve, reject) {
    let x = 0;  
    if (x == 1) {
      resolve("True");
    } else {
      reject("False");
    }
  });
  
  myPromise.then(
    function(value) {console.log(value);
    },
    function(error) {console.log(error);}
  );