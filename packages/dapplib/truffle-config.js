require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture casino symptom security chat crater remind huge guess problem blue gasp'; 
let testAccounts = [
"0xd358a846411940f1110fe3000c9715df5d3c8762bda5f7281cb7834eb51f6528",
"0xd0bc5e1d8bcedd5e7cdebf8e8b9a0a3a19e996c9dd078e3b0f3110966a523d7f",
"0x24b660a076961d3fe2b96a8008f186e413ad7fab47cc81ddf8106f2cd2dcdb72",
"0xb7b01af1ceb91dfd910f25097cb685454ece689f237b8a4bfdcf7ff8d11d2c62",
"0x4245611c6b3fd3a52a9c261a00106d0b1542d42a4f9b6c66bb5161de7e2c71ab",
"0x8d899e9efafc680764f4108eff988770c3db58f11a350b2c2a14ee2d72ac7ad1",
"0xd0cd7b122d2238e59e11bc800751ba66e75dffe039f04a5cf894eeed009b4eda",
"0xd23fdee57f11724086ab8aa3b5db0b5b68efca1bc611cabb13e401259e439cf0",
"0x8dfca6de4a79706c4c7bbb1c7701ce81b06aad83d5be238ad25bbb07541fdae3",
"0xcef5730dea6ddf7ccff7877e1fc1e77f0d26fed98df2547dcbd09f8e25bf6076"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

