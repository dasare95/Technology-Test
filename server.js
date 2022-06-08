
require('dotenv').config()
const checkoutPublicKey = process.env.CHECKOUT_PUBLIC_KEY
const checkoutSecretKey = process.env.CHECKOUT_SECRET_KEY
console.log(checkoutSecretKey,checkoutPublicKey)
const express = require('express')
const { json } = require('express/lib/response')
const app = express()
const fs = require('fs')
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.get('/index', function(req, res){
    fs.readFile('items.json', function(error,data){
        if (error){
            res.status(500).end()
        } else {
            res.render('index.ejs', {
                items: JSON.parse(data)
            })
        }
    })



})

app.listen(3000)