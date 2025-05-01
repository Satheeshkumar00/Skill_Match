const asyncHandler = require('express-async-handler')

const registerUser = asyncHandler(async (req,res) => {
    // console.log("y not printig?")
    res.send('Register user')
})

const userLogin = asyncHandler(async (req,res) => {
    res.send('User logged in')
})

const getUser = asyncHandler(async (req,res) => {
    // console.log("y not printig?")
    res.send('Get user')
})

const putUser = asyncHandler(async (req,res) => {
    res.send('User updated')
})

const getMentorsBySkill = asyncHandler(async (req,res) => {
    res.send('Skill')
})

module.exports = {
    registerUser,
    userLogin,
    getUser,
    putUser,
    getMentorsBySkill
}