const mongoose = require("mongoose");

const Equation = require("./models/equationSchema");
const User = require("./models/userSchema");


module.exports = function (router) {

    //This endpoint POSTS a new equation to the database
    router.post("/api/equations", (req, res, next) => {

        //variables for new POST in body
        const userName = req.body.userName
        const problem = req.body.problem

        //Search for the user
        User.findOne({userName: userName})
            .exec((err, user) => {
                if (err) return next(err);
                //If the user dose not exist, create a new user
                if (!user) {

                    let equation = new Equation({problem: problem,})
                    //create new user
                    let user = new User({userName: userName,})
                    //create new equation
                    

                    //add equation to instance of user
                    user.equations.push(equation._id)
                    user.save((err) => {
                        if (err) return next(err);
                    })
                    equation.save((err) => {
                        if (err) return next(err);
                    })
                    res.send(user)

                //if the user does exixt, add the equation to that instance of user
                } else {
                    let equation = new Equation({problem: problem,})

                    //add equation to instance of user
                    user.equations.push(equation._id)
                    user.save((err) => {
                        if (err) return next(err);
                    })
                    equation.save((err) => {
                        if (err) return next(err);
                    })
                    res.send(user)
                }
            })
    })

    //This endpoing GETS the ten most recent equations
    router.get("/api/equations", (req, res, next) => {

        Equation.find({})
            .sort({'createdAt': -1})
            .limit(10)
            .exec((error, equation) => {
        if (error) return res.send(error.message);
        res.send(equation);
        res.end
    })

    })

}