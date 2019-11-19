var friendsData = require("../data/friends");

module.exports = function (app) {

    app.get("/api/survey", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/survey", function (req, res) {
        if (friendsData) {
            friendsData.push(req.body);
        }
    })
};

function scores() {
    for (let i = 0; i < friendsData.scores.length; i ++) {
        let data = friendsData.scores[i];
        data += data;
    }
    let finalScore = data / 10;
    console.log(finalScore);
}

function compatible(val, func) {
    for (let i = 0; i < friendsData.length; i++) {
        if (friendsData[i].scores)
    }
}