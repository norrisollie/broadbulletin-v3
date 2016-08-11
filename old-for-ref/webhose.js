//Webhose API 

console.log("WebHose is all good")

var key = 'https://webhose.io/search?token=ec4e5f81-890c-4ed6-b7ee-ac84249e74e4&format=json&q='
var performance = ')%20performance_score%3A%3E0'
var site_mail = '&site=dailymail.co.uk'
var site_bbc = '&site=bbc.co.uk'
var site_guardian = '&site=theguardian.com'
var site_express = '&site=express.co.uk'
var type = '&site_type=news'
var title = '%20thread.title%3A('

function callWebhose(url, container)
{
    var ul = $(container)
    
    $.ajax(
    {
        dataType: "json",
        url: url, // the url to get data from
        success: function ( data ) // the function to execute once we get data back from WebHose
        {

            //the counter that goes through the JSON data
            
            var posts = data.posts

            var total = posts.length
            var counter = 0
            while (counter < total) 
            {
                
                

                //Using the counter to go through the 'post' variable (Each Article)
                
                var post = posts[counter]

                console.log(post) 

                console.log(post.title)

                console.log(post.url)

                console.log(post.thread.main_image)
                
                //The List structure for the pulled content
                
                var li = '<li>'
                    + '<a href="' + post.url + '">' + '<img src="' + post.thread.main_image + '">'
                    + '<div class="a-wrapper"><a href="' + post.url + '">' + post.title +'</a></div>'
                    + '</li>'
                
                //shows the list with content
                
                ul.append(li)

                //increment counter by 1
                //counter = counter + 1
                //counter += 1
                counter ++

            }
        } 
    }) 
}