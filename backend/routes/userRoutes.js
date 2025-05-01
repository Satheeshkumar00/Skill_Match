const express = require('express')
const Route = express.Router()
const {registerUser,userLogin,getUser,putUser,getMentorsBySkill} = require('../controller/userController')

Route.route('/registerUser').post(registerUser)
Route.route('/userLogin').post(userLogin)
Route.route('/getUser').get(getUser)
Route.route('/putUser').put(putUser)
Route.route('/skill').get(getMentorsBySkill)

module.exports = Route;