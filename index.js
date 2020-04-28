const express = require('express');
const bodyParser = require('body-parser');

let app = express();

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(bodyParser.json());

//setup router
const router = require('./routes/route');
app.use(router);

app = require('./error')(app);
require('./utils/consumer')(channel => message => {
    // console.log(message.content.toString())
    require('./utils/send-mail')(message);
    channel.ack(message);
});

const port = 3000;
app.listen(port, err => {
    if (err) console.log(err);
    console.log('Running in port ' + port);
});
module.exports = app;
