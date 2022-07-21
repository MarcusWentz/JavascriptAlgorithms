const { expect } = require('chai');

var chai = require('chai');
const BN = require('bn.js');
chai.use(require('chai-bn')(BN));

describe("Tests:", function () {

      let Contract;
      let ContractDeployed;
      let owner;
      let addr1;
      let addr2;
      let addrs;

      beforeEach(async function () {
        Contract = await ethers.getContractFactory("TwoSum");
        [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
        ContractDeployed = await Contract.deploy();
      });

      describe("Constructor", function () {
          it("answerIndexArray empty at deployment.", async function () {
            arraySlot0 = await ContractDeployed.answerIndexArray(0);
            console.log("answerIndexArray[0] = " + new ethers.BigNumber.from(arraySlot0._hex).toString())
            expect((new ethers.BigNumber.from(arraySlot0._hex).toString())).to.be.a.bignumber.that.is.equal(new ethers.BigNumber.from('0').toString())
            arraySlot1 = await ContractDeployed.answerIndexArray(1);
            console.log("answerIndexArray[1] = " + new ethers.BigNumber.from(arraySlot1._hex).toString())
            expect((new ethers.BigNumber.from(arraySlot1._hex).toString())).to.be.a.bignumber.that.is.equal(new ethers.BigNumber.from('0').toString())
          });
       });

        describe("TwoSumFind", function () {
            it("Revert when array not padded with 0", async function () {
              await expect(
                ContractDeployed.TwoSumFind([2,7,11,15], 9)
                   ).to.be.revertedWith("Array input must have starting value at zero and be at least 3 elements long!");
            });
            it("Revert when array less than 3", async function () {
              await expect(
                ContractDeployed.TwoSumFind([2,7], 9)
                   ).to.be.revertedWith("Array input must have starting value at zero and be at least 3 elements long!");
            });
            it("[0,2,7,11,15] ([2,7,11,15] padded), 9 => [0,1]", async function () {
                await ContractDeployed.TwoSumFind([0,2,7,11,15], 9)
                arraySlot0 = await ContractDeployed.answerIndexArray(0);
                console.log("answerIndexArray[0] = " + new ethers.BigNumber.from(arraySlot0._hex).toString())
                expect((new ethers.BigNumber.from(arraySlot0._hex).toString())).to.be.a.bignumber.that.is.equal(new ethers.BigNumber.from('0').toString())
                arraySlot1 = await ContractDeployed.answerIndexArray(1);
                console.log("answerIndexArray[1] = " + new ethers.BigNumber.from(arraySlot1._hex).toString())
                expect((new ethers.BigNumber.from(arraySlot1._hex).toString())).to.be.a.bignumber.that.is.equal(new ethers.BigNumber.from('1').toString())
            });
            it("[0,3,2,4] ([3,2,4] padded), 6 => [1,2]", async function () {
                await ContractDeployed.TwoSumFind([0,3,2,4], 6)
                arraySlot0 = await ContractDeployed.answerIndexArray(0);
                console.log("answerIndexArray[0] = " + new ethers.BigNumber.from(arraySlot0._hex).toString())
                expect((new ethers.BigNumber.from(arraySlot0._hex).toString())).to.be.a.bignumber.that.is.equal(new ethers.BigNumber.from('1').toString())
                arraySlot1 = await ContractDeployed.answerIndexArray(1);
                console.log("answerIndexArray[1] = " + new ethers.BigNumber.from(arraySlot1._hex).toString())
                expect((new ethers.BigNumber.from(arraySlot1._hex).toString())).to.be.a.bignumber.that.is.equal(new ethers.BigNumber.from('2').toString())
            });
            it("[0,3,3] ([3,3] padded), 6 => [0,1]", async function () {
                await ContractDeployed.TwoSumFind([0,3,3], 6)
                arraySlot0 = await ContractDeployed.answerIndexArray(0);
                console.log("answerIndexArray[0] = " + new ethers.BigNumber.from(arraySlot0._hex).toString())
                expect((new ethers.BigNumber.from(arraySlot0._hex).toString())).to.be.a.bignumber.that.is.equal(new ethers.BigNumber.from('0').toString())
                arraySlot1 = await ContractDeployed.answerIndexArray(1);
                console.log("answerIndexArray[1] = " + new ethers.BigNumber.from(arraySlot1._hex).toString())
                expect((new ethers.BigNumber.from(arraySlot1._hex).toString())).to.be.a.bignumber.that.is.equal(new ethers.BigNumber.from('1').toString())
            });
         });
});
