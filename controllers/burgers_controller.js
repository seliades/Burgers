let db = require("../models");

module.exports = function (app) {
    app.get("/", function (req, res) {
        db.Burger.findAll({})
            .then(function (burgers_db) {
                var burgersObject = {
                    burgers: burgers_db
                }
                res.render("index", burgersObject);
            });
    });

    // app.post("/id", function (req, res) {
    //     db.Burger.create({
    //         burger_name: req.body.burger_name,
    //         eaten: req.body.eaten
    //     })
    //         .then(function (burgers_db) {
    //             var burgersObject = {
    //                 burgers: burgers_db
    //             }
    //             res.render("index", burgersObject);
    //         });
    // });

    // app.delete("/:id", function (req, res) {
    //     db.Burger.destroy({
    //         where: {
    //             id: req.params.id
    //         }
    //     })
    //         .then(function (burgers_db) {
    //             var burgersObject = {
    //                 burgers: burgers_db
    //             }
    //             res.render("index", burgersObject);
    //         });
    // });

};

