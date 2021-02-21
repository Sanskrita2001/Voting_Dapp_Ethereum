// module.exports = {
//   // See <http://truffleframework.com/docs/advanced/configuration>
//   // for more about customizing your Truffle configuration!
//   networks: {
//     development: {
//       host: "127.0.0.1",
//       port: 7545,
//       network_id: "*" // Match any network id
//     },
//     develop: {
//       port: 8545
//     }
//   }
// };
const fs = require('fs');
const path = require('path');
const HDWalletProvider = require('truffle-hdwallet-provider');

module.exports = {
	contracts_build_directory: path.join(__dirname, './contracts'),
	compilers: {
		solc: {
			version: '0.5.0',
		},
	},

	networks: {
		development: {
			host: '127.0.0.1', // Localhost (default: none)
			port: 7545, // Standard Ethereum port (default: none)
			network_id: '*', // Any network (default: none)
		},
		matic: {
			provider: () =>
				new HDWalletProvider(
					'seminar volume blind melody police bridge gather inmate fury adjust seminar gas',
					`https://rpc-mumbai.matic.today`
				),
			network_id: 80001,
			confirmations: 2,
			timeoutBlocks: 200,
			skipDryRun: true,
		},
	},
};