<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <title>WPU Hut</title>
  </head>
  <body>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
  <div class="container">
    <a class="navbar-brand" href="#">
      <img src="img/logo.png"width = "130">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">All Menu</a>
       
    </div>
  </div>
  <div class="row">
      <?php foreach($menu as $row) :?>
      <div class="col-md-4">
        <div class="card mb-3">
          <img src="img/menu/<?=$row["gambar"];?>" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title"><?=$row["nama"];?> 
           </h5> 
           <p class="card-text"><?= $row["deskripsi"];?></p>
            <h5 class="card-title">Rp. <?=$row["harga"];?> </h5>
           <a href="#" class="btn btn-primary">Pesan Sekarang</a>
     </div>
   </div>
  </div>
