var friendsData = require("../data/friends");

module.exports = function (app) {

    app.get("/api/survey", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/survey", function (req, res) {
        if (friendsData) {
            friendsData.push(req.body);
            res.json(true);
        }
    });
};

function scores(currentFriendValue) {
    const allFriendValues = []
    for (let i = 0; i < friendsData.length; i++) {
        allFriendValues.push(friendsData[i].scores.reduce(function (a, b) { return a + b }) / 10)
    }
    for (let i = 0; i < allFriendValues.length; i++) {
       
    }
    
}

