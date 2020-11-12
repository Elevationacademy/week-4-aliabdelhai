
let wisdoms = []


wisdoms = JSON.parse(localStorage.getItem('wisdom')) || []

console.log(wisdoms)


$('.clear').click(function(){
    localStorage.clear()
})

var source = $('#store-template').html();
var template = Handlebars.compile(source);
const newHTML = template({wisdoms});
$('.results').append(newHTML);


$('.my-button').on('click', function(){
    const myInput = $('.my-input').val()
    $('.my-input').val("") 
    wisdoms.push({text: myInput, id:wisdoms.length})
    if(wisdoms.length % 2 == 0)
    {
        localStorage.setItem('wisdom', JSON.stringify(wisdoms))
        let data = JSON.parse(localStorage.wisdom)
        console.log(data)

    }
})


