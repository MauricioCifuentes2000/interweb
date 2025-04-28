// controllers/project.js
var controller = {
    home: function(req, res) {
        return res.status(200).json({
            message: "Soy la home"
        });
    },

    test: function(req, res) {
        return res.status(200).json({
            message: "soy test del controlador project"
        });
    }
};

module.exports = controller;
