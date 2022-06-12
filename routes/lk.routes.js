const {Router} = require('express');
const {workWithDB} = require('../db');
const config = require('config');
const authMiddleware = require('../middleware/auth.middleware');
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const sendMailTo = require("../mail/mail");

const router = Router();

router.post(
    '/add/:id',
    authMiddleware,
    async (req, res) => {
        try {
            const {type, date, category, amount, comment} = req.body;
            const hashedID = crypto.randomBytes(10).toString('hex');

            await workWithDB.insertData(
                [`'${hashedID}'`, `'${type}'`, `'${date}'`, amount, `'${req.params.id}'`,
                    category ? `'${category}'` : 'NULL', comment ? `'${comment}'` : 'NULL'],
                config.get('usersHistoryTable')
            );

            return res.json({message: 'Data has been successful sent!'});
        } catch (e) {
            console.log(e);
            return res.status(500).json({message: `Error: ${e}`});
        }
    });

router.put(
    '/setting/:id',
    authMiddleware,
    async (req, res) => {
        try {
            let isSomethingNew = false;
            const oldDataInfo = (await workWithDB.find('*', 'userID', req.params.id, config.get('userInfoTable')))[0];
            const possibleKeysInfo = ['username', 'name', 'surname', 'country'];
            const requestBody = req.body;
            const infoKeys = [];
            const infoData = [];

            possibleKeysInfo.forEach((value => {
                const tempData = requestBody[value];
                if (tempData) {
                    if (tempData !== oldDataInfo[value]) {
                        infoKeys.push(value);
                        infoData.push(`'${tempData}'`);
                    }

                }
            }));

            if (infoKeys.length > 0) {
                await workWithDB.editData(
                    infoKeys,
                    infoData,
                    config.get('userInfoTable'),
                    `userID = '${req.params.id}'`
                );

                isSomethingNew = true;
            }

            const oldDataSecure = (await workWithDB.find('*', 'id', req.params.id, config.get('usersTable')))[0];
            const securesKeys = [];
            const secureData = [];

            if (requestBody.email) {
                if (oldDataSecure.email !== requestBody.email) {
                    securesKeys.push('email');
                    secureData.push(`'${requestBody.email}'`);
                }
            }

            if (requestBody.password) {
                if (!bcrypt.compare(oldDataSecure.password, requestBody.password)) {
                    securesKeys.push('password');
                    secureData.push(`'${await bcrypt.hash(requestBody.password, 12)}'`);
                }
            }

            if (securesKeys.length > 0) {
                await workWithDB.editData(
                    securesKeys,
                    secureData,
                    config.get('usersTable'),
                    `id = '${req.params.id}'`
                );

                isSomethingNew = true;
            }

            if (isSomethingNew) {
                return res.json({message: `Data(${([...infoKeys, ...securesKeys]).join()}) has been successful edited!`});
            }  else {
                return res.status(400).json({message: `The data has not been updated...`})
            }
        } catch (e) {
            console.log(e);
            return res.status(500).json({message: `Error: ${e}`})
        }
    });

router.delete(
    '/history/:id',
    authMiddleware,
    async (req, res) => {
        try {
            const {idRow} = req.body;
            const data = (await workWithDB.find("userID","id", idRow, config.get('usersHistoryTable')))[0];

            if (!data) {
                return res.status(400).json({message: "Incorrect row id!"});
            }

            if (data.userID !== req.params.id) {
                return res.status(403).json({message: "You don't have permissions to delete this row!"});
            }

            await workWithDB.deleteData(config.get('usersHistoryTable'), `id = '${idRow}'`);

            return res.json({message: 'Data has been successful deleted!'});
        } catch (e) {
            console.log(e);
            return res.status(500).json({message: `Error: ${e}`})
        }
    });

router.delete(
    '/setting/:id',
    authMiddleware,
    async (req, res) => {
        const checkConfirmAccount = (await workWithDB.find('email, isConfirmed', 'id', req.params.id, config.get('usersTable')))[0];

        if (checkConfirmAccount.isConfirmed) {
            await sendMailTo(checkConfirmAccount.email, {
                subject: 'Confirm deleting your account on Check Pay',
                text: `To delete your account, follow the link http://localhost:5000/api/email/delete/${req.params.id}`, // URL SERVER
            });

            return res.json({message: 'To delete your account follow the link on your email account'});
        }

        await workWithDB.deleteData(config.get('usersHistoryTable'), `userID = '${req.params.id}'`);
        await workWithDB.deleteData(config.get('userInfoTable'), `userID = '${req.params.id}'`);
        await workWithDB.deleteData(config.get('usersTable'), `id = '${req.params.id}'`);

        return res.json({isDeleted: true, message:'Your account has been successful deleted!'});
    });

router.get(
    '/history/:id',
    authMiddleware,
    async (req, res) => {
        try {
            return res.json({
                data:
                    (await workWithDB.find(
                            'id, type, DAY(date) AS date_d, MONTH(date) AS date_m, YEAR(date) AS date_y, category, amount, comment',
                            'userID',
                            req.params.id,
                            config.get('usersHistoryTable'))
                    )
            });
        } catch (e) {
            console.log(e);
            return res.status(500).json({message: `Error: ${e}`})
        }
    });

router.get(
    '/stat/:id',
    authMiddleware,
    async (req, res) => {
        try {
            const data = (await workWithDB.find(
                'type, date, amount, category',
                'userID',
                req.params.id,
                config.get('usersHistoryTable')
            ));

            for (const dataKey in data) {
                const tempDate = new Date(Date.parse(data[dataKey].date));
                tempDate.setDate(tempDate.getDate() + 1);
                data[dataKey].date = tempDate.toISOString();
            }

            return res.json([...data]);
        } catch (e) {
            console.log(e);
            return res.status(500).json({message: `Error: ${e}`})
        }
    });

router.get(
    '/info/:id',
    authMiddleware,
    async (req, res) => {
        try {
            const data = (await workWithDB.find(
                '*',
                'userID',
                req.params.id,
                config.get('userInfoTable')
            ))[0];

            data['email'] = (await workWithDB.find(
                'email',
                'id',
                req.params.id,
                config.get('usersTable')
            ))[0].email;

            return res.json({...data});
        } catch (e) {
            console.log(e);
            return res.status(500).json({message: `Error: ${e}`})
        }
    });


module.exports = router;