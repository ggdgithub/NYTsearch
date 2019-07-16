var headline = $(this).("");

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + headline + "&api-key=5prQ6Srnn8xWqRYLsirnF0NIO1zGp9ci";
$.ajax({
    url: queryURL,
    method: "GET"
})