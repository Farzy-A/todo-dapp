module.exports = {
  networks: {
    development: {
      host: "192.168.0.80", // Your Windows machine IP
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