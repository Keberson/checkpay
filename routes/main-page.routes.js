const {Router} = require('express');
const config = require("config");
const {workWithDB} = require("../db");

const router = Router();

router.post('/', async (req, res) => {
    try {
        const USERS_MESSAGE_TABLE = config.get('usersMessageTable');

        const {name, email, msg} = req.body;

        await workWithDB.insertData(['NULL', `'${name}'`, `'${email}'`, `'${msg}'`, 'NOW()'], USERS_MESSAGE_TABLE);

        return res.json({message: 'The message has been successful sent!'});
    } catch (e) {
        console.log(e);
        return res.status(500).json({message: `Error: ${e}`})
    }
});

module.exports = router;