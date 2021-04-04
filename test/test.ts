import { expect } from "chai";
import { ethers, upgrades } from 'hardhat';
const toWei = ethers.utils.parseEther

describe("Logic", function () {
    it('test upgrade', async () => {
        const SampleToken = await ethers.getContractFactory("SampleToken");
        const Logic = await ethers.getContractFactory("LogicV1");
        const LogicV2 = await ethers.getContractFactory("LogicV2");
        const token = await SampleToken.deploy(['SampleToken', 'SMPL'])

        const instance = await upgrades.deployProxy(Logic, [token]);
        const upgraded = await upgrades.upgradeProxy(instance.address, LogicV2);

        const value = await upgraded.add(toWei("10"), toWei("20"));
        expect(value.toString()).to.equal('40');
    });
});