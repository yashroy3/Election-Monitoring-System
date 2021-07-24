pragma solidity >=0.4.21 <0.7.0;

contract Election {
    // Model a Candidate


    // Model a Voter
    struct Voter{
        uint voterId;
        string name;
        uint age;
        bool voted;
        string dob;
        string location;
        string time;
        string dov;
    }


    mapping(uint => Voter) public voters;
    
    mapping(uint => bool) public addedVoter;
    mapping(uint => bool) public updatedVoter;


    function addVoter(uint _voterId,string memory _name,uint _age,string memory _dob) public {
        require(_age>=18);
        require(!addedVoter[_voterId]);
        voters[_voterId] = Voter(_voterId,_name,_age,false,_dob,'-','-','-');
        addedVoter[_voterId]=true;
    }

    function updateVoter(uint _voterId,string memory _location, string memory _time,string memory _dov) public {
        require(!updatedVoter[_voterId]);
        updatedVoter[_voterId]=true;
        voters[_voterId].voted=true;
        voters[_voterId].location=_location;
        voters[_voterId].time=_time;
        voters[_voterId].dov=_dov;
    }
    
}