const {Router} = require('express');
const crypto = require('crypto');
const {workWithDB} = require('../db');
const config = require('config');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const sendMailTo = require('../mail/mail');
const generatePassword = require('password-generator');

const router = Router();

router.post('/reg', async (req, res) => {
    try {
        const USERS_TABLE = config.get('usersTable');

        const {email, username, password} = req.body;
        const candidate = (await workWithDB.find('email', 'email', email, USERS_TABLE))[0];

        if (candidate) {
            return res.status(400).json({message: 'This email is already registered!'});
        }

        const protectedPassword = await bcrypt.hash(password, 12);
        const userID = crypto.randomBytes(10).toString('hex');

        const jwtToken = jwt.sign({ userID },
            String(config.get('jwtSecret')),
            { expiresIn: '1h' }
        );

        await sendMailTo(email, {
            subject: 'Confirm your email on Check Pay',
            text: `To confirm your email, follow the link http://localhost:5000/api/email/confirm/${userID}`, // URL SERVER
        });

        await workWithDB.insertData([`'${userID}'`, `'${email}'`, `'${protectedPassword}'`, 0], USERS_TABLE);
        await workWithDB.insertData(['NULL', `'${username}'`, `'${userID}'`, 'NULL', 'NULL', 'NULL'], config.get('userInfoTable'));

        return res.json({jwtToken, userID, message: 'The user has been created!'});
    } catch (e) {
        console.log(e);
        return res.status(500).json({message: `Error: ${e}`})
    }
});

router.post('/auth', async (req, res) => {
    try {
        const USERS_TABLE = config.get('usersTable');

        const {email, password} = req.body;

        const user = (await workWithDB.find('id, email, password', 'email', email, USERS_TABLE))[0];
        if (!user) {
            return res.status(400).json({message: 'Incorrect data!'});
        }

        const isCorrect = await bcrypt.compare(password, user.password);

        if (!isCorrect) {
            return res.status(400).json({message: 'Incorrect data!'});
        }

        const jwtToken = jwt.sign({ userID: user.id },
            String(config.get('jwtSecret')),
            { expiresIn: '1h' }
        );

        return res.json({jwtToken, userID: user.id, message: 'Successful log in!'});
    } catch (e) {
        console.log(e);
        return res.status(500).json({message: `Error: ${e}`})
    }
})

router.post('/forgot-pas', async (req, res) => {
    try {
        const USERS_TABLE = config.get('usersTable');

        const {email} = req.body;

        const user = (await workWithDB.find('id, email, isConfirmed', 'email', email, USERS_TABLE))[0];
        if (!user) {
            return res.status(400).json({message: 'Incorrect data!'});
        }

        const newPassword = generatePassword(12, false, /\d/, 'temp-');
        const protectedPassword = await bcrypt.hash(newPassword, 12);

        await workWithDB.editData(['password'], [`'${protectedPassword}'`], USERS_TABLE, `email = '${email}'`);

        if (!user.isConfirmed) {
            return res.status(400).json({message: `Your new password: ${newPassword}`});
        }

        await sendMailTo(email, {
            subject: 'Your new password on Check Pay',
            text: `Your new password: ${newPassword}. After authorization, be sure to change it in the settings.`,

        });

        return res.json({message: 'A new temporary password has been sent to the email. After authorization, change it in the settings!'});
    } catch (e) {
        console.log(e);
        return res.status(500).json({message: `Error: ${e}`})
    }
})

module.exports = router;