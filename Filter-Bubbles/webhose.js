// webhose api

console.log("WebHose is all good")

var key = 'https://webhose.io/search?token=32083bb7-13bf-40c4-a810-5e5c518f259d&format=json&q='

var performance = ')%20performance_score%3A%3E0'

var type = '&site_type=news'

var title = '%20thread.title%3A('

// array for sites
 

var site_mail = '&site=dailymail.co.uk'

var site_bbc = '&site=bbc.co.uk'

var site_guardian = '&site=theguardian.com'

var site_sun = '&site=thesun.co.uk'

var site_times = '&site=thetimes.co.uk'

var site_telegraph = '&site=telegraph.co.uk'

var site_mirror = '&site=mirror.co.uk'

var site_express = '&site=express.co.uk'

var site_independent = '&site=independent.co.uk'

var site_inews = '&site=inews.co.uk'




//var recent = 'Osborne'

function callWebhose(url, container)
{
    var ul = $(container)
    
    $.ajax(
    {
        dataType: "json",
        url: url, // the url to get data from
        success: function ( json ) // the function to execute once we get data back from WebHose
        {
            console.log(json)

            //the counter that goes through the JSON data
            
            var posts = json.posts

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
//                    + '<h2>' + post.title + '</h2>'
                    + '<a href="' + post.url + '">' + '<img src="' + post.thread.main_image + '">'
                    + '<div class="a-wrapper"><a href="' + post.url + '">' + post.title + '</a></div>'
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

