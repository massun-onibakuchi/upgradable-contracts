// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

import "./interfaces/ILogic.sol";

contract LogicV2 is Initializable, ILogic {
    uint256 public value;

    function initialize(uint256 _value) public override initializer {
        value = _value;
    }

    function setValue(uint256 _value, uint256 num) public override returns (uint256) {
        value = 2 * _value + num;
        return value;
    }

    function getRandomNumber(uint256 blockNumber) public view override returns (uint256) {
        require(blockNumber < 255, "blockhash only works for 256 most recent");
        return uint256(keccak256(abi.encodePacked(blockhash(blockNumber))));
    }
}
