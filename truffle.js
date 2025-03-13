module.exports = {
  contracts_build_directory: "./build/contracts",
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Connects to any network
    }
  },
  compilers: {
    solc: {
      version: "0.5.16", // Match your Solidity version
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
  }
};