## types

- Cookies
  - minus stealable
  - big server load 
- Access/Refresh token 
  - less stealable
  - more server load
- oAuth 2.0
  1. register app on auth provider page
  2. propper React component: iframe, redirrect
- JWT 
  1. Bad user? 
  2. {hash:""HASH562", type:"JWT"}.{roles: "admin, superAdmin, someRandomDude"}.

hash({hash:""HASH562", type:"JWT"}.{roles: "admin, superAdmin, someRandomDude"}, secretKey)
123dfsadf21341234ewfaew =! 

{hash:""HASH562", type:"JWT"}.{roles: "admin, superAdmin, someRandomDude"}.123dfsadf21341234ewfaew

{hash:""HASH562", type:"JWT"}.{roles: "admin, superAdmin"}.123dfsadf21341234ewfaew


dispatch({type:"uerLoggedIN", payload:{someToken:"sdafasdfas"}})
