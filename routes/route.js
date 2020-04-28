const router = require('express').Router();
// const cors = require('cors');

// router.use(cors);
router.post('/send', async (req,res,next) => {
    await require('../utils/publisher')(req.body.message);
    res.status(200).json({sucess: true})
})

module.exports = router;
