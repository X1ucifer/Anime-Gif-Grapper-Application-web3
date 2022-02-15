require("@nomiclabs/hardhat-waffle");


// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {

      url: "https://eth-rinkeby.alchemyapi.io/v2/J_2TY1a3fFNbNEB1i4Ur2f7YwTjhu0Bj",
      accounts: [
        '176f3ac81288b08e9836e68875d4fda9ec82c1955ddfd63bd5a8690a6704796d',
      ]
    }
  }
};
