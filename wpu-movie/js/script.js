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
            if(result.Response == "True") {  let movies = result.Search;

                $.each(movies, function(i,data){
                    $('#Movie-list').append(`<div class="card mb-3" style="width: 20rem;">
                    <img src=`+ data.Poster +` class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">`+ data.Title +`</h5>
                      <h6 class="card-subtitle mb-2 text-muted">`+ data.Year + `</h6>
                      <a href="#" class="card-link see-detail" data-bs-toggle="modal" data-bs-target="#exampleModal"data-id="` + data.imdbID +`">See Detail</a>
                      
                    </div>
                  </div>`);

                });   
            } else{
                $('#Movie-list').html('<h1>Movie Not Found!')
            }
            }
    });
});

