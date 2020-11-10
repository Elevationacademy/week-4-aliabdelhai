

//////////////// EX1 /////////////////////////////

const fetch1 = function(isbn)
{
    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`,
        success: function (data) {
            console.log(data);
        },
        error: function (xhr, text, error) {
            alert('Error!')
        }   
    });
} 

//////////////// EX2 /////////////////////////////

const fetch2 = function(queryType, queryValue)
{
    if(queryType == "title")
    {
        queryValue = queryValue.toLowerCase().split(" ").join("%20")
    }
    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
        success: function (data) {
            console.log(data);
        },
        error: function (xhr, text, error) {
            alert('Error!')
        }   
    });
} 



//////////////// EX3 /////////////////////////////


const fetch3 = function(queryType, queryValue)
{
    if(queryType == "title")
    {
        queryValue = queryValue.toLowerCase().split(" ").join("%20")
    }
    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
        success: function (data) {
            let items = data.items
            items.forEach(element => {
                console.log(`The title : ${element.volumeInfo.title}, The author: ${element.volumeInfo.authors[0]}, The ISBN: ${element.volumeInfo.industryIdentifiers[0].identifier}`)
            });
        },
        error: function (xhr, text, error) {
            alert('Error!')
        }   
    });
} 

// fetch3("title", "How to Win Friends and Influence People")
// fetch3("isbn", 9789814561778)



//////////////// EX4+EX5+Extension /////////////////////////////


$('.search').on('click', function() {
    let giphy=$('.my-input').val()

    $.ajax({
        method: 'GET',
        url: `http://api.giphy.com/v1/gifs/search?q=${giphy}&api_key=XtKfO02MaHWV000rlrFS58c0hjGxDKJu`,
        success: function (response) {
            $('.result').empty()
            let data = response.data
            const embedURLs = data.map(x => x.embed_url);
            for(let giph of embedURLs)
            {
                $('.result').append(
                    $(`<div><iframe src="${giph}"></iframe><button class="Add">add</button></div>`)
                    )
            }
        },
        error: function (xhr, text, error) {
            console.log('error');
        }
    
    })
})

let favoriteGifs = []

$('.result').on('click','.Add',function () {
        const url = $(this).closest('div').find('iframe').attr('src')
        favoriteGifs.push(url)
})

$('.Favorite').on('click', function()
{
    $('.result').empty()
    $('.result').append(`<h1>Favorite GIFs</h1>`)
    for(let giph of favoriteGifs)
        {
            $('.result').append(
                $(`<div><iframe src="${giph}"></iframe></div>`)
                )
        }

})
