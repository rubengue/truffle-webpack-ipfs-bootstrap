// Allows us to use ES6 in our migrations and tests.
require('babel-register')

module.exports = {
  
  networks: {
    development: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*' // Match any network id
    }
    
  }
}
module.exports = {
  compilers: {
    solc: {
      version: "0.7.0", // A version or constraint - Ex. "^0.5.0"
                         // Can also be set to "native" to use a native solc
      docker: false, // Use a version obtained through docker
      parser: "solcjs",  // Leverages solc-js purely for speedy parsing
    } 
  }
}
