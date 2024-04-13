// app.js

class Tweet {
    constructor(id, message, time) {
        this.id = id;
        this.message = message;
        this.time = time;
    }
}

class TweetService {
    constructor() {
        this.tweets = [
            new Tweet(1, 'Hello, world!', '1m'),
            new Tweet(2, 'This is a tweet.', '2m'),
            new Tweet(3, 'Vue.js is awesome!', '3m')
        ];
    }

    addTweet(message) {
        const tweet = new Tweet(this.tweets.length + 1, message, 'just now');
        this.tweets.unshift(tweet);
        return tweet;
    }

    getTweets() {
        return this.tweets;
    }
}

const tweetService = new TweetService();

function renderTweets() {
    const tweetFeed = document.getElementById('tweet-feed');
    tweetFeed.innerHTML = '';

    tweetService.getTweets().forEach(tweet => {
        const tweetElement = document.createElement('div');
        tweetElement.classList.add('tweet');
        tweetElement.innerHTML = `
            <p>${tweet.message}</p>
            <small>${tweet.time}</small>
        `;
        tweetFeed.appendChild(tweetElement);
    });
}

function postTweet(event) {
    event.preventDefault();
    const tweetInput = document.getElementById('tweet-input');
    const message = tweetInput.value.trim();
    
    if (message) {
        tweetService.addTweet(message);
        renderTweets();
        tweetInput.value = '';
    }
}

document.getElementById('tweet-form').addEventListener('submit', postTweet);

// Initial render
renderTweets();
