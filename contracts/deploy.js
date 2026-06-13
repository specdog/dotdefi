// Deploy script for yield-vault on Base Sepolia
const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying from:", deployer.address);

  const profile = await ethers.deployContract("Profile");
  await profile.waitForDeployment();
  console.log("Profile:", await profile.getAddress());

  const registry = await ethers.deployContract("Registry");
  await registry.waitForDeployment();
  console.log("Registry:", await registry.getAddress());

  const resolver = await ethers.deployContract("Resolver");
  await resolver.waitForDeployment();
  console.log("Resolver:", await resolver.getAddress());

  const registrar = await ethers.deployContract("Registrar");
  await registrar.waitForDeployment();
  console.log("Registrar:", await registrar.getAddress());

}

main().catch(console.error);
