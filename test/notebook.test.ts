import "@nomiclabs/hardhat-web3";
import { ethers, web3, expect } from "hardhat";
import { Notebook } from "../typechain";

let notebook: Notebook;

beforeEach(async () => {
  const Notebook = await ethers.getContractFactory("Notebook");
  notebook = await Notebook.deploy("Notebook", "NBK");
  await notebook.deployed();
});

describe("Notebook", function () {
  describe("mint", async () => {
    it("should success", async function () {
      const [owner, client] = await ethers.getSigners();
      const content = "this is content";
      const tx = await notebook.connect(client).createNote(content);
      await tx.wait();
      await notebook.connect(client).mint(tx.hash);
    });
  });
  // we create the note content on transaction data, and get the content from transaction data by parameters
  // so we don't have to store the data on storage, it can reduce the gas.
  describe("create", function () {
    it("should success", async function () {
      // Do something with the accounts
      const [owner] = await ethers.getSigners();
      const content =
        "*this is  * contentthis is contentthis is contentthis " +
        "is contentthis is contentthis is contentthis is contentthis " +
        "is contentthis is contentthis is contentthis is contentthis is " +
        "contentthis is contentthis is contentthis is contentthis is " +
        "contentthis is contentthis is contentthis is contentthis is " +
        "contentthis is contentthis is contentthis is contentthis is " +
        "contentthis is contentthis is contentthis is contentthis is " +
        "contentthis is contentthis is contentthis is contentthis is " +
        "contentthis is contentthis is contentthis is contentthis is " +
        "contentthis is contentthis is contentthis is contentthis is " +
        "contentthis is contentthis is contentthis is contentthis is " +
        "contentthis is contentthis is contentthis is contentthis is " +
        "contentthis is contentthis is contentthis is contentthis is " +
        "contentthis is contentthis is contentthis is contentthis is " +
        "contentthis is contentthis is contentthis is contentthis is " +
        "contentthis is contentthis is contentthis is contentthis is " +
        "contentthis is contentthis is contentthis is contentthis is " +
        "contentthis is contentthis is contentthis is contentthis is " +
        "contentthis is contentthis is contentthis is contentthis is" +
        " contentthis is contentthis is contentthis is contentthis is " +
        "contentthis is contentthis is contentthis is contentthis is " +
        "contentthis is contentthis is contentthis is contentthis is " +
        "contentthis is contentthis is contentthis is contentthis is " +
        "contentthis is contentthis is contentthis is contentthis is " +
        "contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is content*this is  * contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is content";
      const tx = await notebook.connect(owner).createNote(content);
      const getTx = await ethers.provider.getTransaction(tx.hash);
      const inputData = "0x" + getTx.data.slice(10);
      const params = web3.eth.abi.decodeParameters(["string"], inputData);
      expect(params["0"]).to.equal(content);
    });
  });
});
