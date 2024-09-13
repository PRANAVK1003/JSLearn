const accountId = 100404
let accountEmail = "pranavkumbhar102003@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
accountEmail = "pranav71k@gmail.com"
accountPassword = "54321"
let accountState

console.log(accountId);
console.log( accountEmail );
console.log(accountPassword);

console.table([accountPassword , accountCity ,accountId , accountEmail ]);
/*
Prefer not to use Var 
because of issue in block scope and functional scope 
*/
console.log(accountState);
