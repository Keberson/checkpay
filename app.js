const express = require('express');
const config = require("config");

const PORT = config.get('port') || 5000;

const app = express();

app.use(express.json({ extended: true }));
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/home', require('./routes/main-page.routes'));
app.use('/api/lk', require('./routes/lk.routes'));
app.use('/api/email', require('./routes/mail.routes'));

app.listen(PORT, () => {
    console.log(`App has been started on port ${PORT} ...`);
});