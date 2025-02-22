import { createConfig } from 'ponder';
import { http } from 'viem';

import { ExampleContractAbi } from './abis/ExampleContractAbi';

export default createConfig({
  networks: {
    anvil_localhost_testnet: {
      chainId: 31337,
      // This is Anvil's default RPC URL. Make sure you're running it.
      transport: http('http://localhost:8545'),
    },
  },
  contracts: {
    ExampleContract: {
      network: 'anvil_localhost_testnet',
      // TODO: Replace with the actual abi of the contract
      // Note: You'll probably want to use a mergeAbis function to merge the abi with the erc721 abi
      abi: ExampleContractAbi,
      // TODO: Replace with the actual address of the contract
      address: '0x0000000000000000000000000000000000000000',
      startBlock: 1,
    },
  },
});
