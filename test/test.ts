import { expect } from "chai";
import { ethers, upgrades } from 'hardhat';
const toWei = ethers.utils.parseEther


describe("Logic", function () {
    it('test upgrade', async () => {
        const Logic = await ethers.getContractFactory("LogicV1");
        const LogicV2 = await ethers.getContractFactory("LogicV2");
        // deploy
        const instance = await upgrades.deployProxy(Logic, [toWei("100")]);
        expect((await instance.value())).to.equal(toWei("100"));

        await instance.setValue(toWei("150"), toWei("10"));
        expect((await instance.value())).to.equal(toWei("160"));

        // upgrade
        const upgraded = await upgrades.upgradeProxy(instance.address, LogicV2);

        await upgraded.setValue(toWei("200"), toWei("10"));
        expect((await upgraded.value())).to.equal(toWei("410"));
    });
});