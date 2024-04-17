const accountId = 122553
let accountEmail = "karthiksajwan@gmail.com"
var accountPassword = "12345"
accountCity = "Chandigarh"

// accountId = 2

accountEmail = "karthk@gmail.com"
accountPassword = "12334"
accountCity = "Bengal"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity])

