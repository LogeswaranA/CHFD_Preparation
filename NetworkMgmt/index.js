const { getCCP,getWallets,buildWallet } = require("../IdentityManagement/IdentityManagement.js");
//Gateway 
const { Wallets, Gateway } = require('fabric-network');
const path = require("path");

exports.invokeTransaction = async (cp, channelName, chaincodeName, functionName, request, schema) => {
    
    let org = request.user.org;

    let num = Number(org.match(/\d/g).join(""));

    const ccp = getCCP(num);

    const walletPath = await getWallets(num);

    console.log("wallet path is",walletPath);

    const wallet = await buildWallet(Wallets, walletPath);

    const gateway = new Gateway();

    await gateway.connect(ccp, {
        wallet,
        identity: request.user.userName,
        discovery: { enabled: true, asLocalhost: false } 
    });

    // Build a network instance based on the channel where the smart contract is deployed
    const network = await gateway.getNetwork(channelName);

    // Get the contract from the network.
    const contract = network.getContract(chaincodeName);

    var userinputs = "";

    if (request.originalUrl.indexOf('/delete') >= 0) {
        userinputs = request.body.id;
    }

    console.log("userinputs is ",userinputs)
    const transaction = contract.createTransaction(functionName);
    const result = await transaction.submit(userinputs);
    var obj = {"Success":true,"Txn ID":transaction.getTransactionId(),"statusCode":200};

    return obj;
}