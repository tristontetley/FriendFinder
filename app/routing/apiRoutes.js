var friendsData = require("../data/friends");

module.exports = function (app) {

    app.get("/api/survey", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/survey", function (req, res) {
        if (friendsData) {
            for (let i = 0; i < 10; i++) {
                req.body.scores[i] = parseInt(req.body.scores[i]);
            }
            const closestFriend = differences(req.body.scores);
            friendsData.push(req.body);
            res.json(friendsData[closestFriend]);
        }
    });
};

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


