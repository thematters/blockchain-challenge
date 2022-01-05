# Blockchain Engineer Code Challenge

Assuming we are designing an on-chain notebook for EVM, where each notebook is an ERC-721 token. Please write Solidity contracts with the below features, and add enough comments to demonstrate your design.

This repo is scaffolded with basic tools, but you are free to use toolset of your choice.

## Required features

1. Owner of each notebook can write content into it, stored on-chain.
2. Clients can retrieve content by the token id of notebook.
3. User can write content with meta transactions so that gas fee could be paid by a third-party.
4. Unit tests for major contract APIs.

## Bouns features

1. A proxy contract that relays calls to logic contract, so that logic contract is upgradable in the future.
2. Deploy a test contract on Rinkeby Testnet.
