// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.8.0;

interface IWETH {
    function deposit() external payable;

    function transfer(address to, uint256 value) external returns (bool);

    function withdraw(uint256 wad) external;

    function balanceOf(address addr) external returns (uint256);

    function transferFrom(
        address src,
        address dst,
        uint256 wad
    ) external returns (bool);
}
