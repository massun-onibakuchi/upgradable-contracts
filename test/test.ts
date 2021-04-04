import { expect, use } from "chai";
import { ethers, upgrades } from 'hardhat';
const toWei = ethers.utils.parseEther

// use(require("chai-bignumber"));

describe("Logic", function () {
    it('test upgrade', async () => {
        const Logic = await ethers.getContractFactory("LogicV1");
        const LogicV2 = await ethers.getContractFactory("LogicV2");

        const instance = await upgrades.deployProxy(Logic, [100]);

        await instance.setValue(toWei("150"), toWei("10"));
        expect((await instance.value()).toString()).to.equal(toWei("160").toString());

        const upgraded = await upgrades.upgradeProxy(instance.address, LogicV2);
        await upgraded.setValue(toWei("200"), toWei("10"));

        expect((await upgraded.value()).toString()).to.equal(toWei("410").toString());
    });
});