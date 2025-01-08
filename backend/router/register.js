 const route =  require('express').Router()
 const user = require('../models/register')
 const bcrypt = require('bcrypt')
 const jwt = require('jsonwebtoken')
 const secret = 'QW!@AsZxer1%4#T^&*FCDT65$$#*)_+[[p;[]L>"}'

 route.post('/register' , async(req ,res)=>{
            const data = req.body
            try {
                const salt = await bcrypt.genSalt()
                const newPassword = await bcrypt.hash(data.password, salt)
                data.password = newPassword
                const newUser = await user.create(data)
                const token = jwt.sign({ _id: newUser._id }, secret)
                res.cookie('jwt', token, {
                    httpOnly: true,
                    maxAge: 15 * 60 * 1000
                })
                res.status(201).json(newUser)
            } catch (err) {
                if (err.code == 11000) {
                    return res.status(401).json({ error: "Email And Number allReady exist ... !" })
                }
                res.status(501).json({ error: "something wrong ! " })
            }
 })
module.exports = route