const { Wallets } = require("fabric-network");
const FabricCAServices = require('fabric-ca-client');

const { buildCAClient, registerAndEnrollUser, enrollAdmin,getCCP, getWallets,buildWallet} = require("./IdentityManagement.js")

exports.registerUser = async ({ OrgMSP, userId }) => {

    let org = Number(OrgMSP.match(/\d/g).join(""));

    console.log("orga value is",org, OrgMSP,userId)

    let ccp = getCCP(org);

    console.log("CCP value is",ccp)

    let walletPath = getWallets(org);

    // console.log("walletPath",walletPath)

    const caClient = buildCAClient(FabricCAServices, ccp, `ca.org${org}.vaccineledger.com`);

    // setup the wallet to hold the credentials of the application user
    const wallet = await buildWallet(Wallets, walletPath);

    // in a real application this would be done on an administrative flow, and only once
    await enrollAdmin(caClient, wallet, OrgMSP);

    // in a real application this would be done only when a new user was required to be added
    // and would be part of an administrative flow
    await registerAndEnrollUser(caClient, wallet, OrgMSP, userId, `org${org}.department1`);

    return {
        wallet
    }
}