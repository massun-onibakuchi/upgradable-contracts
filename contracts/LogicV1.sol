// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

import "./interfaces/ILogic.sol";

contract LogicV1 is Initializable, ILogic {
  IERC20 public token;

  function initialize(IERC20 _token) public override initializer {
    token = _token;
  }

  function add(uint256 a, uint256 b) public pure override returns (uint256) {
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
