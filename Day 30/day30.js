// Create a function to extract the name of the subreddit from its URL.

function subReddit(link) {
    return link.substring(25).slice(0, -1);
}

console.log(subReddit("https://www.reddit.com/r/funny/"));
console.log(subReddit("https://www.reddit.com/r/relationships/"));