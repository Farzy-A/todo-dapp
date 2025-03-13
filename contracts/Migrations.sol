pragma solidity ^0.5.16;

contract Migrations {
    address public owner;
    uint public last_completed_migration;

    constructor() public { // Fix constructor syntax
        owner = msg.sender;
    }

    modifier restricted() {
        require(msg.sender == owner, "This function is restricted to the contract's owner");
        _;
    }

    function setCompleted(uint completed) public restricted { // Add `public`
        last_completed_migration = completed;
    }

    function upgrade(address new_address) public restricted { // Add `public`
        Migrations upgraded = Migrations((new_address)); // This is still an issue, see below.
    }
}

