<?php
use Restserver\Libraries\REST_Controller;
defined('BASEPATH') OR exit('No direct script access allowed');


require APPPATH . 'libraries/REST_Controller.php';
require APPPATH . 'libraries/Format.php';


class Mahasiswa extends REST_controler;
{
  public function  index_get()

  {
    $mahasiswa = $this->Mahasiswa_model->getmahasiswa();
    var_dump($mahasiswa);
  }
}