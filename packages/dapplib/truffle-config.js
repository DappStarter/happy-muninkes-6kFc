require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half argue bright venture strategy rival rifle column hidden clog slot genuine'; 
let testAccounts = [
"0x4d417727aa0d7d4652e3571171f301d9db5ab849b4345797604049c0e10da737",
"0xbfbdd1dc4788424b8dd44acd57fa926e62b45cc06992db06da98ab2ec5573578",
"0xf7fc8eaef1f67c4c33f6028f673da8f7b1de7d3064786cdad061ffd12459782a",
"0xe9d5a5f7c24eadcc5cdf88b9ccf02e410096dfe9e0309f0771caf230735c034c",
"0xb49bd772608bf4f5630f5694eb44335514e5498d2ea7d2ed2e4610327225262c",
"0xe544f3bf8c32858ccfa32928092a3597842d675a12d7c96e634318a2d59d557e",
"0xfdf73e3124b31c32c4b13b38ea79d1081ca2fbf84d67897f359d9546d0e5471a",
"0xa9ec13a2be142836a2c9fc8d64d044452ac192c9c4800755f75b7c2e0c34ce7e",
"0xca635bff14b2cfa3595627f1fc0267097e38a91d42d94640b48e11ded7387077",
"0x5ef5cd78670310ff92aa79ff540cabb25b4733e66ef2b75297726186184e9dff"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

