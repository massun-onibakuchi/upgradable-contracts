import { ethers, upgrades } from "hardhat";

async function main() {
    // Deploying
    const Logic = await ethers.getContractFactory("LogicV1");
    const instance = await upgrades.deployProxy(Logic, [42]);
    await instance.deployed();

    console.log('instance.address :>> ', instance.address);

    // Upgrading
    const LogicV2 = await ethers.getContractFactory("LogicV2");
    const upgraded = await upgrades.upgradeProxy(instance.address, LogicV2);
    console.log('Logic upgraded');
}

main();