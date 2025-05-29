$('#search-button').on('click', function (){
    $.ajax({
        url: 'http://omdbapi.com',
        type: 'get',
        dataType: 'json',
        data:{
            'apikey':'14694818',
            's': $('#search-input').val()
            
        },
        success: function (result) {
            if(result.Response == "True") {
            } else{
                $('#Movie-list').html('<h1>Movie Not Found!')
            }
            }
    });
});

