// webhose api

console.log("WebHose is all good")

var key = 'https://webhose.io/search?token=32083bb7-13bf-40c4-a810-5e5c518f259d&format=json&q='

var performance = ')%20performance_score%3A%3E0'

var type = '&site_type=news'

var title = '%20thread.title%3A('

// array for sites
 

//var site_mail = '&site=dailymail.co.uk'
//
//var site_bbc = '&site=bbc.co.uk'
//
//var site_guardian = '&site=theguardian.com'
//
//var site_sun = '&site=thesun.co.uk'
//
//var site_telegraph = '&site=telegraph.co.uk'
//
//var site_mirror = '&site=mirror.co.uk'
//
//var site_express = '&site=express.co.uk'
//
//var site_independent = '&site=independent.co.uk'
//
//var site_inews = '&site=inews.co.uk'

var sites = 
[
  'dailymail.co.uk',
  'bbc.co.uk',
  'mirror.co.uk',
  'theguardian.com',
  'independent.co.uk',
  'express.co.uk',
    'inews.co.uk',
    'telegraph.co.uk',
    'thesun.co.uk',
]

function getWebhoseData(webhoseURL, containerID)
{
  console.log('getWebhoseData', webhoseURL)

    var ul = $(containerID)
    
    $.ajax(
    {
        dataType: "json",
        url: webhoseURL, // the url to get data from
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
                
                
                
                var title = (post.title);
                
                console.log("Original Title:" + post.title)
                
                var splitTitle = title.split('|' '\\\ - ')[0];
//                var splitTitle = title.split(' - ')[0];
//                splitTitle = title.split('– B')[0];
//                splitTitle = title.split('– T')[0];
                
                console.log("Split Title:" + splitTitle);
                
//                console.log("title: " + title)
//                console.log("splitTitle: " + splitTitle);
//                console.log("splitTitleBBC: " + splitTitleBBCSport);
//                console.log("splitTitleMirror: " + splitTitleMirror);
                
//                console.log(trimTitle)
                
//                console.log(post.url)

//                console.log(post.thread.main_image)
                
                //The List structure for the pulled content
                
                var li = '<li>'
                    + '<a href="' + post.url + '">' + '<img src="' + post.thread.main_image + '">'
                    + '<div class="a-wrapper"><a href="' + post.url + '">' + splitTitle +'</a></div>'
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

function getWebhoseURL(query, site)
{
  var token = '5c8727f8-e049-4cb4-b308-46970606ad5c'
  var performance_score = 0 // 0 - 10 (10 being super-viral)
  var language = 'english'
  var site_type = 'news'
  
  var webhoseURL = 'https://webhose.io/search'
                 + '?token=' + token
                 + '&format=json'
                 + '&q=' + query
                 // + ' thread.title:(' + query + ')' // uncomment if you want to restrict results to those who have query in the article's title
                 + ' language:(' + language +')'
                 + ' site:' + site 
                 + ' performance_score:>' + performance_score 
                 + ' (site_type:' + site_type + ')'

  console.log('getWebhoseURL', webhoseURL)

  // https://webhose.io/search?token=b4e7b558-57ce-4c49-a8d2-ac3636d65afb&format=json&q=corbyn thread.title:(corbyn) language:(english) site:theguardian.com performance_score:>0 (site_type:news)

  return webhoseURL   
}
