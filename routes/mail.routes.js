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
            return res.status(500).json(`Error: ${e}`);
        }
    }
);

router.get(
    'delete/:id',
    async (req, res) => {
        try {
            await workWithDB.deleteData(config.get('usersHistoryTable'), `userID = '${req.params.id}'`);
            await workWithDB.deleteData(config.get('usersInfoTable'), `userID = '${req.params.id}'`);
            await workWithDB.deleteData(config.get('usersTable'), `id = '${req.params.id}'`);

            return res.json('Your account has been successful deleted!');
        } catch (e) {
            console.log(e);
            return res.status(500).json(`Error: ${e}`);
        }
    }
);

module.exports = router;