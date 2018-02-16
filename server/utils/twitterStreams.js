/**
 * Created by starsky on 5/26/17.
 */
require('../config/config');
const filter = require('./filter');

const twitter = require('twitter');
const {TweetStream} = require('../models/tweetStream');
const client = new twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

let tweetStream = function (stream) {
    if (stream) {
        client.stream('statuses/filter', {locations: filter.locations}, (stream) => {
            stream.on('data', (tweet) => {
                let tweetStream = new TweetStream(tweet);
                tweetStream.save().then(() => {
                    console.log(tweet);
                }).catch((e) => {
                    console.log(e);
                });
                // let promise = tweetStream.save();
                // assert.ok(promise instanceof require('mpromise'));
                // promise.then(function (tweet) {
                //     console.log(tweet);
                // })
            })
        });
    }
};

module.exports = tweetStream;