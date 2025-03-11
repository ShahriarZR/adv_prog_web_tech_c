async function myDisplay() {
    let myPromise = new Promise(function(resolve) {
      setTimeout(function() {resolve("Await Js Practice");}, 3000);
    });
    console.log('Wait for 3 seconds...');
    console.log(await myPromise);
    } 
  myDisplay();