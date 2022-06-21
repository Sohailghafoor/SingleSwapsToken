
async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());
  const UniSwap = await ethers.getContractFactory("UniSwap"); // name of the artifect when we compile our contract
  const uniSwap = await UniSwap.deploy('0xEC719641D4D3835AB956C57A65b32Bd4B7DA28FB');
  console.log("Token address:", uniSwap.address);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });