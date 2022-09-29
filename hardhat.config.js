require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
require("hardhat-gas-trackooor");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks:{
    bsctest:{
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      accounts: [process.env.PRIV_KEY]
    }
  },
  etherscan:{
    apiKey: process.env.BSC_API_KEY
  }
};
