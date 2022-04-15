//SPDX-License-Identifier: Apache-2
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "hardhat/console.sol";


contract Notebook is ERC721 {
  bytes public data;
  uint256 public _totalSupply = 0;
  mapping (address => uint256) public donations;

  constructor(string memory name, string memory symbol) ERC721(name, symbol) {
    // initialize Notebook with total supply etc.
  }

  function createNote(string memory content) external{
  }

  function mint(uint256 tokenId) external {
    uint256 newSupply = _totalSupply + 1;
    _totalSupply = newSupply;
    _safeMint(msg.sender, tokenId);
  }

  function donate(uint256 tokenId) external payable {
    address owner = ownerOf(tokenId);
    uint256 ownerBalance = donations[owner] + msg.value;
    donations[owner] = ownerBalance;

  }

  function draw() external {
    uint256 balance = donations[msg.sender];
    payable(msg.sender).transfer(balance);
    delete donations[msg.sender];
  }
}
