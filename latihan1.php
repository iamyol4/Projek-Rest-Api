<?php

//  $mahasiswa =[
//    [
//          "nama" => "Yola Sahrani",
//           "nim" => "2217020134",
//           "email"=> "yolasahrani@gmail.com"
//      ],
//      [
//           "nama"=> "Nita Herawaty",
//           "nim" => "25170120123",
//           "email"=> "nitahera@gmail.com"
    
//      ]
//  ];
//  $data = json_encode($mahasiswa);
//  echo $data;


$dbh = new PDO("mysql:host=localhost;dbname=e-monti","root","");
$db =$dbh->prepare("SELECT * FROM building");
$db->execute();
$building =$db->fetchAll(PDO::FETCH_ASSOC);


$data = json_encode($building); 
echo $data; 
 ?>