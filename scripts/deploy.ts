import { ethers } from "hardhat";

const deploy = async () => {
  const Notebook = await ethers.getContractFactory("Notebook");
  const notebook = await Notebook.deploy("Notebook", "NG");
  console.log("Contract deployed to address:", notebook.address);
  const result = await notebook.deployTransaction.wait();
  console.log("gasUsed:", result.gasUsed);
};
deploy()
  // eslint-disable-next-line no-process-exit
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    // eslint-disable-next-line no-process-exit
    process.exit(1);
  });
