// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol";

interface ILogic is IERC20Upgradeable {
  function initialize(string memory _name, string memory _symbol) external;

  function add(uint256 a, uint256 b) external view returns (uint256);

  function getRandomNumber(uint256) external view returns (uint256);
}
