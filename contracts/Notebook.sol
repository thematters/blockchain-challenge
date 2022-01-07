//SPDX-License-Identifier: Apache-2
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Notebook is ERC721 {
  constructor(string memory name, string memory symbol) ERC721(name, symbol) {
    // initialize Notebook with total supply etc.
  }
}
