# CHFD EXAM PREP

CHFD v2.2 - Node.js + Node.js

## NOTE
This is my self learning notes for CHFD Exam preparation. So please do not take this as direction for your CHFD. May be, this can help you out to get some idea how the exam would be. Take a best shot.. All the best..

## CURRICULUM
### Identity Management 7%                         
Instantiate a wallet

Import identities to a wallet

Select and manage identity from a wallet                          

### Network Configuration 8 %                         
Create and use connection profiles

```shell script
network_config.json
```

Instantiate and connect to a gateway
```shell script

    const gateway = new Gateway();

    await gateway.connect(ccp, {
        wallet,
        identity: request.user.userName,
        discovery: { enabled: true, asLocalhost: false } 
    });
```

Access networks and contracts                          


### Smart Contract Development 40%                         
Define smart contract class/construct
Define transaction functions
Validate and sanitize inputs and arguments

Implement deterministic logic/code

Simple state interaction (Get, Put, Delete)

Execute simple queries

Create complex queries

Define assets using key value pairs

Identify potentially private data

Incorporate private data collection

Implement attribute based access control

Initialization of the ledger state

Install and instantiate a smart contract      


### Smart Contract Invocation 25%                         

Invoke smart contracts via CLI

Submit one or more transactions

Evaluate transaction functions e.g. for queries

Query transaction history

Call a transaction using transaction class (stateful)

Create and issue an application contract

Register and handle channel-based events                          

### Maintenance and Testing 20%                         
Handle error and success responses

Identify and review logs

Unit test contracts

Diagnose and endorse policy conflicts

Identify and correct non-determinism in functions

Troubleshoot transaction flow

## ALLOWED RESOURCES

Hyperledger Fabric - https://hyperledger-fabric.readthedocs.io/en/release-2.2/

Command Reference - https://hyperledger-fabric.readthedocs.io/en/release-2.2/command_ref.html

Fabric Contract Api - https://hyperledger.github.io/fabric-chaincode-node/release-2.2/api/index.html

Fabric SDK - https://hyperledger.github.io/fabric-sdk-node/release-2.2/index.html

NodeJS Doc - https://nodejs.org/docs/latest-v12.x/api/



