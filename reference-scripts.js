// Sometimes we get lost!

var Web3 = require('web3'); 
var ganache = require('ganache-cli'); 

var web3 = new Web3(); 

if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
  } else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  }