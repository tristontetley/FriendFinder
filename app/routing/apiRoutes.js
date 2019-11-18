var friendsData = require("../data/friends");

module.exports = function(app) {
    
    app.get("/api/survey", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/survey", function (req, res) {
        if(friendsData) {
            friendsData.push(req.body);
        }
    })
};