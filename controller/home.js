const express = require('express');

const router = express.Router();


router.get('/', (req, res, next) => {
    res.send('server is up and running')
})

module.exports = router;