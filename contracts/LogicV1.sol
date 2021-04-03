// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "./interfaces/ILogic.sol";

contract LogicV1 is ERC20Upgradeable, ILogic {
  function initialize(string memory _name, string memory _symbol)
    public
    override
    initializer
  {
    __ERC20_init(_name, _symbol);
  }

  function add(uint256 a, uint256 b) public view override returns (uint256) {
    return a + b;
  }

  function getRandomNumber(uint256 seed)
    public
    view
    override
    returns (uint256)
  {
    return uint256(keccak256(abi.encodePacked(block.timestamp, seed)));
  }
}
