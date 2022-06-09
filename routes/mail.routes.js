const {Router} = require('express');
const {workWithDB} = require('../db');
const config = require('config');

const router = Router();

router.get(
    '/confirm/:id',
    async (req, res) => {
        try {
            await workWithDB.editData(
                ['isConfirmed'],
                [1],
                config.get('usersTable'),
                `id = '${req.params.id}'`
            );

            return res.json('Your email has been successful confirmed!');
        } catch (e) {
            console.log(e);
            return res.status(500).json({message: `Error: ${e}`});
        }
    });


module.exports = router;