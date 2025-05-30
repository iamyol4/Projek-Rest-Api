function searchMovies(){
    $('#Movie-list').html('');

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
                let movies = result.Search;

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

               $('#search-input').val('');


            } else {
                 $('#Movie-list').html(`<div class="col-12 text-center">
                 <h1 class = "text-center">`+ result.Error +`</h1></div>
                 `); 
            }
        }

    });
}
$('#search-button').on('click', function (){
    searchMovies();
   

});

$('#search-input').on('keyup', function (e){
    if(e.keyCode === 13){
        searchMovies();
    }
});

$('#Movie-list').on('click','.see-detail', function (){
    console.log($(this).data('id'));

    $.ajax({
        url:'https://omdbapi.com',
        dataType:'json',
        data: {
            'apikey':'14694818',
            'i':$(this).data('id') 
        },
        success: function(movie){
            if(movie.Response === "True"){

                $('.modal-body').html(`<div class="container-fluid">
                <div class="row">
                <div class="col-md-4">
                <img src="`+ movie.Poster +`"class="img-fluid">
                </div>
                <div class="col-md-8">
                <ul class="list-group">
                <li class="list-group-item"><h3> `+ movie.Title +`</h3></li>
                <li class="list-group-item">Released : `+ movie.Released +`</li>
                <li class="list-group-item">Director: `+ movie.Director +`</li>
                <li class="list-group-item">Actors: `+ movie.Actors +`</li>
                
        
                </ul>
                </div>
                </div>
                `);
            
            }

        }
    })
});