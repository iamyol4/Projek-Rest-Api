<?php

 $mahasiswa =[
   [
         "nama" => "Yola Sahrani",
          "nim" => "2217020134",
          "email"=> "yolasahrani@gmail.com"
     ],
     [
          "nama"=> "Nita Herawaty",
          "nim" => "25170120123",
          "email"=> "nitahera@gmail.com"
    
     ]
 ];
 $data = json_encode($mahasiswa);
 echo $data;
 ?>