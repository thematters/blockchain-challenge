# Blockchain Engineer Code Challenge

Assuming we are designing an on-chain notebook for EVM, where each notebook is an ERC-721 token. Please write Solidity contracts with the below features, and add enough comments to demonstrate your design.

Feel free to use toolset of your choice.

## Required features

1. Owner of each notebook can write content into it, stored on-chain;
2. Clients can retrieve content by the token id of notebook;
3. Notebooks can receive donations which can be withdrawn by the owner;
4. Deploy the contract to a testnet and make it verifed on blockchain explorer.

## Bouns features

1. Unit testing;
2. A proxy contract that relays calls to logic contract, so that logic contract is upgradable in the future;
3. User can write content without paying gas fees;
