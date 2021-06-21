const REOB = artifacts.require("REOB");

module.exports = function(deployer, network, accounts) {
    deployer.deploy(REOB);
};
