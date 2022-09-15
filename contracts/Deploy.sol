//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;


contract Deploy {
    
    
    string public storedData;
    
    
    
    function set(string memory myText) public {
        storedData = myText;
        
    }
    
    function get() public view returns (string memory) {
        return storedData;
    }
    
}
