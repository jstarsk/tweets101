/**
 * Created by starsky on 5/23/17.
 */
require('./config/config');
require('./db/mongoose');
const path = require('path');
const http = require('http');

const express = require('express');
const socketIO = require('socket.io');

const port = process.env.PORT;

let tweetStream = require('./utils/twitterStreams');
tweetStream(true);

let app = express();
let server = http.createServer(app);
// let io = socketIO(server);

app.use(express.static(path.join(__dirname, '../public')));


server.listen(port, () => {
    console.log(`Started at port ${port}`);
});
