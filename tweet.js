// tweet.js (tweet module)
export class Tweet {
    constructor(id, message, time) {
        this.id = id;
        this.message = message;
        this.time = time;
    }
}

// tweetService.js (tweet service module)
import { Tweet } from './tweet.js';

let tweets = [];

export function addTweet(message) {
    const tweet = new Tweet(tweets.length + 1, message, 'just now');
    tweets.unshift(tweet);
    return tweet;
}

export function getTweets() {
    return tweets;
}
