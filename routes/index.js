const express = require('express')
const router = express.Router()

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
 ];

router.get('/', async (req, res) => {
    res.render('index', {messages : messages})
})

router.post('/', async(req, res) => {
    if(!req.method === "POST") return
    const {user, text, added} = req.body
    console.log(user, text)
    messages.push({
        user: user,
        text: text,
        added: new Date(added)
    });

    res.redirect('/')
})

module.exports = router