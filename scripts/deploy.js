const hre = require("hardhat");

async function main() {

  const SupplyChain = await hre.ethers.getContractFactory("Supplychain");
  const supplychain = await SupplyChain.deploy();

  await supplychain.waitForDeployment();

  console.log(`Contract Address: ${supplychain.target}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// 0xDef44Ee4e1727cd8a09B9454B610C9f2283D3c1f
