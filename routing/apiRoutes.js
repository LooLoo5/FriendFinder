module.exports = function(app){
    // Displays all characters
    app.get("/", function(req, res) {
        return res.json({hi: "Hello"});
    });
};