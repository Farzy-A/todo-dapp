module.exports = {
  networks: {
    development: {
      host: "172.20.10.4", // Your Windows machine IP
      port: 8545, // Ganache port
      network_id: "5777" // Match Ganache network ID
    }
  },
  compilers: {
    solc: {
      version: "0.5.16" // Match Solidity version
    }
  }
};