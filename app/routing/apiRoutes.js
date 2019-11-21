var friendsData = require("../data/friends");

module.exports = function (app) {

    app.get("/api/survey", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/survey", function (req, res) {
        if (friendsData) {
            //value = req.body.scores.reduce(function (a, b) { return a + b }) / 10;
            //scores(value);
            //let newestLoser = [];
            for (let i = 0; i < 10; i++) {
                req.body.scores[i] = parseInt(req.body.scores[i]);
                //newestLoser.push(req.body.scores[i]);
            }
            friendsData.push(friendsData[differences(req.body.scores)]);
            friendsData.push(req.body);
            res.json(true);
        }
    });
};

/* function scores(currentFriendValue) {
   const allFriendValues = [];
   let closestFriendDifference = 0;
   let closestFriend;
   for (let i = 0; i < friendsData.length; i++) {
       allFriendValues.push(friendsData[i].scores.reduce(function (a, b) { return a + b }) / 10);
   }
   for (let i = 0; i < allFriendValues.length; i++) {
       if (currentFriendValue - allFriendValues[i] < closestFriend) {
           closestFriendDifference = currentFriendValue - allFriendValues[i];
           closestFriend = allFriendValues[i];
       }
       
   } 


}; */





function differences(newestLoser) {
    let placeHolder;
    let smallestDiff = 101;
    let closestFriend;
    for (let i = 0; i < friendsData.length; i++) {
        placeHolder = 0;
        for (let j = 0; j < 10; j++) {
            placeHolder += Math.abs(friendsData[i].scores[j] - parseInt(newestLoser[j]));
            
        }
        if (placeHolder < smallestDiff) {
            smallestDiff = placeHolder;
            closestFriend = i;

        }
    }
    
    return closestFriend;
};


