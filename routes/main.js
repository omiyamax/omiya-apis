__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/docs', (req, res) => {
    res.sendFile(__path + '/views/docs-1.html')
})
router.get('/', (req, res) => {
    res.sendFile(__path + '/views/docs.html')
})
router.get('/api/game', (req, res) => {
    res.sendFile(__path + '/views/game.html')
})

router.get('/about', (req, res) => {
    res.sendFile(__path + '/views/about.html')
})

router.get('/contact', (req, res) => {
    res.sendFile(__path + '/views/contact.html')
})

router.get('/buy', (req, res) => {
    res.sendFile(__path + '/views/anonymous.html')
})

module.exports = router
