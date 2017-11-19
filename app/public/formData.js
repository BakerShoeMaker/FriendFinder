console.log("hello world.");
var userArrayData = [];
var _quest_1;
var _quest_2;
var _quest_3;
var _quest_4;
var _quest_5;
var _quest_6;
var _quest_7;
var _quest_8;
var _quest_9;
var _quest_10;

var friendsInformation =[];
$('#submit').on('click', function(){

    /*for(var i = 0; i<9; i++){
        _quest_ +i =  $('#q'+ i.val());
        userArrayData.push();
    }*/
    _quest_1 = $('#q1').val();
    userArrayData.push(_quest_1);
    _quest_2 = $('#q2').val();
    userArrayData.push(_quest_2);
    _quest_3 = $('#q3').val();
    userArrayData.push(_quest_3);
    _quest_4 = $('#q4').val();
    userArrayData.push(_quest_4);
    _quest_5 = $('#q5').val();
    userArrayData.push(_quest_5);

    _quest_6 = $('#q6').val();
    userArrayData.push(_quest_6);
    _quest_7 = $('#q7').val();
    userArrayData.push(_quest_7);
    _quest_8 = $('#q8').val();
    userArrayData.push(_quest_8);
    _quest_9 = $('#q9').val();
    userArrayData.push(_quest_9);
    _quest_10 = $('#q10').val();
    userArrayData.push(_quest_10);
        console.log("The value is: ", _quest_1);
        console.log(userArrayData);
});

//???????????????????????????????????????

// Get data from Friends.js file
module.exports = function(app) {

    //Used to display a JSON list of all possible friends.
    app.get("/api/friends", (req, res)=>{
        res.json(friendsData);
        console.log(res);
    });

};
//???????????????????????????????????????


//Compare the User inputted information with each users in friends.json in a forEach
// subtract the each position????


//Display results in the modal.