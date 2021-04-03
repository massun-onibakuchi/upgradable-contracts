import { expect } from "chai";
import { ethers, upgrades } from 'hardhat';

describe("Logic", function () {
    it('works', async () => {
        const Logic = await ethers.getContractFactory("LogicV1");
        const LogicV2 = await ethers.getContractFactory("LogicV2");

        const instance = await upgrades.deployProxy(Logic, ['Logic', '']);
        const upgraded = await upgrades.upgradeProxy(instance.address, LogicV2);

        const value = await upgraded.value();
        expect(value.toString()).to.equal('42');
    });
});