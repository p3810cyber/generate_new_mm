const ethers = require('ethers');
const fs = require('fs');

const numWallets = 5;
const wallets = [];

for (let i = 0; i < numWallets; i++) {
  const wallet = ethers.Wallet.createRandom();
  wallets.push({
    address: wallet.address,
    privateKey: wallet.privateKey,
    mnemonic: wallet.mnemonic.phrase
  });
}

fs.writeFileSync('addressKeySeed.json', JSON.stringify(wallets));
