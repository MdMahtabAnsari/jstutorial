// Immediately Invoke Function Expression (IIFE)


(function chai() {
    //named IIFE
    console.log(`DB CONNECTED`);
})();

(() => {
    //Unname IIFE
    console.log(`DB CONNECTED`);
})();

((name) => {
    // Unnamed IIFE with parameter
    console.log(`DB CONNECTED ${name}`);
})('hitesh');